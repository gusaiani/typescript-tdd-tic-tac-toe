import React, { useEffect, useState } from 'react'
import { Board } from './App.styled'
import Button from './components/Button/Button'
import hasAnyoneWon from './hasAnyoneWon'
import './App.css'

const initialTiles: string[] = Array(9).fill('')

const App: React.FC = () => {
  const [tiles, setTiles] = useState([...initialTiles])
  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const pieces: string[] = ['×', '○']

  const isTie = (): boolean => {
    return !tiles.some((tile) => tile === '')
  }

  useEffect(() => {
    if (winner) setGameOver(true)
  }, [winner])

  useEffect(() => {
    if (!tiles.includes(pieces[0])) return
    if (hasAnyoneWon(tiles)) return setWinner(true)
    if (isTie()) return setGameOver(true)
    setTurn((t) => t + 1)
  }, [tiles])

  const handleClick = (index: number): void => {
    if (tiles[index] === '' && !winner) {
      tiles[index] = pieces[turn % 2]
      setTiles([...tiles])
    }
  }

  const handleNewGame = (): void => {
    setWinner(false)
    setGameOver(false)
    setTiles([...initialTiles])
    setTurn(0)
  }

  return (
    <>
      <Board>
        {tiles.map((tile, index) => (
          <Button
            key={`tile-${index}`}
            handleClick={(): void => handleClick(index)}
          >
            {tile}
          </Button>
        ))}
      </Board>
      {winner && <div>We have a winner: {pieces[turn % 2]}</div>}
      {gameOver && <button onClick={handleNewGame}>Play again</button>}
    </>
  )
}

export default App
