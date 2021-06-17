/**
 * Cast a value as an array
 *
 * @template T
 * @param {(T | T[])} value
 */
export function castArray<T>(value: T | T[]) {
  return Array.isArray(value) ? value : [value]
}

/**
 * Clone an array
 *
 * @template T
 * @param {T[]} arr
 */
export function cloneArray<T>(arr: T[]) {
  return Array.from(arr)
}

/**
 * Check if an array is empty
 *
 * @template T
 * @param {T[]} arr
 */
export function isEmpty<T>(arr: T[]) {
  return !Array.isArray(arr) || arr.length === 0
}

/**
 * Compare two arrays
 *
 * @template T
 * @param {T[]} a
 * @param {T[]} b
 */
export function isEqual<T, O>(a: T[], b: T[] | O[]) {
  return a.length === b.length && a.every((v, i) => v === b[i])
}

/**
 * Count by the properties of an array of objects
 *
 * @template T
 * @param {T[]} arr
 * @param {keyof T} prop
 */
export function countBy<T>(arr: T[], prop: keyof T) {
  const handle = (prev: T, curr) => (
    (prev[curr[prop]] = ++prev[curr[prop]] || 1), prev
  )
  return arr.reduce(handle, {})
}

/**
 * Count the occurrences of a value in an array
 *
 * @template T
 * @param {T[]} arr
 * @param {T} val
 */
export function countOccurrences<T>(arr: T[], val: T) {
  return arr.filter((item) => item === val).length
}

/**
 * Create an array of cumulative sum
 *
 * @template T
 * @param {T[]} arr
 */
export function accumulate<T>(arr: T[]) {
  return arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [])
}

/**
 * Create an array of numbers in the given range
 *
 * @param {number} min
 * @param {number} max
 */
export function range(min: number, max: number) {
  return [...Array(max - min + 1).keys()].map((i) => i + min)
}

/**
 * Find the closest number from an array
 *
 * @template T
 * @param {number[]} arr
 * @param {number} n
 */
export function closest<T>(arr: number[], n: number) {
  return arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0]
}

/**
 * Find the index of the last matching item of an array
 *
 * @template T
 * @param {T[]} arr
 * @param {(...args: unknown[]) => boolean} predicate
 */
export function lastIndex<T>(
  arr: T[],
  predicate: (...args: unknown[]) => boolean
) {
  return arr.map((item) => predicate(item)).lastIndexOf(true)
}

/**
 * Find the index of the maximum item of an array
 *
 * @template T
 * @param {T[]} arr
 */
export function indexOfMax<T>(arr: T[]) {
  return arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0)
}

/**
 * Find the index of the minimum item of an array
 *
 * @template T
 * @param {T[]} arr
 */
export function indexOfMin<T>(arr: T[]) {
  return arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)
}

/**
 * Find the length of the longest string in an array
 *
 * @param {string[]} words
 */
export function findLongest(words: string[]) {
  return Math.max(...words.map((el) => el.length))
}

/**
 * Find the maximum item of an array
 * @param {number[]} arr
 */
export const max = (arr: number[]) => Math.max(...arr)

/**
 * Find the maximum item of an array by given key
 *
 * @template T
 * @param {T[]} arr
 * @param {keyof T} key
 */
export function maxBy<T>(arr: T[], key: keyof T) {
  return arr.reduce((a, b) => (a[key as string] >= b[key] ? a : b), {})
}

/**
 * Find the minimum item of an array
 * @param {number[]} arr
 */
export const min = (arr: number[]) => Math.min(...arr)

/**
 * Find the minimum item of an array by given key
 *
 * @template T
 * @param {T[]} arr
 * @param {keyof T} key
 */
export function minBy<T>(arr: T[], key: keyof T) {
  return arr.reduce((a, b) => (a[key as string] < b[key] ? a : b), {})
}
