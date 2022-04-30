export const eventDetail =
  <E extends CustomEvent>(fn: (target: CustomEvent) => void) =>
  (event: MouseEvent | TouchEvent | E) =>
    fn.call(this, event.detail)
