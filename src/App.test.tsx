import React from 'react'
import { render as renderRtl, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

const render = (): HTMLElement[] => {
  renderRtl(<App />)
  return screen.getAllByRole('button')
}

test('starts game with 9 empty tiles', () => {
  const buttons = render()

  buttons.forEach((button) => {
    expect(button).toHaveTextContent('')
  })

  expect(buttons.length).toBe(9)
})

describe('a game', () => {
  test("displays winner text once it's over", () => {
    const buttons = render()

    expect(screen.getByText('No winner')).toBeInTheDocument()

    user.click(buttons[0])
    expect(screen.getByText('×')).toBeInTheDocument()

    user.click(buttons[3])
    expect(screen.getByText('○')).toBeInTheDocument()

    const buttonsToClick = [1, 4, 2, 5]

    buttonsToClick.forEach((button) => user.click(buttons[button]))

    expect(screen.getByText('We have a winner: ×')).toBeInTheDocument()

    user.click(screen.getByText('Play again'))
    expect(screen.getByText('No winner')).toBeInTheDocument()
    buttons.forEach((button) => {
      expect(button).toHaveTextContent('')
    })
  })
})
