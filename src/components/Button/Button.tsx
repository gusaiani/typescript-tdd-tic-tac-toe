import * as React from 'react'

import { Container } from './Button.styled'

type Props = { children: string; key: string }
const Button: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Button
