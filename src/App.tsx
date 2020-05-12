import React, { useState } from 'react'
import { Board } from './App.styled'
import Button from './components/Button/Button'
import './App.css'

const initialTiles: number[] = Array(9).fill(null)

function App() {
  const [tiles, setTiles] = useState(initialTiles)
  return (
    <Board>
      {tiles.map((tile, index) => (
        <Button key={`tile-${index}`}>Button</Button>
      ))}
    </Board>
  )
}

export default App
