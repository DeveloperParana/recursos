import {
  accumulate,
  castArray,
  cloneArray,
  countBy,
  countOccurrences,
  isEmpty,
  isEqual,
  range,
} from './shared-util-collection'

const USE = {
  empty: [],
  number: 1,
  numbers: [0, 1, 2, 1, 0],
  object: [{ n: '1' }],
  objects: [{ n: '1' }, { n: '2' }, { n: '1' }],
}

describe('sharedUtilCollection', () => {
  it('should cast a value as an array ', () => {
    expect(castArray(USE.number)).toStrictEqual([USE.number])
  })

  it('should clone array ', () => {
    expect(cloneArray(USE.numbers)).toStrictEqual(USE.numbers)
  })

  it('should be empty ', () => {
    expect(isEmpty(USE.empty)).toBeTruthy()
  })

  it('should not be empty ', () => {
    expect(isEmpty(USE.numbers)).toBeFalsy()
  })

  it('should is equal', () => {
    expect(isEqual(USE.object, USE.object)).toBeTruthy()
  })

  it('should not equal ', () => {
    expect(isEqual(USE.object, USE.numbers)).toBeFalsy()
  })

  it('should count by ', () => {
    expect(countBy(USE.objects, 'n')).toStrictEqual({ '1': 2, '2': 1 })
  })

  it('should count occurrences ', () => {
    expect(countOccurrences(USE.numbers, 1)).toEqual(2)
  })

  it('should accumulate values ', () => {
    expect(accumulate(USE.numbers)).toEqual([0, 1, 3, 4, 4])
  })

  it('should given array of range numbers ', () => {
    expect(range(5, 10)).toEqual([5, 6, 7, 8, 9, 10])
  })
})
