import { getRangeBy, roundRanges } from '../numbers'

describe('#getRangeBy', () => {
  it('should return correct percentage ranges', () => {
    const ranges = getRangeBy([10, 100, 1000])
    expect(ranges).toEqual([[ 7, 13 ], [70, 130], [700, 1300]])
  })

  it('should return correct percentage ranges with custom value', () => {
    const ranges = getRangeBy([10, 100, 1000], .4)
    expect(ranges).toEqual([[ 6, 14 ], [60, 140], [600, 1400]])
  })

  it('should return empty array when no params provided', () => {
    const ranges = getRangeBy()
    expect(ranges).toEqual([])
  })
})

describe('#roundRanges', () => {
  it('should return correct rounded ranges', () => {
    const ranges = roundRanges([[1.2, 0.9999], [99.9, -8], [0, 1.000000001], [null, null]])
    expect(ranges).toEqual([[ 1, 1 ], [100, -8], [0, 1], [0, 0]])
  })

  it('should return empty array when no params provided', () => {
    const ranges = getRangeBy()
    expect(ranges).toEqual([])
  })
})