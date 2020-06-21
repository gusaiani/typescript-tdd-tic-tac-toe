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
  test("displays winner text once it's over", async () => {
    const buttons = render()

    expect(screen.queryByText(/we have a winner/i)).toBeNull()

    user.click(buttons[0])
    expect(screen.getByText('×')).toBeInTheDocument()

    user.click(buttons[3])
    expect(screen.getByText('○')).toBeInTheDocument()

    let buttonsToClick = [1, 4, 2, 5]

    buttonsToClick.forEach((button) => user.click(buttons[button]))

    expect(screen.getByText('We have a winner: ×')).toBeInTheDocument()

    user.click(screen.getByText('Play again'))
    expect(screen.queryByText(/we have a winner/i)).toBeNull()
    buttons.forEach((button) => {
      expect(button).toHaveTextContent('')
    })

    buttonsToClick = [1, 0, 2, 4, 3, 5, 6, 7, 8]

    buttonsToClick.forEach((button) => user.click(buttons[button]))

    const playAgainButton = await screen.findByRole('button', {
      name: /play again/i,
    })

    expect(playAgainButton).toBeInTheDocument()
  })
})
