interface TagManagerEvent {
  event: string
  [p: string]: string
}

const environment = {
  events: [{ event: 'event-name', variable_name: 'variable_value' }],
}

export const eventMap = {
  click: 'DEVPR_CLICK',
  contextmenu: 'DEVPR_CONTEXTMENU',
}

export class TagManager extends HTMLElement {
  events: TagManagerEvent[] = environment.events

  connectedCallback() {
    Object.entries(eventMap).map(([evt, devEvt]) => {
      document.addEventListener(evt, (detail) => {
        this.dispatchEvent(new CustomEvent(devEvt, { detail }))
      })
    })

    Object.values(eventMap).map((devEvt) => {
      this.addEventListener(devEvt, console.log)
    })
  }
}
