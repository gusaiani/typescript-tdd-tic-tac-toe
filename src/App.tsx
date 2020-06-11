import React, { useState } from 'react'
import { Board } from './App.styled'
import Button from './components/Button/Button'
import './App.css'

const initialTiles: string[] = Array(9).fill('')

const App: React.FC = () => {
  const [tiles, setTiles] = useState(initialTiles)

  const handleClick = (index: number): void => {
    if (tiles[index] === '') {
      tiles[index] = '×'
      setTiles([...tiles])
    }
  }

  return (
    <Board>
      {tiles.map((tile, index) => {
        return (
          <Button
            key={`tile-${index}`}
            handleClick={(): void => handleClick(index)}
          >
            {tile}
          </Button>
        )
      })}
    </Board>
  )
}

export default App
