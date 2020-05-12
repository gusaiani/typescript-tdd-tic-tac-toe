import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('starts game with 9 empty tiles', () => {
  render(<App />)

  expect(screen.getAllByRole('button').length).toBe(9)
})
