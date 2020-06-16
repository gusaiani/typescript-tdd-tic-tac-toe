import hasAnyoneWon from './hasAnyoneWon'

describe('hasAnyoneWon', () => {
  describe('by row', () => {
    test('won first row', () => {
      // prettier-ignore
      const tiles = [
        '0', '0', '0',
        '1', '0', '1',
        '0', '1', '0'
      ]

      expect(hasAnyoneWon(tiles)).toBe(true)
    })

    test('won second row', () => {
      // prettier-ignore
      const tiles = [
        '1', '0', '1',
        '0', '0', '0',
        '0', '1', '0'
      ]

      expect(hasAnyoneWon(tiles)).toBe(true)
    })

    test('won third row', () => {
      // prettier-ignore
      const tiles = [
        '1', '0', '1',
        '0', '1', '0',
        '0', '0', '0'
      ]

      expect(hasAnyoneWon(tiles)).toBe(true)
    })
  })

  describe('by column', () => {
    test('won first column', () => {
      // prettier-ignore
      const tiles = [
        '0', '1', '0',
        '0', '0', '1',
        '0', '1', '0'
      ]

      expect(hasAnyoneWon(tiles)).toBe(true)
    })

    test('won second column', () => {
      // prettier-ignore
      const tiles = [
        '1', '0', '1',
        '1', '0', '0',
        '0', '0', '1'
      ]

      expect(hasAnyoneWon(tiles)).toBe(true)
    })

    test('won third column', () => {
      // prettier-ignore
      const tiles = [
        '1', '0', '0',
        '0', '1', '0',
        '1', '0', '0'
      ]

      expect(hasAnyoneWon(tiles)).toBe(true)
    })
  })

  describe('by diagonals', () => {
    test('top left to bottom right', () => {
      // prettier-ignore
      const tiles = [
        '0', '1', '1',
        '1', '0', '1',
        '0', '1', '0'
      ]

      expect(hasAnyoneWon(tiles)).toBe(true)
    })

    test('top right to bottom left', () => {
      // prettier-ignore
      const tiles = [
        '0', '1', '0',
        '1', '0', '1',
        '0', '1', '1'
      ]

      expect(hasAnyoneWon(tiles)).toBe(true)
    })
  })

  describe('no winner', () => {
    test('unclaimed tiles do not mean victory', () => {
      // prettier-ignore
      const tiles = [
        '',  '',  '',
        '1', '0', '1',
        '0', '1', '0'
      ]

      expect(hasAnyoneWon(tiles)).toBe(false)
    })

    test('a tie', () => {
      // prettier-ignore
      const tiles = [
        '0', '1', '0',
        '1', '0', '1',
        '1', '0', '1'
      ]

      expect(hasAnyoneWon(tiles)).toBe(false)
    })
  })
})
