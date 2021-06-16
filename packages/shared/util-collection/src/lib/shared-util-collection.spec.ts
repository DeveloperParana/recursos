import {
  castArray,
  isEmpty,
  isEqual,
  sharedUtilCollection,
} from './shared-util-collection'

describe('sharedUtilCollection', () => {
  it('should work', () => {
    expect(sharedUtilCollection()).toEqual('shared-util-collection')
  })

  it('should cast a value as an array ', () => {
    expect(castArray(1)).toStrictEqual([1])
  })

  it('should isEmpty true ', () => {
    expect(isEmpty([])).toBeTruthy()
  })

  it('should isEmpty false ', () => {
    expect(isEmpty([0])).toBeFalsy()
  })

  it('should isEqual true', () => {
    expect(isEqual([0], [0])).toBeTruthy()
  })

  it('should isEqual false ', () => {
    expect(isEqual([0], [1])).toBeFalsy()
  })
})
