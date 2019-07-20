import { SIMILAR_BEER_DIFF_PERCENTEGE } from 'constants/similarBeer'

/**
 * Returns array with numbers increased and decreased by provided value:
 * e.q:
 * numbers: [1,2], diff: 2
 * returns: [[-1, 3], [0, 4]]
 * @param numbers
 * @param value
 * @returns {*[][]}
 */
export const getRangeBy = (numbers = [], value = SIMILAR_BEER_DIFF_PERCENTEGE) => {
  return numbers.map(number => {
    const diff = number * value
    return [number - diff, number + diff]
  })
}

/**
 * Returns array with rounded range values
 * @param ranges
 * @returns {*[][]}
 */
export const roundRanges = (ranges = []) =>{
  return ranges.map(range => [ Math.round(range[0]), Math.round(range[1]) ])
}
