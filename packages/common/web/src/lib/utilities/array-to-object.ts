export function arrayToObject(arr: any[]) {
  return arr.reduce((result, item) => {
    const key = Object.keys(item)[0]
    result[key] = item[key]
    return result
  })
}
