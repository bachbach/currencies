import { removeItemFromCollectionById } from '../collections'

describe('#removeItemFromCollectionById', () => {
  const collection = [
    {
      id: 1,
      value: 'test'
    },
    {
      id: 2,
      value: 'test'
    },
    {
      id: 3,
      value: 'test'
    }
  ]

  it('should return correct values', () => {
    const values = removeItemFromCollectionById(collection, 2)
    expect(values).toEqual([
      {
        id: 1,
        value: 'test'
      },
      {
        id: 3,
        value: 'test'
      }
    ])
  })

  it('should return empty array when no params provided', () => {
    const values = removeItemFromCollectionById([])
    expect(values).toEqual([])
  })
})