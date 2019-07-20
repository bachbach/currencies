export const removeItemFromCollectionById = (array = [], id) => {
  const index = array.findIndex(item => item.id === id)
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ]
}