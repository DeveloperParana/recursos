import { css, html, query, listen, Autonomous } from '@devpr/web-core'
import './app.element.scss'

@Autonomous({
  selector: 'devpr-conf-root',
  mode: 'open',
})
export class AppElement extends HTMLElement {
  static observed = []

  @query('video')
  video: HTMLVideoElement

  @listen('#play', 'click')
  onPlayButton({ target }: { target: HTMLInputElement }) {
    if (this.video.paused) {
      target.value = 'Pause'
      this.video.play()
    } else {
      target.value = 'Play'
      this.video.pause()
    }
  }

  styles = css`
    .backdrop {
      z-index: -1;
      width: 400px;
      top: -400px;
      left: 400px;
      position: fixed;
      font-size: 24px;
      font-family: monospace;
      transform: rotate(-30deg) skewX(30deg) skewY(0deg) scaleY(0.87);
    }

    .floor {
      width: 800px;
      margin: 0 auto;
      transform: rotate(-30deg) skewX(30deg) skewY(0deg) scaleY(0.87);
    }

    .cube {
      position: absolute;
      top: 90px;
      left: 360px;
    }

    .face {
      position: absolute;
      width: 200px;
      height: 200px;
      overflow: hidden;
      font-family: monospace;
      font-size: 24px;
    }

    .top {
      top: 0;
      left: 86px;
      background: #f9f9f9;
      color: #999;
      transform: rotate(-30deg) skewX(30deg) skewY(0deg) scaleY(0.87);
    }

    .left {
      top: 165px;
      left: 0;
      background: #999;
      color: #333;
      transform: rotate(30deg) skewX(30deg) skewY(0deg);
    }

    .right {
      top: 165px;
      left: 172px;
      background: #ccc;
      color: #666;
      transform: rotate(-30deg) skewX(-30deg) skewY(0deg);
    }

    .shadow {
      top: 330px;
      left: -86px;
      background: black;
      opacity: 0.5;
      transform: rotate(-30deg) skewX(30deg) skewY(0deg) scaleY(0.87);
    }

    img {
      max-width: 80%;
      margin: 0 auto;
      margin-top: 20px;
    }

    video {
      width: 100%;
      height: 100%;
    }

    video::before {
      content: ' ';
      border-color: transparent transparent transparent rgb(255, 255, 255);
      border-style: solid;
      border-width: 8px 0px 8px 16px;
      height: 0px;
      width: 0px;
    }

    video::after {
      content: ' ';
      align-items: center;
      border: 4px solid rgb(255, 255, 255);
      border-radius: 9999px;
      display: flex;
      height: 64px;
      justify-content: center;
      width: 64px;
    }

    #two {
      transform: scale(0.8) translate(400px, 300px);
    }

    #three {
      transform: scale(1) translate(700px, 400px);
    }
  `

  template = html`
    <devpr-conf alt="DevParaná Conf 2021"></devpr-conf>
    <div class="backdrop">
      <a href="//devparana.org/">devparaná</a> comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade
      comunidade comunidade comunidade comunidade comunidade comunidade comuni.
      <a href="//devparana.mx/"> devparana.mx </a>
    </div>

    <section class="cube">
      <header class="face top">
        <input type="button" name="button" value="HTML Button" />
      </header>
      <aside class="face left">
        <video>
          <source src="/assets/conf.mp4" />
          Your browser does not support the <code>video</code> element.
        </video>
      </aside>
      <aside class="face right">
        GitHub GitHub GitHub GitHub GitHub GitHub GitHub
        <input type="button" id="play" name="button" value="Play" />
        GitHub GitHub GitHub GitHub GitHub GitHub GitHub GitHub
      </aside>
      <footer class="face shadow"></footer>
    </section>

    <div id="two" class="cube">
      <div class="face top">
        <input type="button" name="button" value="HTML Button" />
      </div>
      <div class="face left">
        <img src="/assets/devops-maringa.svg" width="128px" />
        <input type="button" name="button" value="HTML Button" />
      </div>
      <div class="face right">
        cloud cloud cloud cloud cloud cloud
        <input type="button" name="button" value="HTML Button" />
        dade cloud cloud cloud cloud cloud cloud
      </div>
      <div class="face shadow"></div>
    </div>

    <div id="three" class="cube">
      <div class="face top">
        <input type="button" name="button" value="HTML Button" />
      </div>
      <div class="face left">
        <img src="/assets/front-in-maringa.svg" width="128px" />
        <input type="button" name="button" value="HTML Button" />
      </div>
      <div class="face right">
        meetup meetup meetup meetup
        <input type="button" name="button" value="HTML Button" />
        meetup meetup meetup meetup meetup meetup meetup meetup meetup
      </div>
      <div class="face shadow"></div>
    </div>
  `

  connectedCallback() {
    const title = 'DevParaná Conf 2021'
    document.title = title
  }
}
