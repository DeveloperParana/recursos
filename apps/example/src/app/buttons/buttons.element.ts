import {
  css,
  html,
  event,
  listen,
  Emitter,
  Connected,
  Component,
  Autonomous,
  // EventWithTarget,
} from '@devpr/web-core'

@Autonomous({
  selector: 'demo-buttons',
  mode: 'open',
})
export class ButtonsElement
  extends Component(HTMLElement)
  implements Connected {
  static observed = []

  @event()
  onClick: Emitter<MouseEvent>

  @listen('button', 'click')
  onWebClick(event: EventWithTarget) {
    console.log(event.currentTarget)

    this.onClick.emit(event.target)
  }

  styles = css`
    :host {
      display: flex;
      justify-content: space-around;
    }

    :host > div {
      display: flex;
      flex-direction: column;
    }
    button {
      margin: 10px;
    }
    pre {
      padding: 9px;
      border-radius: 4px;
      background-color: black;
      color: #eee;
    }

    details {
      border-radius: 4px;
      color: #333;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 3px 9px;
      margin-bottom: 9px;
    }

    summary {
      cursor: pointer;
      outline: none;
      height: 36px;
      line-height: 36px;
    }

    .container {
      display: flex;
      /* justify-content: center; */
      margin: 10px 0;
      gap: 10px;
    }
    details .container {
      gap: 30px;
    }
    details details details .container {
      gap: 60px;
    }
    details details details details .container {
      gap: 10px;
    }
  `

  template = html`
    <div>
      <section>
        <div>
          <button is="text-button">Button</button>
        </div>

        <div>
          <button is="text-button">Hover</button>
        </div>

        <div>
          <button is="text-button" disabled>Disabled</button>
        </div>

        <div>
          <button is="text-button">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="text-button">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="text-button">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button type="submit" is="text-button">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="cancel" is="text-button">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="delete" is="text-button">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="text-button">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="text-button">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="text-button">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="text-button">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="text-button">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="text-button">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>
      <section>
        <h3>Medium</h3>
        <div>
          <button is="text-button" size="medium">Button</button>
        </div>

        <div>
          <button is="text-button" size="medium">Hover</button>
        </div>

        <div>
          <button is="text-button" size="medium" disabled>Disabled</button>
        </div>

        <div>
          <button is="text-button" size="medium">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="medium">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="medium">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button type="submit" is="text-button" size="medium">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="cancel" is="text-button" size="medium">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="delete" is="text-button" size="medium">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="medium">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="medium">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="medium">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="medium">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="medium">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="medium">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>

      <section>
        <h3>Small</h3>
        <div>
          <button is="text-button" size="small">Button</button>
        </div>

        <div>
          <button is="text-button" size="small">Hover</button>
        </div>

        <div>
          <button is="text-button" size="small" disabled>Disabled</button>
        </div>

        <div>
          <button is="text-button" size="small">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="small">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="small">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button type="submit" is="text-button" size="small">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="cancel" is="text-button" size="small">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="delete" is="text-button" size="small">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="small">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="small">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="small">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="small">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="small">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="text-button" size="small">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>
    </div>

    <div>
      <section>
        <div>
          <button is="outlined-button">Button</button>
        </div>

        <div>
          <button is="outlined-button">Hover</button>
        </div>

        <div>
          <button is="outlined-button" disabled>Disabled</button>
        </div>

        <div>
          <button is="outlined-button">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="outlined-button">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="outlined-button">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button type="submit" is="outlined-button">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class=" cancel" is="outlined-button">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class=" delete" is="outlined-button">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="outlined-button">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="outlined-button">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="outlined-button">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="outlined-button">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="outlined-button">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="outlined-button">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>
      <section>
        <h3>Medium</h3>
        <div>
          <button is="outlined-button" size="medium">Button</button>
        </div>

        <div>
          <button is="outlined-button" size="medium">Hover</button>
        </div>

        <div>
          <button is="outlined-button" size="medium" disabled>Disabled</button>
        </div>

        <div>
          <button is="outlined-button" size="medium">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="medium">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="medium">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button type="submit" is="outlined-button" size="medium">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="cancel" is="outlined-button" size="medium">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="delete" is="outlined-button" size="medium">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="medium">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="medium">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="medium">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="medium">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="medium">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="medium">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>

      <section>
        <h3>Small</h3>
        <div>
          <button is="outlined-button" size="small">Button</button>
        </div>

        <div>
          <button is="outlined-button" size="small">Hover</button>
        </div>

        <div>
          <button is="outlined-button" size="small" disabled>Disabled</button>
        </div>

        <div>
          <button is="outlined-button" size="small">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="small">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="small">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button type="submit" is="outlined-button" size="small">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="cancel" is="outlined-button" size="small">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="delete" is="outlined-button" size="small">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="small">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="small">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="small">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="small">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="small">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="outlined-button" size="small">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>
    </div>

    <div>
      <section>
        <div>
          <button is="shaded-button">Button</button>
        </div>

        <div>
          <button is="shaded-button">Hover</button>
        </div>

        <div>
          <button is="shaded-button" disabled>Disabled</button>
        </div>

        <div>
          <button is="shaded-button">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="shaded-button">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="shaded-button">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button type="submit" class="shaded" is="shaded-button">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="shaded cancel" is="shaded-button">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="shaded delete" is="shaded-button">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="shaded-button">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="shaded-button">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="shaded-button">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="shaded-button">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="shaded-button">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="shaded-button">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>
      <section>
        <h3>Medium</h3>
        <div>
          <button is="shaded-button" size="medium">Button</button>
        </div>

        <div>
          <button is="shaded-button" size="medium">Hover</button>
        </div>

        <div>
          <button is="shaded-button" size="medium" disabled>Disabled</button>
        </div>

        <div>
          <button is="shaded-button" size="medium">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="medium">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="medium">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button class="shaded submit" is="shaded-button" size="medium">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="shaded cancel" is="shaded-button" size="medium">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="shaded delete" is="shaded-button" size="medium">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="medium">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="medium">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="medium">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="medium">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="medium">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="medium">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>

      <section>
        <h3>Small</h3>
        <div>
          <button is="shaded-button" size="small">Button</button>
        </div>

        <div>
          <button is="shaded-button" size="small">Hover</button>
        </div>

        <div>
          <button is="shaded-button" size="small" disabled>Disabled</button>
        </div>

        <div>
          <button is="shaded-button" size="small">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="small">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="small">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button class="shaded submit" is="shaded-button" size="small">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="shaded cancel" is="shaded-button" size="small">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="shaded delete" is="shaded-button" size="small">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="small">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="small">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="small">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="small">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="small">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="shaded-button" size="small">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>
    </div>

    <div>
      <section>
        <div>
          <button is="contained-button">Button</button>
        </div>

        <div>
          <button is="contained-button">Hover</button>
        </div>

        <div>
          <button is="contained-button" disabled>Disabled</button>
        </div>

        <div>
          <button is="contained-button">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="contained-button">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="contained-button">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button type="submit" is="contained-button">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="cancel" is="contained-button">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="delete" is="contained-button">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="contained-button">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="contained-button">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="contained-button">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="contained-button">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="contained-button">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="contained-button">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>
      <section>
        <h3>Medium</h3>
        <div>
          <button is="contained-button" size="medium">Button</button>
        </div>

        <div>
          <button is="contained-button" size="medium">Hover</button>
        </div>

        <div>
          <button is="contained-button" size="medium" disabled>Disabled</button>
        </div>

        <div>
          <button is="contained-button" size="medium">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="medium">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="medium">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button type="submit" is="contained-button" size="medium">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="cancel" is="contained-button" size="medium">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="delete" is="contained-button" size="medium">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="medium">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="medium">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="medium">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="medium">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="medium">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="medium">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>

      <section>
        <h3>Small</h3>
        <div>
          <button is="contained-button" size="small">Button</button>
        </div>

        <div>
          <button is="contained-button" size="small">Hover</button>
        </div>

        <div>
          <button is="contained-button" size="small" disabled>Disabled</button>
        </div>

        <div>
          <button is="contained-button" size="small">
            <bs-icon slot="prefix" icon="menu"></bs-icon>
            <span>Menu</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="small">
            <bs-icon slot="prefix" icon="arrow-left"></bs-icon>
            <span>Back</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="small">
            <bs-icon slot="suffix" icon="arrow-right"></bs-icon>
            <span>Next</span>
          </button>
        </div>

        <div>
          <button type="submit" is="contained-button" size="small">
            <bs-icon slot="prefix" icon="check"></bs-icon>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <button class="cancel" is="contained-button" size="small">
            <bs-icon slot="prefix" icon="cancel"></bs-icon>
            <span>Cancel</span>
          </button>
        </div>

        <div>
          <button class="delete" is="contained-button" size="small">
            <bs-icon slot="prefix" icon="trash-empty"></bs-icon>
            <span>Delete</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="small">
            <bs-icon slot="prefix" icon="math-plus"></bs-icon>
            <span>Add</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="small">
            <bs-icon slot="prefix" icon="pen-2"></bs-icon>
            <span>Edit</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="small">
            <bs-icon slot="suffix" icon="chevron-down"></bs-icon>
            <span>Expand</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="small">
            <bs-icon slot="prefix" icon="calendar-today"></bs-icon>
            <span>date</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="small">
            <bs-icon slot="suffix" icon="more-vertical-alt"></bs-icon>
            <span>More</span>
          </button>
        </div>

        <div>
          <button is="contained-button" size="small">
            <bs-icon slot="suffix" icon="external"></bs-icon>
            <span>Open</span>
          </button>
        </div>
      </section>
    </div>

    <!-- <details open>
        <summary>Main Button</summary>

        <div class="container">
          <web-button type="submit">
            <img slot="prefix" src="assets/cloud-download.svg" />
            <span>Small Button</span>
            <bs-icon slot="suffix" icon="arrow-forward"></bs-icon>
          </web-button>
        </div>

        <details open>
          <summary>Button Types</summary>

          <div class="container">
            <web-button type="submit" class="filled">
              <span>Filled Button</span>
            </web-button>

            <web-button type="submit" class="ghost">
              <span>Ghost Button</span>
            </web-button>

            <web-button type="submit" class="borderless" value="321">
              <span>Borderless Button</span>
            </web-button>

            <web-button type="submit" class="rounded" value="321">
              <span>Rounded Button</span>
            </web-button>
          </div>


          <details open>
            <summary>Button Defaut State</summary>

            <div class="container">
              <web-button type="submit" class="primary">
                <span>Primary Color</span>
              </web-button>

              <web-button type="submit" class="secondary">
                <span>Secondary Color</span>
              </web-button>

              <web-button type="submit" class="neutral">
                <span>Neutral Color</span>
              </web-button>
            </div>


            <details open>
              <summary>Button States</summary>

              <div class="container">
                <div>
                  <web-button type="submit" class="primary">
                    <span>Small Button</span>
                  </web-button>

                  <web-button type="submit" class="primary">
                    <span>Small Button</span>
                  </web-button>

                  <web-button type="submit" class="primary" disabled>
                    <span>Small Button</span>
                  </web-button>
                </div>
                <div>
                  <web-button type="submit" class="secondary">
                    <span>Small Button</span>
                  </web-button>

                  <web-button type="submit" class="secondary">
                    <span>Small Button</span>
                  </web-button>

                  <web-button type="submit" class="secondary">
                    <span>Small Button</span>
                  </web-button>
                </div>
              </div>
            </details>
          </details>
        </details>
      </details>
    </div> -->
  `

  connected() {
    // const webButton = this.shadowRoot.querySelector('web-button');
    // console.log(webButton);
  }

  public emitClick<D = unknown>(detail: D) {
    this.onClick.emit(detail)
  }
}
