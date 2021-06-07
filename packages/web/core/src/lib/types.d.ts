/**
 * @todo remover exports sem quebrar os apps
 */
export declare global {
  type EventWithTarget<E = Event, T = HTMLElement> = E & {
    target: T
    currentTarget: T
  }

  type ElementClickEvent<
    E extends HTMLElement,
    D = unknown
  > = CustomEvent<D> & {
    target: E
    currentTarget: E
  }

  interface HTMLElementEventMap {
    onClick: ElementClickEvent
  }
}
