import { HttpConfig, HttpMethod } from './http-types'
import { map } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

export class HttpDataService {
  get<T = any>(input: HttpConfig) {
    return ajax(this._getConfig(input, 'GET')).pipe(
      map((response) => response.response as T)
    )
  }

  post<T = any>(input: HttpConfig) {
    return ajax(this._getConfig(input, 'POST')).pipe(
      map((response) => response.response as T)
    )
  }

  pur<T = any>(input: HttpConfig) {
    return ajax(this._getConfig(input, 'PUT')).pipe(
      map((response) => response.response as T)
    )
  }

  patch<T = any>(input: HttpConfig) {
    return ajax(this._getConfig(input, 'PATCH')).pipe(
      map((response) => response.response as T)
    )
  }

  delete<T = any>(input: HttpConfig) {
    return ajax(this._getConfig(input, 'DELETE')).pipe(
      map((response) => response.response as T)
    )
  }

  private _getConfig(input: HttpConfig, method: HttpMethod) {
    return typeof input === 'string'
      ? { url: input, method }
      : { ...input, method }
  }
}
