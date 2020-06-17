import React, { useEffect, useState } from 'react'
import { Board } from './App.styled'
import Button from './components/Button/Button'
import hasAnyoneWon from './hasAnyoneWon'
import './App.css'

const initialTiles: string[] = Array(9).fill('')

const App: React.FC = () => {
  const [tiles, setTiles] = useState(initialTiles)
  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = useState(false)

  const pieces: string[] = ['×', '○']

  useEffect(() => {
    if (!tiles.includes(pieces[0])) return
    if (hasAnyoneWon(tiles)) return setWinner(true)
    setTurn((t) => t + 1)
  }, [tiles])

  const handleClick = (index: number): void => {
    if (tiles[index] === '' && !winner) {
      tiles[index] = pieces[turn % 2]
      setTiles([...tiles])
    }
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
      {winner ? `We have a winner: ${pieces[turn % 2]}` : 'No winner'}
    </>
  )
}

export default App
