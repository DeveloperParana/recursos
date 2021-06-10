import { css, html, event, listen, Emitter, Autonomous } from '@devpr/web-core'

@Autonomous({
  selector: 'demo-forms',
  mode: 'open',
})
export class FormsElement extends HTMLElement {
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
        <form>
          <form-field>
            <label> Name </label>
            <input
              type="text"
              validate-on="submit"
              name="name"
              required
              placeholder="Default input"
            />
            <small>Helper</small>
            <output>Nome obrigatório</output>
          </form-field>

          <form-field>
            <label> Email </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Ex.: name@provider.dev"
            />
            <small>Endereço de e-mail válido</small>
            <output>E-mail inválido</output>
          </form-field>

          <form-field>
            <label> Name </label>
            <input type="text" name="surname" placeholder="Default input" />
            <small>Helper</small>
          </form-field>
        </form>
      </section>
    </div>
  `
}
