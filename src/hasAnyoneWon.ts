const boardDimension = 3

const hasAnyoneWon = (tiles: string[]): boolean => {
  for (let i = 0; i < boardDimension; i++) {
    const initialTile = i * boardDimension
    const finalTile = initialTile + boardDimension
    const row = tiles.slice(initialTile, finalTile)

    if (allEqual(row)) return true
  }
  return false
}

const allEqual = (arr: string[]): boolean => arr.every((v) => v === arr[0])

export default hasAnyoneWon
