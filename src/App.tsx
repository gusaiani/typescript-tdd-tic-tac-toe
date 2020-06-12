import React, { useEffect, useState } from 'react'
import { Board } from './App.styled'
import Button from './components/Button/Button'
import './App.css'

const initialTiles: string[] = Array(9).fill('')

const App: React.FC = () => {
  const [tiles, setTiles] = useState(initialTiles)
  const [turn, setTurn] = useState(0)

  const pieces: string[] = ['×', '○']

  useEffect(() => {
    if (tiles.includes(pieces[0])) {
      setTurn((t) => t + 1)
    }
  }, [tiles])

  const handleClick = (index: number): void => {
    if (tiles[index] === '') {
      tiles[index] = pieces[turn % 2]
      setTiles([...tiles])
    }
  }

  return (
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
  )
}

export default App
