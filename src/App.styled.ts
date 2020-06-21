import styled from 'styled-components'

const Board = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  margin-bottom: 80px;
`

const PlayAgainButton = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 1px solid;
  color: rgb(150, 150, 150);
  cursor: pointer;
  margin-top: 30px;
  padding: 10px 16px 12px;
`

export { Board, PlayAgainButton }
