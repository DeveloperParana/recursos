export enum OnAction {
  Click = 'click',
}

export function on(selector: string, action: string) {
  return this.querySelector(selector)[action]
}
