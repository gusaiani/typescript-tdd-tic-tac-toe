import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

test('starts game with 9 empty tiles', () => {
  render(<App />)
  const buttons = screen.getAllByRole('button')

  buttons.forEach((button) => {
    expect(button).toHaveTextContent('')
  })

  expect(buttons.length).toBe(9)
})

test('first tile, when clicked, shows ×', () => {
  render(<App />)
  const buttons = screen.getAllByRole('button')
  const [button] = buttons

  user.click(button)
  expect(screen.getByText('×')).toBeInTheDocument()
})
