export function sharedUtilCollection(): string {
  return 'shared-util-collection'
}

export const castArray = <T>(value: T | T[]) => {
  return Array.isArray(value) ? value : [value]
}

export const isEmpty = <T>(arr: T[]) => {
  return !Array.isArray(arr) || arr.length === 0
}

export const isEqual = <T>(a: T[], b: T[]) => {
  return a.length === b.length && a.every((v, i) => v === b[i])
}

export const toObject = <T>(arr: T[], key: string) => {
  return arr.reduce((a, b) => ({ ...a, [b[key as string]]: b }), {})
}

export const countBy = <T>(arr: T[], prop: keyof T) => {
  const handle = (prev: T, curr) => (
    (prev[curr[prop]] = ++prev[curr[prop]] || 1), prev
  )
  return arr.reduce(handle, {})
}

export const countOccurrences = <T>(arr: T[], val: T) => {
  return arr.filter((item) => item === val).length
}

export const accumulate = <T>(arr: T[]) => {
  return arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [])
}

export const range = (min: number, max: number) => {
  return [...Array(max - min + 1).keys()].map((i) => i + min)
}

export const closest = <T>(arr: number[], n: number) => {
  return arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0]
}

export const lastIndex = <T>(
  arr: T[],
  predicate: (...args: unknown[]) => boolean
) => {
  return arr.map((item) => predicate(item)).lastIndexOf(true)
}

export const indexOfMax = <T>(arr: T[]) => {
  return arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0)
}

export const indexOfMin = <T>(arr: T[]) => {
  return arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)
}

export const findLongest = (words: string[]) => {
  return Math.max(...words.map((el) => el.length))
}

export const max = (arr: number[]) => Math.max(...arr)

export const maxBy = <T>(arr: T[], key: keyof T) => {
  return arr.reduce((a, b) => (a[key as string] >= b[key] ? a : b), {})
}

export const min = (arr: number[]) => Math.min(...arr)

export const minBy = <T>(arr: T[], key: keyof T) => {
  return arr.reduce((a, b) => (a[key as string] < b[key] ? a : b), {})
}
