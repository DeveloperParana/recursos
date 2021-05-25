import { AjaxRequest } from 'rxjs/ajax'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type HttpConfig =
  | string
  | (AjaxRequest & {
      method?: HttpMethod
    })
