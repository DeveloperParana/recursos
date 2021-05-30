import { isFakeBool } from './is-fake-bool'
import { parse } from 'json5'

export function parseValue(value: any) {
  const tmpValue = isNaN(+value) ? value : +value

  if (typeof tmpValue === 'number') {
    return tmpValue
  }
  if (isFakeBool(tmpValue)) {
    return value == 'false' ? false : true
  }

  try {
    return parse(value)
  } catch (err) {
    return value
  }
}
