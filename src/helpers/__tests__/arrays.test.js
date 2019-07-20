import { getFirstArrayValues } from '../arrays'

describe('#getFirstArrayValues', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it('should return correct values', () => {
    const values = getFirstArrayValues(array, 3)
    expect(values).toEqual([1, 2, 3])
  })

  it('should return empty array when no params provided', () => {
    const values = getFirstArrayValues([])
    expect(values).toEqual([])
  })
})