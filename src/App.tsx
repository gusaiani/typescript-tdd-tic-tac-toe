import React, { useEffect, useState } from 'react'
import { Board, GithubButtonContainer, PlayAgainButton } from './App.styled'
import Button from './components/Button/Button'
import hasAnyoneWon from './hasAnyoneWon'
import './App.css'

const initialTiles: string[] = Array(9).fill('')

const pieces: string[] = ['×', '○']

const App: React.FC = () => {
  const [tiles, setTiles] = useState([...initialTiles])
  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (winner) setGameOver(true)
  }, [winner])

  useEffect(() => {
    const isTie = (): boolean => {
      return !tiles.some((tile) => tile === '')
    }

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
      <GithubButtonContainer>
        <a
          className='github-button'
          href='https://github.com/gusaiani/typescript-tdd-tic-tac-toe'
          data-icon='octicon-star'
          data-size='large'
          data-show-count='true'
          aria-label='Star gusaiani/typescript-tdd-tic-tac-toe on GitHub'
        >
          Star
        </a>
      </GithubButtonContainer>
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
      {gameOver && (
        <PlayAgainButton onClick={handleNewGame}>Play again</PlayAgainButton>
      )}
    </>
  )
}

export default App
