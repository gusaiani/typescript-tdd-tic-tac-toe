const boardDimension = 3

const hasAnyoneWon = (tiles: string[]): boolean => {
  if (getVictoryByRow(tiles)) return true
  if (getVictoryByColumn(tiles)) return true
  if (getVictoryByDiagonal(tiles)) return true
  return false
}

const getVictoryByRow = (tiles: string[]): boolean => {
  for (let i = 0; i < boardDimension; i++) {
    const initialTile = i * boardDimension
    const finalTile = initialTile + boardDimension
    const row = tiles.slice(initialTile, finalTile)

    if (allEqual(row)) return true
  }

  return false
}

const getVictoryByColumn = (tiles: string[]): boolean => {
  for (let i = 0; i < boardDimension; i++) {
    const column: string[] = tiles.filter((tile, index) => {
      return (index - i) % boardDimension === 0
    })

    if (allEqual(column)) return true
  }
  return false
}

const getVictoryByDiagonal = (tiles: string[]): boolean => {
  const topLeftToBottomRightDiagonal = [tiles[0], tiles[4], tiles[8]]
  const bottomRightToTopLeftDiagonal = [tiles[2], tiles[4], tiles[6]]
  if (allEqual(topLeftToBottomRightDiagonal)) return true
  if (allEqual(bottomRightToTopLeftDiagonal)) return true
  return false
}

const allEqual = (arr: string[]): boolean =>
  arr.every((v) => v !== '' && v === arr[0])

export default hasAnyoneWon
