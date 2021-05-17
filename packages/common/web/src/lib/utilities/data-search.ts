const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;'
const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------'
const p = new RegExp(a.split('').join('|'), 'g')

export function dropSpecialChars(str: string) {
  return str.toString().replace(p, (c) => b.charAt(a.indexOf(c)))
}

export function clearToSearch(str: string) {
  return dropSpecialChars(str)
    .replace(/[^\w\s]|_/g, '')
    .toLowerCase()
}

export const dataSearch = <T>(list: T[], query: string) => {
  return list.filter((item) => {
    return Object.keys(item).some((key) => {
      return clearToSearch(item[key]).indexOf(clearToSearch(query)) > -1
    })
  })
}
