export const eventTarget =
  <E extends Event>(fn: (target: EventTarget) => void) =>
  (event: MouseEvent | TouchEvent | E) =>
    fn.call(this, event.target)
