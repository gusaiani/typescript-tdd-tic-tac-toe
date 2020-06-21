import * as React from 'react'

import { Container } from './Button.styled'

type Props = {
  children: string
  key: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ children, handleClick }) => (
  <Container onClick={handleClick} className={`tile-${children}`}>
    {children}
  </Container>
)

export default Button
