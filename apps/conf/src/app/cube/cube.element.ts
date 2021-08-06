import {
  css,
  html,
  event,
  listen,
  Emitter,
  Connected,
  Component,
  Autonomous,
} from '@devpr/web-core'

@Autonomous({
  selector: 'devpr-cube',
  mode: 'open',
})
export class CubeElement extends Component(HTMLElement) implements Connected {
  static observed = ['param']

  public param: string

  @event()
  onClick: Emitter<MouseEvent>

  @listen('button', 'click')
  onClicked(event: Event) {
    this.onClick.emit(event.target)
  }

  styles = css`
    :host {
      display: inline-flex;
    }

    .three-d-container {
      margin: 30px auto;
      width: 600px;
      height: 600px;
      border-radius: 3px;
      position: relative;
      perspective: 1000px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2),
        0 0 40px rgba(0, 0, 0, 0.2) inset;
    }
    .three-d-cube {
      width: 100%;
      height: 100%;
      position: absolute;

      transition: transform 1s;

      transform-style: preserve-3d;

      transform: translateZ(-300px);
    }
    .three-d-cube .three-d-item {
      width: 100%;
      height: 100%;
      display: block;
      margin: 0;
      position: absolute;
    }
    .three-d-cube .three-d-item img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      margin: 0;
    }
    .three-d-item:nth-child(1) {
      transform: rotateY(0deg) translateZ(300px);
    }
    .three-d-item:nth-child(2) {
      transform: rotateX(180deg) translateZ(300px);
    }
    .three-d-item:nth-child(3) {
      transform: rotateY(90deg) translateZ(300px);
    }
    .three-d-item:nth-child(4) {
      transform: rotateY(-90deg) translateZ(300px);
    }
    .three-d-item:nth-child(5) {
      transform: rotateX(90deg) translateZ(300px);
    }
    .three-d-item:nth-child(6) {
      transform: rotateX(-90deg) translateZ(300px);
    }
    .a:checked ~ .three-d-cube {
      transform: translateZ(-300px) rotateY(0deg);
    }
    .b:checked ~ .three-d-cube {
      transform: translateZ(-300px) rotateX(-180deg);
    }
    .c:checked ~ .three-d-cube {
      transform: translateZ(-300px) rotateY(-90deg);
    }
    .d:checked ~ .three-d-cube {
      transform: translateZ(-300px) rotateY(90deg);
    }
    .e:checked ~ .three-d-cube {
      transform: translateZ(-300px) rotateX(-90deg);
    }
    .f:checked ~ .three-d-cube {
      transform: translateZ(-300px) rotateX(90deg);
    }
    .three-d-bullet {
      margin: 700px 10px 0 0;
      float: left;
    }
    .three-d-bullet:first-child {
      margin: 700px 10px 0 88px;
    }
  `

  template = html`
    <section class="three-d-container">
      <input type="radio" checked class="three-d-bullet a" name="three-d" />
      <input type="radio" class="three-d-bullet b" name="three-d" />
      <input type="radio" class="three-d-bullet c" name="three-d" />
      <input type="radio" class="three-d-bullet d" name="three-d" />
      <input type="radio" class="three-d-bullet e" name="three-d" />
      <input type="radio" class="three-d-bullet f" name="three-d" />

      <div class="three-d-cube">
        <figure class="three-d-item">
          <img
            src="https://secure.meetupstatic.com/photos/event/9/9/3/5/600_458319221.jpeg"
            alt=""
          />
        </figure>
        <figure class="three-d-item">
          <img
            src="https://secure.meetupstatic.com/photos/event/9/9/5/4/600_458319252.jpeg"
            alt=""
          />
        </figure>
        <figure class="three-d-item">
          <img
            src="https://secure.meetupstatic.com/photos/event/9/9/5/b/600_458319259.jpeg"
            alt=""
          />
        </figure>
        <figure class="three-d-item">
          <img
            src="https://secure.meetupstatic.com/photos/event/9/9/8/b/600_458319307.jpeg"
            alt=""
          />
        </figure>
        <figure class="three-d-item">
          <img
            src="https://secure.meetupstatic.com/photos/event/9/9/8/4/600_458319300.jpeg"
            alt=""
          />
        </figure>
        <figure class="three-d-item">
          <img
            src="https://secure.meetupstatic.com/photos/event/9/9/8/d/600_458319309.jpeg"
            alt=""
          />
        </figure>
      </div>
    </section>
  `

  connected() {
    // Do something
    console.log(this.param)
  }
}
