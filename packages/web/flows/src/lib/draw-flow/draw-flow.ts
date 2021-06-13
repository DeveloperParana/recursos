/**
 * MIT License
 *
 * Copyright (c) 2020 Jero Soler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {
  ContainerDrawFlow,
  DataDrawFlow,
  NodeDrawFlow,
} from './draw-flow.interfaces'

/**
 * Esta classe foi convertida de JavaScript para TypeScript
 * Conversão realizada por Guilherme Siquinelli (@guiseek)
 * Projeto original: https://github.com/jerosoler/Drawflow
 *
 * @export
 * @class Drawflow
 */
export class Drawflow {
  events: Record<string, any>

  container: HTMLElement
  precanvas: HTMLElement

  nodeId: number

  elementSelected: HTMLElement
  nodeSelected: HTMLElement

  drag: boolean
  drag_point: boolean

  reroute: boolean

  rerouteFixCurvature: boolean
  curvature: number

  rerouteCurvatureStartEnd: number
  rerouteCurvature: number
  rerouteWidth: number

  editor_selected: boolean

  connection: boolean

  connectionElement: SVGElement
  connectionSelected: HTMLElement

  canvas_x: number
  canvas_y: number

  posX: number
  posX_start: number
  posY: number
  posY_start: number

  mouse_x: number
  mouse_y: number

  line_path: number

  first_click: HTMLElement

  force_first_input: boolean

  draggable_inputs: boolean

  useuuid: boolean

  selectElements: HTMLElement
  noderegister: Record<string, NodeDrawFlow>

  // render;

  drawflow: ContainerDrawFlow

  // Configurable options
  module: string
  editor_mode: string
  zoom: number
  zoom_max: number
  zoom_min: number
  zoom_value: number
  zoom_last_value: number

  // Mobile
  evCache: any[]
  prevDiff: number

  constructor(container: HTMLElement, render = null) {
    this.container = container
    // this.render = render;

    this.events = {}

    this.nodeId = 1

    this.drag = false
    this.drag_point = false

    this.reroute = false

    this.rerouteFixCurvature = false
    this.curvature = 0.5

    this.rerouteCurvatureStartEnd = 0.5
    this.rerouteCurvature = 0.5
    this.rerouteWidth = 6

    this.editor_selected = false

    this.connection = false

    this.canvas_x = 0
    this.canvas_y = 0

    this.posX = 0
    this.posX_start = 0
    this.posY = 0
    this.posY_start = 0

    this.mouse_x = 0
    this.mouse_y = 0

    this.line_path = 5

    this.force_first_input = false

    this.draggable_inputs = true

    this.useuuid = false

    this.noderegister = {}

    this.drawflow = { drawflow: { Home: { data: {} } } }

    // Configurable options
    this.module = 'Home'
    this.editor_mode = 'edit'
    this.zoom = 1
    this.zoom_max = 1.6
    this.zoom_min = 0.5
    this.zoom_value = 0.1
    this.zoom_last_value = 1

    // Mobile
    this.evCache = []
    this.prevDiff = -1
  }

  start() {
    // console.info('Start Drawflow!!');
    this.container.classList.add('parent-drawflow')
    this.container.tabIndex = 0
    this.precanvas = document.createElement('div')
    this.precanvas.classList.add('drawflow')
    this.container.appendChild(this.precanvas)

    /* Mouse and Touch Actions */
    this.container.addEventListener('mouseup', this.dragEnd.bind(this))
    this.container.addEventListener('mousemove', this.position.bind(this))
    this.container.addEventListener('mousedown', this.click.bind(this))

    this.container.addEventListener('touchend', this.dragEnd.bind(this), {
      passive: true,
    })
    this.container.addEventListener('touchmove', this.position.bind(this), {
      passive: true,
    })
    this.container.addEventListener('touchstart', this.click.bind(this), {
      passive: true,
    })

    /* Context Menu */
    this.container.addEventListener('contextmenu', this.contextmenu.bind(this))
    /* Delete */
    this.container.addEventListener('keydown', this.key.bind(this))

    /* Zoom Mouse */
    this.container.addEventListener('wheel', this.zoomEnter.bind(this), {
      passive: true,
    })
    /* Update data Nodes */
    this.container.addEventListener('input', this.updateNodeValue.bind(this))

    this.container.addEventListener('dblclick', this.dblclick.bind(this))
    /* Mobile zoom */
    this.container.onpointerdown = this.pointerdownHandler.bind(this)
    this.container.onpointermove = this.pointermoveHandler.bind(this)
    this.container.onpointerup = this.pointerupHandler.bind(this)
    this.container.onpointercancel = this.pointerupHandler.bind(this)
    this.container.onpointerout = this.pointerupHandler.bind(this)
    this.container.onpointerleave = this.pointerupHandler.bind(this)

    this.load()
  }

  /* Mobile zoom */
  pointerdownHandler(ev: PointerEvent) {
    this.evCache.push(ev)
  }

  pointermoveHandler(ev: PointerEvent) {
    for (let i = 0; i < this.evCache.length; i++) {
      if (ev.pointerId == this.evCache[i].pointerId) {
        this.evCache[i] = ev
        break
      }
    }

    if (this.evCache.length == 2) {
      // Calculate the distance between the two pointers
      const curDiff = Math.abs(
        this.evCache[0].clientX - this.evCache[1].clientX
      )

      if (this.prevDiff > 100) {
        if (curDiff > this.prevDiff) {
          // The distance between the two pointers has increased

          this.zoomIn()
        }
        if (curDiff < this.prevDiff) {
          // The distance between the two pointers has decreased
          this.zoomOut()
        }
      }
      this.prevDiff = curDiff
    }
  }

  pointerupHandler(ev: PointerEvent) {
    this.removeEvent(ev)
    if (this.evCache.length < 2) {
      this.prevDiff = -1
    }
  }

  removeEvent(ev: PointerEvent) {
    // Remove this event from the target's cache
    for (let i = 0; i < this.evCache.length; i++) {
      if (this.evCache[i].pointerId == ev.pointerId) {
        this.evCache.splice(i, 1)
        break
      }
    }
  }

  /* End Mobile Zoom */
  load() {
    for (const key in this.drawflow.drawflow[this.module].data) {
      this.addNodeImport(
        this.drawflow.drawflow[this.module].data[key],
        this.precanvas
      )
    }

    if (this.reroute) {
      for (const key in this.drawflow.drawflow[this.module].data) {
        this.addRerouteImport(this.drawflow.drawflow[this.module].data[key])
      }
    }

    for (const key in this.drawflow.drawflow[this.module].data) {
      this.updateConnectionNodes('node-' + key)
    }

    const editor = this.drawflow.drawflow
    let number = 1
    Object.keys(editor).map(function (moduleName, index) {
      Object.keys(editor[moduleName].data).map(function (id, index2) {
        if (parseInt(id) >= number) {
          number = parseInt(id) + 1
        }
      })
    })
    this.nodeId = number
  }

  removeReouteConnectionSelected() {
    this.dispatch('connectionUnselected', true)
    if (this.rerouteFixCurvature) {
      this.connectionSelected.parentElement
        .querySelectorAll('.main-path')
        .forEach((item, i) => {
          item.classList.remove('selected')
        })
    }
  }

  click(
    e: (MouseEvent | TouchEvent) & { target: HTMLElement; button: number }
  ) {
    this.dispatch('click', e)
    if (this.editor_mode === 'fixed') {
      //return false;
      if (
        e.target.classList[0] === 'parent-drawflow' ||
        e.target.classList[0] === 'drawflow'
      ) {
        this.elementSelected = e.target.closest('.parent-drawflow')
      } else {
        return false
      }
    } else if (this.editor_mode === 'view') {
      if (
        e.target.closest('.drawflow') != null ||
        e.target.matches('.parent-drawflow')
      ) {
        this.elementSelected = e.target.closest('.parent-drawflow')
        e.preventDefault()
      }
    } else {
      this.first_click = e.target
      this.elementSelected = e.target
      if (e.button === 0) {
        this.contextmenuDel()
      }

      if (e.target.closest('.drawflow_content_node') != null) {
        this.elementSelected = e.target.closest(
          '.drawflow_content_node'
        ).parentElement
      }
    }
    switch (this.elementSelected.classList[0]) {
      case 'drawflow-node': {
        if (this.nodeSelected != null) {
          this.nodeSelected.classList.remove('selected')
          if (this.nodeSelected != this.elementSelected) {
            this.dispatch('nodeUnselected', true)
          }
        }
        if (this.connectionSelected != null) {
          this.connectionSelected.classList.remove('selected')
          this.removeReouteConnectionSelected()
          this.connectionSelected = null
        }
        if (this.nodeSelected != this.elementSelected) {
          this.dispatch('nodeSelected', this.elementSelected.id.slice(5))
        }
        this.nodeSelected = this.elementSelected
        this.nodeSelected.classList.add('selected')
        if (!this.draggable_inputs) {
          if (
            e.target.tagName !== 'INPUT' &&
            e.target.tagName !== 'TEXTAREA' &&
            e.target.tagName !== 'SELECT' &&
            e.target.hasAttribute('contenteditable') !== true
          ) {
            this.drag = true
          }
        } else {
          if (e.target.tagName !== 'SELECT') {
            this.drag = true
          }
        }
        break
      }

      case 'output': {
        this.connection = true
        if (this.nodeSelected != null) {
          this.nodeSelected.classList.remove('selected')
          this.nodeSelected = null
          this.dispatch('nodeUnselected', true)
        }
        if (this.connectionSelected != null) {
          this.connectionSelected.classList.remove('selected')
          this.removeReouteConnectionSelected()
          this.connectionSelected = null
        }
        this.drawConnection(e.target)
        break
      }

      case 'parent-drawflow': {
        if (this.nodeSelected != null) {
          this.nodeSelected.classList.remove('selected')
          this.nodeSelected = null
          this.dispatch('nodeUnselected', true)
        }
        if (this.connectionSelected != null) {
          this.connectionSelected.classList.remove('selected')
          this.removeReouteConnectionSelected()
          this.connectionSelected = null
        }
        this.editor_selected = true
        break
      }

      case 'drawflow': {
        if (this.nodeSelected != null) {
          this.nodeSelected.classList.remove('selected')
          this.nodeSelected = null
          this.dispatch('nodeUnselected', true)
        }
        if (this.connectionSelected != null) {
          this.connectionSelected.classList.remove('selected')
          this.removeReouteConnectionSelected()
          this.connectionSelected = null
        }
        this.editor_selected = true
        break
      }

      case 'main-path': {
        if (this.nodeSelected != null) {
          this.nodeSelected.classList.remove('selected')
          this.nodeSelected = null
          this.dispatch('nodeUnselected', true)
        }
        if (this.connectionSelected != null) {
          this.connectionSelected.classList.remove('selected')
          this.removeReouteConnectionSelected()
          this.connectionSelected = null
        }
        this.connectionSelected = this.elementSelected
        this.connectionSelected.classList.add('selected')
        const listclassConnection = this.connectionSelected.parentElement
          .classList
        this.dispatch('connectionSelected', {
          output_id: listclassConnection[2].slice(14),
          input_id: listclassConnection[1].slice(13),
          outputClass: listclassConnection[3],
          inputClass: listclassConnection[4],
        })
        if (this.rerouteFixCurvature) {
          this.connectionSelected.parentElement
            .querySelectorAll('.main-path')
            .forEach((item, i) => {
              item.classList.add('selected')
            })
        }
        break
      }

      case 'point': {
        this.drag_point = true
        this.elementSelected.classList.add('selected')
        break
      }

      case 'drawflow-delete': {
        if (this.nodeSelected) {
          this.removeNodeId(this.nodeSelected.id)
        }

        if (this.connectionSelected) {
          this.removeConnection()
        }

        if (this.nodeSelected != null) {
          this.nodeSelected.classList.remove('selected')
          this.nodeSelected = null
          this.dispatch('nodeUnselected', true)
        }
        if (this.connectionSelected != null) {
          this.connectionSelected.classList.remove('selected')
          this.removeReouteConnectionSelected()
          this.connectionSelected = null
        }

        break
      }

      default:
    }
    if (e.type === 'touchstart') {
      this.posX = (e as TouchEvent).touches[0].clientX
      this.posX_start = (e as TouchEvent).touches[0].clientX
      this.posY = (e as TouchEvent).touches[0].clientY
      this.posY_start = (e as TouchEvent).touches[0].clientY
    } else {
      this.posX = (e as MouseEvent).clientX
      this.posX_start = (e as MouseEvent).clientX
      this.posY = (e as MouseEvent).clientY
      this.posY_start = (e as MouseEvent).clientY
    }
    this.dispatch('clickEnd', e)
  }

  position(e: MouseEvent | TouchEvent) {
    let e_posX: number
    let e_posY: number
    let x: number
    let y: number

    if (e.type === 'touchmove') {
      e_posX = (e as TouchEvent).touches[0].clientX
      e_posY = (e as TouchEvent).touches[0].clientY
    } else {
      e_posX = (e as MouseEvent).clientX
      e_posY = (e as MouseEvent).clientY
    }

    if (this.connection) {
      this.updateConnection(e_posX, e_posY)
    }
    if (this.editor_selected) {
      x = this.canvas_x + -(this.posX - e_posX)
      y = this.canvas_y + -(this.posY - e_posY)

      this.dispatch('translate', { x: x, y: y })
      this.precanvas.style.transform =
        'translate(' + x + 'px, ' + y + 'px) scale(' + this.zoom + ')'
    }
    if (this.drag) {
      const x =
        ((this.posX - e_posX) * this.precanvas.clientWidth) /
        (this.precanvas.clientWidth * this.zoom)
      const y =
        ((this.posY - e_posY) * this.precanvas.clientHeight) /
        (this.precanvas.clientHeight * this.zoom)
      this.posX = e_posX
      this.posY = e_posY

      this.elementSelected.style.top = this.elementSelected.offsetTop - y + 'px'
      this.elementSelected.style.left =
        this.elementSelected.offsetLeft - x + 'px'

      this.drawflow.drawflow[this.module].data[
        this.elementSelected.id.slice(5)
      ].posX = this.elementSelected.offsetLeft - x
      this.drawflow.drawflow[this.module].data[
        this.elementSelected.id.slice(5)
      ].posY = this.elementSelected.offsetTop - y

      this.updateConnectionNodes(this.elementSelected.id)
    }

    if (this.drag_point) {
      const x =
        ((this.posX - e_posX) * this.precanvas.clientWidth) /
        (this.precanvas.clientWidth * this.zoom)
      const y =
        ((this.posY - e_posY) * this.precanvas.clientHeight) /
        (this.precanvas.clientHeight * this.zoom)
      this.posX = e_posX
      this.posY = e_posY

      const posX =
        this.posX *
          (this.precanvas.clientWidth /
            (this.precanvas.clientWidth * this.zoom)) -
        this.precanvas.getBoundingClientRect().x *
          (this.precanvas.clientWidth /
            (this.precanvas.clientWidth * this.zoom))
      const posY =
        this.posY *
          (this.precanvas.clientHeight /
            (this.precanvas.clientHeight * this.zoom)) -
        this.precanvas.getBoundingClientRect().y *
          (this.precanvas.clientHeight /
            (this.precanvas.clientHeight * this.zoom))

      this.elementSelected.setAttributeNS(null, 'cx', posX + '')
      this.elementSelected.setAttributeNS(null, 'cy', posY + '')

      const nodeUpdate = this.elementSelected.parentElement.classList[2].slice(
        9
      )
      const nodeUpdateIn = this.elementSelected.parentElement.classList[1].slice(
        13
      )
      const outputClass = this.elementSelected.parentElement.classList[3]
      const inputClass = this.elementSelected.parentElement.classList[4]

      let numberPointPosition =
        Array.from(this.elementSelected.parentElement.children).indexOf(
          this.elementSelected
        ) - 1

      if (this.rerouteFixCurvature) {
        const numberMainPath =
          this.elementSelected.parentElement.querySelectorAll('.main-path')
            .length - 1

        numberPointPosition -= numberMainPath
        if (numberPointPosition < 0) {
          numberPointPosition = 0
        }
      }

      const nodeId = nodeUpdate.slice(5)
      const searchConnection = this.drawflow.drawflow[this.module].data[
        nodeId
      ].outputs[outputClass].connections.findIndex(function (item, i) {
        return item.node === nodeUpdateIn && item.output === inputClass
      })

      this.drawflow.drawflow[this.module].data[nodeId].outputs[
        outputClass
      ].connections[searchConnection].points[numberPointPosition] = {
        posX: posX,
        posY: posY,
      }

      const parentSelected = this.elementSelected.parentElement.classList[2].slice(
        9
      )

      this.updateConnectionNodes(parentSelected)
    }

    if (e.type === 'touchmove') {
      this.mouse_x = e_posX
      this.mouse_y = e_posY
    }
    this.dispatch('mouseMove', { x: e_posX, y: e_posY })
  }

  dragEnd(e) {
    if (this.selectElements != null) {
      this.selectElements.remove()
      this.selectElements = null
    }

    let e_posX: number
    let e_posY: number
    let ele_last: Element

    if (e.type === 'touchend') {
      e_posX = this.mouse_x
      e_posY = this.mouse_y
      ele_last = document.elementFromPoint(e_posX, e_posY)
    } else {
      e_posX = e.clientX
      e_posY = e.clientY
      ele_last = e.target
    }

    if (this.drag) {
      if (this.posX_start != e_posX || this.posY_start != e_posY) {
        this.dispatch('nodeMoved', this.elementSelected.id.slice(5))
      }
    }

    if (this.drag_point) {
      this.elementSelected.classList.remove('selected')
    }

    if (this.editor_selected) {
      this.canvas_x = this.canvas_x + -(this.posX - e_posX)
      this.canvas_y = this.canvas_y + -(this.posY - e_posY)
      this.editor_selected = false
    }
    if (this.connection === true) {
      //console.log(ele_last)
      if (
        ele_last.classList[0] === 'input' ||
        (this.force_first_input &&
          (ele_last.closest('.drawflow_content_node') != null ||
            ele_last.classList[0] === 'drawflow-node'))
      ) {
        let input_id: string
        let inputClass: boolean | string = false

        if (
          this.force_first_input &&
          (ele_last.closest('.drawflow_content_node') != null ||
            ele_last.classList[0] === 'drawflow-node')
        ) {
          if (ele_last.closest('.drawflow_content_node') != null) {
            input_id = ele_last.closest('.drawflow_content_node').parentElement
              .id
          } else {
            input_id = ele_last.id
          }
          if (
            Object.keys(this.getNodeFromId(input_id.slice(5)).inputs).length ===
            0
          ) {
            inputClass = false
          } else {
            inputClass = 'input_1'
          }
        } else {
          // Fix connection;
          input_id = ele_last.parentElement.parentElement.id
          inputClass = ele_last.classList[1]
        }
        const output_id = this.elementSelected.parentElement.parentElement.id
        const outputClass = this.elementSelected.classList[1]

        if (output_id !== input_id && !!inputClass !== false) {
          if (
            this.container.querySelectorAll(
              '.connection.node_in_' +
                input_id +
                '.node_out_' +
                output_id +
                '.' +
                outputClass +
                '.' +
                inputClass
            ).length === 0
          ) {
            // Conection no exist save connection

            this.connectionElement.classList.add('node_in_' + input_id)
            this.connectionElement.classList.add('node_out_' + output_id)
            this.connectionElement.classList.add(outputClass)
            this.connectionElement.classList.add(inputClass + '')
            const idInput = input_id.slice(5)
            const idOutput = output_id.slice(5)

            this.drawflow.drawflow[this.module].data[idOutput].outputs[
              outputClass
            ].connections.push({ node: idInput, output: inputClass })
            this.drawflow.drawflow[this.module].data[idInput].inputs[
              inputClass as string
            ].connections.push({ node: idOutput, input: outputClass })
            this.updateConnectionNodes('node-' + idOutput)
            this.updateConnectionNodes('node-' + idInput)
            this.dispatch('connectionCreated', {
              output_id: idOutput,
              input_id: idInput,
              outputClass: outputClass,
              inputClass: inputClass,
            })
          } else {
            this.dispatch('connectionCancel', true)
            this.connectionElement.remove()
          }

          this.connectionElement = null
        } else {
          // Connection exists Remove Connection;
          this.dispatch('connectionCancel', true)
          this.connectionElement.remove()
          this.connectionElement = null
        }
      } else {
        // Remove Connection;
        this.dispatch('connectionCancel', true)
        this.connectionElement.remove()
        this.connectionElement = null
      }
    }

    this.drag = false
    this.drag_point = false
    this.connection = false
    this.elementSelected = null
    this.editor_selected = false
  }

  contextmenu(e: MouseEvent) {
    this.dispatch('contextmenu', e)
    e.preventDefault()
    if (this.editor_mode === 'fixed' || this.editor_mode === 'view') {
      return false
    }
    if (this.precanvas.getElementsByClassName('drawflow-delete').length) {
      this.precanvas.getElementsByClassName('drawflow-delete')[0].remove()
    }
    if (this.nodeSelected || this.connectionSelected) {
      const deletebox = document.createElement('div')
      deletebox.classList.add('drawflow-delete')
      deletebox.innerHTML = 'x'
      if (this.nodeSelected) {
        this.nodeSelected.appendChild(deletebox)
      }
      if (this.connectionSelected) {
        deletebox.style.top =
          e.clientY *
            (this.precanvas.clientHeight /
              (this.precanvas.clientHeight * this.zoom)) -
          this.precanvas.getBoundingClientRect().y *
            (this.precanvas.clientHeight /
              (this.precanvas.clientHeight * this.zoom)) +
          'px'
        deletebox.style.left =
          e.clientX *
            (this.precanvas.clientWidth /
              (this.precanvas.clientWidth * this.zoom)) -
          this.precanvas.getBoundingClientRect().x *
            (this.precanvas.clientWidth /
              (this.precanvas.clientWidth * this.zoom)) +
          'px'

        this.precanvas.appendChild(deletebox)
      }
    }
  }

  contextmenuDel() {
    if (this.precanvas.getElementsByClassName('drawflow-delete').length) {
      this.precanvas.getElementsByClassName('drawflow-delete')[0].remove()
    }
  }

  key(e: KeyboardEvent) {
    this.dispatch('keydown', e)
    if (this.editor_mode === 'fixed' || this.editor_mode === 'view') {
      return false
    }
    if (e.key === 'Delete' || (e.key === 'Backspace' && e.metaKey)) {
      if (this.nodeSelected != null) {
        if (
          this.first_click.tagName !== 'INPUT' &&
          this.first_click.tagName !== 'TEXTAREA' &&
          this.first_click.hasAttribute('contenteditable') !== true
        ) {
          this.removeNodeId(this.nodeSelected.id)
        }
      }
      if (this.connectionSelected != null) {
        this.removeConnection()
      }
    }
  }

  zoomEnter(event: WheelEvent, delta: number) {
    if (event.ctrlKey) {
      event.preventDefault()
      if (event.deltaY > 0) {
        // Zoom Out
        this.zoomOut()
      } else {
        // Zoom In
        this.zoomIn()
      }
    }
  }

  zoomRefresh() {
    this.dispatch('zoom', this.zoom)
    this.canvas_x = (this.canvas_x / this.zoom_last_value) * this.zoom
    this.canvas_y = (this.canvas_y / this.zoom_last_value) * this.zoom
    this.zoom_last_value = this.zoom
    this.precanvas.style.transform =
      'translate(' +
      this.canvas_x +
      'px, ' +
      this.canvas_y +
      'px) scale(' +
      this.zoom +
      ')'
  }

  zoomIn() {
    if (this.zoom < this.zoom_max) {
      this.zoom += this.zoom_value
      this.zoomRefresh()
    }
  }

  zoomOut() {
    if (this.zoom > this.zoom_min) {
      this.zoom -= this.zoom_value
      this.zoomRefresh()
    }
  }

  zoomReset() {
    if (this.zoom != 1) {
      this.zoom = 1
      this.zoomRefresh()
    }
  }

  createCurvature(
    startPosX: number,
    startPosY: number,
    endPosX: number,
    endPosY: number,
    curvatureValue: number,
    type: string
  ) {
    const lineX = startPosX
    const lineY = startPosY

    const x = endPosX
    const y = endPosY

    const curvature = curvatureValue

    let hx1: number
    let hx2: number

    switch (type) {
      case 'open': {
        if (startPosX >= endPosX) {
          hx1 = lineX + Math.abs(x - lineX) * curvature
          hx2 = x - Math.abs(x - lineX) * (curvature * -1)
        } else {
          hx1 = lineX + Math.abs(x - lineX) * curvature
          hx2 = x - Math.abs(x - lineX) * curvature
        }

        return (
          ' M ' +
          lineX +
          ' ' +
          lineY +
          ' C ' +
          hx1 +
          ' ' +
          lineY +
          ' ' +
          hx2 +
          ' ' +
          y +
          ' ' +
          x +
          '  ' +
          y
        )
      }

      case 'close': {
        if (startPosX >= endPosX) {
          hx1 = lineX + Math.abs(x - lineX) * (curvature * -1)
          hx2 = x - Math.abs(x - lineX) * curvature
        } else {
          hx1 = lineX + Math.abs(x - lineX) * curvature
          hx2 = x - Math.abs(x - lineX) * curvature
        }
        return (
          ' M ' +
          lineX +
          ' ' +
          lineY +
          ' C ' +
          hx1 +
          ' ' +
          lineY +
          ' ' +
          hx2 +
          ' ' +
          y +
          ' ' +
          x +
          '  ' +
          y
        )
      }

      case 'other': {
        if (startPosX >= endPosX) {
          hx1 = lineX + Math.abs(x - lineX) * (curvature * -1)
          hx2 = x - Math.abs(x - lineX) * (curvature * -1)
        } else {
          hx1 = lineX + Math.abs(x - lineX) * curvature
          hx2 = x - Math.abs(x - lineX) * curvature
        }
        return (
          ' M ' +
          lineX +
          ' ' +
          lineY +
          ' C ' +
          hx1 +
          ' ' +
          lineY +
          ' ' +
          hx2 +
          ' ' +
          y +
          ' ' +
          x +
          '  ' +
          y
        )
      }

      default: {
        hx1 = lineX + Math.abs(x - lineX) * curvature
        hx2 = x - Math.abs(x - lineX) * curvature

        return (
          ' M ' +
          lineX +
          ' ' +
          lineY +
          ' C ' +
          hx1 +
          ' ' +
          lineY +
          ' ' +
          hx2 +
          ' ' +
          y +
          ' ' +
          x +
          '  ' +
          y
        )
      }
    }
  }

  drawConnection(ele: HTMLElement) {
    const connection = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    )
    this.connectionElement = connection

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.classList.add('main-path')
    path.setAttributeNS(null, 'd', '')

    connection.classList.add('connection')
    connection.appendChild(path)
    this.precanvas.appendChild(connection)

    const idOutput = ele.parentElement.parentElement.id.slice(5)
    const outputClass = ele.classList[1]

    this.dispatch('connectionStart', {
      output_id: idOutput,
      outputClass: outputClass,
    })
  }

  updateConnection(eX: number, eY: number) {
    const precanvas = this.precanvas
    const zoom = this.zoom

    let precanvasWitdhZoom =
      precanvas.clientWidth / (precanvas.clientWidth * zoom)
    precanvasWitdhZoom = precanvasWitdhZoom || 0

    let precanvasHeightZoom =
      precanvas.clientHeight / (precanvas.clientHeight * zoom)

    precanvasHeightZoom = precanvasHeightZoom || 0

    const path = this.connectionElement.children[0]

    const lineX =
      this.elementSelected.offsetWidth / 2 +
      (this.elementSelected.getBoundingClientRect().x -
        precanvas.getBoundingClientRect().x) *
        precanvasWitdhZoom
    const lineY =
      this.elementSelected.offsetHeight / 2 +
      (this.elementSelected.getBoundingClientRect().y -
        precanvas.getBoundingClientRect().y) *
        precanvasHeightZoom

    const x =
      eX *
        (this.precanvas.clientWidth /
          (this.precanvas.clientWidth * this.zoom)) -
      this.precanvas.getBoundingClientRect().x *
        (this.precanvas.clientWidth / (this.precanvas.clientWidth * this.zoom))
    const y =
      eY *
        (this.precanvas.clientHeight /
          (this.precanvas.clientHeight * this.zoom)) -
      this.precanvas.getBoundingClientRect().y *
        (this.precanvas.clientHeight /
          (this.precanvas.clientHeight * this.zoom))

    const curvature = this.curvature
    const lineCurve = this.createCurvature(
      lineX,
      lineY,
      x,
      y,
      curvature,
      'openclose'
    )
    path.setAttributeNS(null, 'd', lineCurve)
  }

  addConnection(
    idOutput: number,
    idInput: number,
    outputClass: string,
    inputClass: string
  ) {
    const nodeOneModule = this.getModuleFromNodeId(idOutput)
    const nodeTwoModule = this.getModuleFromNodeId(idInput)
    if (nodeOneModule === nodeTwoModule) {
      const dataNode = this.getNodeFromId(idOutput)
      let exist = false
      for (const checkOutput in dataNode.outputs[outputClass].connections) {
        const connectionSearch =
          dataNode.outputs[outputClass].connections[checkOutput]
        if (
          connectionSearch.node == idInput &&
          connectionSearch.output == inputClass
        ) {
          exist = true
        }
      }
      // Check connection exist
      if (exist === false) {
        //Create Connection
        this.drawflow.drawflow[nodeOneModule].data[idOutput].outputs[
          outputClass
        ].connections.push({ node: idInput.toString(), output: inputClass })
        this.drawflow.drawflow[nodeOneModule].data[idInput].inputs[
          inputClass
        ].connections.push({ node: idOutput.toString(), input: outputClass })

        if (this.module === nodeOneModule) {
          //Draw connection
          const connection = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
          )
          const path = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
          )
          path.classList.add('main-path')
          path.setAttributeNS(null, 'd', '')
          // path.innerHTML = 'a';
          connection.classList.add('connection')
          connection.classList.add('node_in_node-' + idInput)
          connection.classList.add('node_out_node-' + idOutput)
          connection.classList.add(outputClass)
          connection.classList.add(inputClass)
          connection.appendChild(path)
          this.precanvas.appendChild(connection)
          this.updateConnectionNodes('node-' + idOutput)
          this.updateConnectionNodes('node-' + idInput)
        }

        this.dispatch('connectionCreated', {
          output_id: idOutput,
          input_id: idInput,
          outputClass: outputClass,
          inputClass: inputClass,
        })
      }
    }
  }

  updateConnectionNodes(id: string) {
    const idSearch = 'node_in_' + id
    const idSearchOut = 'node_out_' + id
    const line_path = this.line_path / 2
    const container = this.container
    const precanvas = this.precanvas
    const curvature = this.curvature
    const createCurvature = this.createCurvature
    const rerouteCurvature = this.rerouteCurvature
    const rerouteCurvatureStartEnd = this.rerouteCurvatureStartEnd
    const rerouteFixCurvature = this.rerouteFixCurvature
    const rerouteWidth = this.rerouteWidth
    const zoom = this.zoom

    let precanvasWitdhZoom =
      precanvas.clientWidth / (precanvas.clientWidth * zoom)
    precanvasWitdhZoom = precanvasWitdhZoom || 0
    let precanvasHeightZoom =
      precanvas.clientHeight / (precanvas.clientHeight * zoom)
    precanvasHeightZoom = precanvasHeightZoom || 0

    const elemsOut = container.querySelectorAll(`.${idSearchOut}`)

    Object.keys(elemsOut).map((item, index) => {
      if (elemsOut[item].querySelector('.point') === null) {
        const elemtsearchIdOut = container.querySelector(`#${id}`)

        const id_search = elemsOut[item].classList[1].replace('node_in_', '')
        const elemtsearchId = container.querySelector(`#${id_search}`)

        const elemtsearch = elemtsearchId.querySelectorAll(
          '.' + elemsOut[item].classList[4]
        )[0] as HTMLElement

        const eX =
          elemtsearch.offsetWidth / 2 +
          (elemtsearch.getBoundingClientRect().x -
            precanvas.getBoundingClientRect().x) *
            precanvasWitdhZoom
        const eY =
          elemtsearch.offsetHeight / 2 +
          (elemtsearch.getBoundingClientRect().y -
            precanvas.getBoundingClientRect().y) *
            precanvasHeightZoom

        const elemtsearchOut = elemtsearchIdOut.querySelectorAll(
          '.' + elemsOut[item].classList[3]
        )[0] as HTMLElement
        const lineX =
          elemtsearchOut.offsetWidth / 2 +
          (elemtsearchOut.getBoundingClientRect().x -
            precanvas.getBoundingClientRect().x) *
            precanvasWitdhZoom
        const lineY =
          elemtsearchOut.offsetHeight / 2 +
          (elemtsearchOut.getBoundingClientRect().y -
            precanvas.getBoundingClientRect().y) *
            precanvasHeightZoom

        const x = eX
        const y = eY

        const lineCurve = createCurvature(
          lineX,
          lineY,
          x,
          y,
          curvature,
          'openclose'
        )
        elemsOut[item].children[0].setAttributeNS(null, 'd', lineCurve)
      } else {
        const points = elemsOut[item].querySelectorAll('.point')
        let linecurve = ''
        const reoute_fix = []
        points.forEach((item, i) => {
          let elemtsearchIdOut: HTMLElement
          let elemtsearchIn: HTMLElement
          let elemtsearch: HTMLElement
          let lineCurveSearch: string
          let lineX: number
          let lineY: number
          let eX: number
          let eY: number
          let x: number
          let y: number

          let elemtsearchOut: HTMLElement

          if (i === 0 && points.length - 1 === 0) {
            // M lineX lineY C hx1 lineY hx2 y x y
            elemtsearchIdOut = container.querySelector(`#${id}`)
            elemtsearch = item

            eX =
              (elemtsearch.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            eY =
              (elemtsearch.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth

            elemtsearchOut = elemtsearchIdOut.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[3]
            )[0]
            lineX =
              elemtsearchOut.offsetWidth / 2 +
              (elemtsearchOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom
            lineY =
              elemtsearchOut.offsetHeight / 2 +
              (elemtsearchOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvatureStartEnd,
              'open'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)

            elemtsearchIdOut = item
            const id_search = item.parentElement.classList[1].replace(
              'node_in_',
              ''
            )
            const elemtsearchId = container.querySelector(`#${id_search}`)
            elemtsearch = elemtsearchId.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[4]
            )[0]

            elemtsearchIn = elemtsearchId.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[4]
            )[0]
            eX =
              elemtsearchIn.offsetWidth / 2 +
              (elemtsearchIn.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom
            eY =
              elemtsearchIn.offsetHeight / 2 +
              (elemtsearchIn.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom

            lineX =
              (elemtsearchIdOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            lineY =
              (elemtsearchIdOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvatureStartEnd,
              'close'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)
          } else if (i === 0) {
            // M lineX lineY C hx1 lineY hx2 y x y
            // FIRST
            elemtsearchIdOut = container.querySelector(`#${id}`)
            elemtsearch = item

            eX =
              (elemtsearch.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            eY =
              (elemtsearch.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth

            elemtsearchOut = elemtsearchIdOut.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[3]
            )[0]
            lineX =
              elemtsearchOut.offsetWidth / 2 +
              (elemtsearchOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom
            lineY =
              elemtsearchOut.offsetHeight / 2 +
              (elemtsearchOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvatureStartEnd,
              'open'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)

            // SECOND
            elemtsearchIdOut = item
            elemtsearch = points[i + 1]

            eX =
              (elemtsearch.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            eY =
              (elemtsearch.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth
            lineX =
              (elemtsearchIdOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            lineY =
              (elemtsearchIdOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvature,
              'other'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)
          } else if (i === points.length - 1) {
            elemtsearchIdOut = item

            const id_search = item.parentElement.classList[1].replace(
              'node_in_',
              ''
            )
            const elemtsearchId = container.querySelector(`#${id_search}`)
            elemtsearch = elemtsearchId.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[4]
            )[0]

            elemtsearchIn = elemtsearchId.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[4]
            )[0]
            const eX =
              elemtsearchIn.offsetWidth / 2 +
              (elemtsearchIn.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom
            const eY =
              elemtsearchIn.offsetHeight / 2 +
              (elemtsearchIn.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom
            lineX =
              (elemtsearchIdOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                (precanvas.clientWidth / (precanvas.clientWidth * zoom)) +
              rerouteWidth
            lineY =
              (elemtsearchIdOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                (precanvas.clientHeight / (precanvas.clientHeight * zoom)) +
              rerouteWidth
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvatureStartEnd,
              'close'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)
          } else {
            const elemtsearchIdOut = item
            elemtsearch = points[i + 1]

            const eX =
              (elemtsearch.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                (precanvas.clientWidth / (precanvas.clientWidth * zoom)) +
              rerouteWidth
            const eY =
              (elemtsearch.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                (precanvas.clientHeight / (precanvas.clientHeight * zoom)) +
              rerouteWidth
            lineX =
              (elemtsearchIdOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                (precanvas.clientWidth / (precanvas.clientWidth * zoom)) +
              rerouteWidth
            lineY =
              (elemtsearchIdOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                (precanvas.clientHeight / (precanvas.clientHeight * zoom)) +
              rerouteWidth
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvature,
              'other'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)
          }
        })

        if (rerouteFixCurvature) {
          reoute_fix.forEach((itempath, i) => {
            elemsOut[item].children[i].setAttributeNS(null, 'd', itempath)
          })
        } else {
          elemsOut[item].children[0].setAttributeNS(null, 'd', linecurve)
        }
      }
    })

    const elems = container.querySelectorAll(`.${idSearch}`)

    Object.keys(elems).map((item, index) => {
      let elementSearchIdIn: HTMLElement

      if (elems[item].querySelector('.point') === null) {
        elementSearchIdIn = container.querySelector(`#${id}`)

        const id_search = elems[item].classList[2].replace('node_out_', '')
        const elemtsearchId = container.querySelector(`#${id_search}`)
        const elemtsearch = elemtsearchId.querySelectorAll(
          '.' + elems[item].classList[3]
        )[0] as HTMLElement

        const lineX =
          elemtsearch.offsetWidth / 2 +
          (elemtsearch.getBoundingClientRect().x -
            precanvas.getBoundingClientRect().x) *
            precanvasWitdhZoom
        const lineY =
          elemtsearch.offsetHeight / 2 +
          (elemtsearch.getBoundingClientRect().y -
            precanvas.getBoundingClientRect().y) *
            precanvasHeightZoom

        elementSearchIdIn = elementSearchIdIn.querySelectorAll<HTMLElement>(
          '.' + elems[item].classList[4]
        )[0]
        const x =
          elementSearchIdIn.offsetWidth / 2 +
          (elementSearchIdIn.getBoundingClientRect().x -
            precanvas.getBoundingClientRect().x) *
            precanvasWitdhZoom
        const y =
          elementSearchIdIn.offsetHeight / 2 +
          (elementSearchIdIn.getBoundingClientRect().y -
            precanvas.getBoundingClientRect().y) *
            precanvasHeightZoom

        const lineCurve = createCurvature(
          lineX,
          lineY,
          x,
          y,
          curvature,
          'openclose'
        )
        elems[item].children[0].setAttributeNS(null, 'd', lineCurve)
      } else {
        const points = (elems[
          item
        ] as HTMLElement).querySelectorAll<HTMLElement>('.point')

        let linecurve = ''
        const reoute_fix = []

        points.forEach((item, i) => {
          let elemtsearchIdOut: HTMLElement
          let elemtsearchIn: HTMLElement
          let elemtsearch: HTMLElement
          let lineCurveSearch: string
          let lineX: number
          let lineY: number
          let eX: number
          let eY: number
          let x: number
          let y: number

          if (i === 0 && points.length - 1 === 0) {
            // M lineX lineY C hx1 lineY hx2 y x y
            elemtsearchIdOut = container.querySelector(`#${id}`)
            elemtsearch = item

            lineX =
              (elemtsearch.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            lineY =
              (elemtsearch.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth

            elemtsearchIn = elemtsearchIdOut.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[4]
            )[0]
            eX =
              elemtsearchIn.offsetWidth / 2 +
              (elemtsearchIn.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom
            eY =
              elemtsearchIn.offsetHeight / 2 +
              (elemtsearchIn.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom

            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvatureStartEnd,
              'close'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)

            elemtsearchIdOut = item
            const id_search = item.parentElement.classList[2].replace(
              'node_out_',
              ''
            )
            const elemtsearchId = container.querySelector(`#${id_search}`)
            elemtsearch = elemtsearchId.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[3]
            )[0]

            const elemtsearchOut = elemtsearchId.querySelectorAll(
              '.' + item.parentElement.classList[3]
            )[0] as HTMLElement
            lineX =
              elemtsearchOut.offsetWidth / 2 +
              (elemtsearchOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom
            lineY =
              elemtsearchOut.offsetHeight / 2 +
              (elemtsearchOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom

            eX =
              (elemtsearchIdOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            eY =
              (elemtsearchIdOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvatureStartEnd,
              'open'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)
          } else if (i === 0) {
            // M lineX lineY C hx1 lineY hx2 y x y
            // FIRST
            elemtsearchIdOut = item
            const id_search = item.parentElement.classList[2].replace(
              'node_out_',
              ''
            )
            const elemtsearchId = container.querySelector(`#${id_search}`)
            elemtsearch = elemtsearchId.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[3]
            )[0]

            /*lineX = elemtsearch.offsetWidth/2 + line_path + elemtsearch.parentElement.parentElement.offsetLeft + elemtsearch.offsetLeft;
            lineY = elemtsearch.offsetHeight/2 + line_path + elemtsearch.parentElement.parentElement.offsetTop + elemtsearch.offsetTop;*/
            const elemtsearchOut = elemtsearchId.querySelectorAll(
              '.' + item.parentElement.classList[3]
            )[0] as HTMLElement
            lineX =
              elemtsearchOut.offsetWidth / 2 +
              (elemtsearchOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom
            lineY =
              elemtsearchOut.offsetHeight / 2 +
              (elemtsearchOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom

            eX =
              (elemtsearchIdOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            eY =
              (elemtsearchIdOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvatureStartEnd,
              'open'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)

            // SECOND
            elemtsearchIdOut = item
            elemtsearch = points[i + 1]

            eX =
              (elemtsearch.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            eY =
              (elemtsearch.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth
            lineX =
              (elemtsearchIdOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            lineY =
              (elemtsearchIdOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvature,
              'other'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)
          } else if (i === points.length - 1) {
            elemtsearchIdOut = item

            const id_search = item.parentElement.classList[1].replace(
              'node_in_',
              ''
            )
            const elemtsearchId = container.querySelector(`#${id_search}`)
            elemtsearch = elemtsearchId.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[4]
            )[0]

            elemtsearchIn = elemtsearchId.querySelectorAll<HTMLElement>(
              '.' + item.parentElement.classList[4]
            )[0]
            eX =
              elemtsearchIn.offsetWidth / 2 +
              (elemtsearchIn.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom
            eY =
              elemtsearchIn.offsetHeight / 2 +
              (elemtsearchIn.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom

            lineX =
              (elemtsearchIdOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            lineY =
              (elemtsearchIdOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvatureStartEnd,
              'close'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)
          } else {
            elemtsearchIdOut = item
            elemtsearch = points[i + 1]

            eX =
              (elemtsearch.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            eY =
              (elemtsearch.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth
            lineX =
              (elemtsearchIdOut.getBoundingClientRect().x -
                precanvas.getBoundingClientRect().x) *
                precanvasWitdhZoom +
              rerouteWidth
            lineY =
              (elemtsearchIdOut.getBoundingClientRect().y -
                precanvas.getBoundingClientRect().y) *
                precanvasHeightZoom +
              rerouteWidth
            x = eX
            y = eY

            lineCurveSearch = createCurvature(
              lineX,
              lineY,
              x,
              y,
              rerouteCurvature,
              'other'
            )
            linecurve += lineCurveSearch
            reoute_fix.push(lineCurveSearch)
          }
        })
        if (rerouteFixCurvature) {
          reoute_fix.forEach((itempath, i) => {
            elems[item].children[i].setAttributeNS(null, 'd', itempath)
          })
        } else {
          elems[item].children[0].setAttributeNS(null, 'd', linecurve)
        }
      }
    })
  }

  dblclick(e) {
    if (this.connectionSelected != null && this.reroute) {
      this.createReroutePoint(this.connectionSelected)
    }

    if (e.target.classList[0] === 'point') {
      this.removeReroutePoint(e.target)
    }
  }

  createReroutePoint(ele: HTMLElement) {
    this.connectionSelected.classList.remove('selected')

    const nodeUpdate = this.connectionSelected.parentElement.classList[2].slice(
      9
    )
    const nodeUpdateIn = this.connectionSelected.parentElement.classList[1].slice(
      13
    )
    const outputClass = this.connectionSelected.parentElement.classList[3]
    const inputClass = this.connectionSelected.parentElement.classList[4]

    this.connectionSelected = null

    const point = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    )
    point.classList.add('point')

    const posX =
      this.posX *
        (this.precanvas.clientWidth /
          (this.precanvas.clientWidth * this.zoom)) -
      this.precanvas.getBoundingClientRect().x *
        (this.precanvas.clientWidth / (this.precanvas.clientWidth * this.zoom))
    const posY =
      this.posY *
        (this.precanvas.clientHeight /
          (this.precanvas.clientHeight * this.zoom)) -
      this.precanvas.getBoundingClientRect().y *
        (this.precanvas.clientHeight /
          (this.precanvas.clientHeight * this.zoom))

    point.setAttributeNS(null, 'cx', posX + '')
    point.setAttributeNS(null, 'cy', posY + '')
    point.setAttributeNS(null, 'r', this.rerouteWidth + '')

    let positionAddArrayPoint = 0
    if (this.rerouteFixCurvature) {
      const numberPoints = ele.parentElement.querySelectorAll('.main-path')
        .length
      const path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      )
      path.classList.add('main-path')
      path.setAttributeNS(null, 'd', '')

      ele.parentElement.insertBefore(
        path,
        ele.parentElement.children[numberPoints]
      )
      if (numberPoints === 1) {
        ele.parentElement.appendChild(point)
      } else {
        const search_point = Array.from(ele.parentElement.children).indexOf(ele)
        positionAddArrayPoint = search_point
        ele.parentElement.insertBefore(
          point,
          ele.parentElement.children[search_point + numberPoints + 1]
        )
      }
    } else {
      ele.parentElement.appendChild(point)
    }

    const nodeId = nodeUpdate.slice(5)
    const searchConnection = this.drawflow.drawflow[this.module].data[
      nodeId
    ].outputs[outputClass].connections.findIndex(function (item, i) {
      return item.node === nodeUpdateIn && item.output === inputClass
    })

    if (
      this.drawflow.drawflow[this.module].data[nodeId].outputs[outputClass]
        .connections[searchConnection].points === undefined
    ) {
      this.drawflow.drawflow[this.module].data[nodeId].outputs[
        outputClass
      ].connections[searchConnection].points = []
    }

    if (this.rerouteFixCurvature) {
      if (positionAddArrayPoint > 0) {
        this.drawflow.drawflow[this.module].data[nodeId].outputs[
          outputClass
        ].connections[searchConnection].points.splice(
          positionAddArrayPoint,
          0,
          { posX: posX, posY: posY }
        )
      } else {
        this.drawflow.drawflow[this.module].data[nodeId].outputs[
          outputClass
        ].connections[searchConnection].points.push({ posX: posX, posY: posY })
      }

      ele.parentElement.querySelectorAll('.main-path').forEach((item, i) => {
        item.classList.remove('selected')
      })
    } else {
      this.drawflow.drawflow[this.module].data[nodeId].outputs[
        outputClass
      ].connections[searchConnection].points.push({ posX: posX, posY: posY })
    }

    this.dispatch('addReroute', nodeId)
    this.updateConnectionNodes(nodeUpdate)
  }

  removeReroutePoint(ele: HTMLElement) {
    const nodeUpdate = ele.parentElement.classList[2].slice(9)
    const nodeUpdateIn = ele.parentElement.classList[1].slice(13)
    const outputClass = ele.parentElement.classList[3]
    const inputClass = ele.parentElement.classList[4]

    let numberPointPosition =
      Array.from(ele.parentElement.children).indexOf(ele) - 1

    const nodeId = nodeUpdate.slice(5)
    const searchConnection = this.drawflow.drawflow[this.module].data[
      nodeId
    ].outputs[outputClass].connections.findIndex(function (item, i) {
      return item.node === nodeUpdateIn && item.output === inputClass
    })

    if (this.rerouteFixCurvature) {
      const numberMainPath = ele.parentElement.querySelectorAll('.main-path')
        .length
      ele.parentElement.children[numberMainPath - 1].remove()
      numberPointPosition -= numberMainPath
      if (numberPointPosition < 0) {
        numberPointPosition = 0
      }
    }
    //console.log(numberPointPosition);
    this.drawflow.drawflow[this.module].data[nodeId].outputs[
      outputClass
    ].connections[searchConnection].points.splice(numberPointPosition, 1)

    ele.remove()
    this.dispatch('removeReroute', nodeId)
    this.updateConnectionNodes(nodeUpdate)
  }

  registerNode(name, html, props = null, options = null) {
    this.noderegister[name] = { html: html, props: props, options: options }
  }

  getNodeFromId(id: string | number) {
    const moduleName = this.getModuleFromNodeId(id)
    return JSON.parse(
      JSON.stringify(this.drawflow.drawflow[moduleName].data[id])
    )
  }

  getNodesFromName(name: string) {
    const nodes = []
    const editor = this.drawflow.drawflow
    Object.keys(editor).map(function (moduleName, index) {
      for (const node in editor[moduleName].data) {
        if (editor[moduleName].data[node].name == name) {
          nodes.push(editor[moduleName].data[node].id)
        }
      }
    })
    return nodes
  }

  addNode(
    name: string,
    num_in: number,
    num_out: number,
    ele_posX: number,
    ele_posY: number,
    classoverride: string,
    data: Record<string, string>,
    html: string,
    typenode = false
  ) {
    let newNodeId: string | number

    if (this.useuuid) {
      newNodeId = this.getUuid()
    } else {
      newNodeId = this.nodeId
    }
    const parent = document.createElement('div')
    parent.classList.add('parent-node')

    const node = document.createElement('div')

    node.innerHTML = ''
    node.setAttribute('id', 'node-' + newNodeId)
    node.classList.add('drawflow-node')

    if (classoverride != '') {
      node.classList.add(classoverride)
    }

    const inputs = document.createElement('div')
    inputs.classList.add('inputs')

    const outputs = document.createElement('div')
    outputs.classList.add('outputs')

    const json_inputs = {}
    for (let x = 0; x < num_in; x++) {
      const input = document.createElement('div')
      input.classList.add('input')
      input.classList.add('input_' + (x + 1))
      json_inputs['input_' + (x + 1)] = { connections: [] }
      inputs.appendChild(input)
    }

    const json_outputs = {}
    for (let x = 0; x < num_out; x++) {
      const output = document.createElement('div')
      output.classList.add('output')
      output.classList.add('output_' + (x + 1))
      json_outputs['output_' + (x + 1)] = { connections: [] }
      outputs.appendChild(output)
    }

    const content = document.createElement('div')
    content.classList.add('drawflow_content_node')
    if (typenode === false) {
      content.innerHTML = html
    } else if (typenode === true) {
      content.appendChild(this.noderegister[html].html.cloneNode(true))
    }

    Object.entries(data).forEach(function (key, value) {
      if (typeof key[1] === 'object') {
        insertObjectkeys(null, key[0], key[0])
      } else {
        const elems = content.querySelectorAll<HTMLInputElement>(
          '[df-' + key[0] + ']'
        )
        elems.forEach((el) => {
          el.value = key[1] as string
        })
      }
    })

    function insertObjectkeys(object = {}, name: string, completname: string) {
      if (object === null) {
        object = data[name]
      } else {
        object = object[name]
      }
      if (object !== null) {
        Object.entries(object).forEach(function (key, value) {
          if (typeof key[1] === 'object') {
            insertObjectkeys(object, key[0], completname + '-' + key[0])
          } else {
            const elems = content.querySelectorAll<HTMLInputElement>(
              '[df-' + completname + '-' + key[0] + ']'
            )
            for (let i = 0; i < elems.length; i++) {
              elems[i].value = key[1] as string
            }
          }
        })
      }
    }
    node.appendChild(inputs)
    node.appendChild(content)
    node.appendChild(outputs)
    node.style.top = ele_posY + 'px'
    node.style.left = ele_posX + 'px'
    parent.appendChild(node)
    this.precanvas.appendChild(parent)
    const json = {
      id: newNodeId,
      name: name,
      data: data,
      class: classoverride,
      html: html,
      typenode: typenode,
      inputs: json_inputs,
      outputs: json_outputs,
      posX: ele_posX,
      posY: ele_posY,
    }
    this.drawflow.drawflow[this.module].data[newNodeId] = json
    this.dispatch('nodeCreated', newNodeId)
    if (!this.useuuid) {
      this.nodeId++
    }
    return newNodeId
  }

  addNodeImport(dataNode: DataDrawFlow, precanvas: HTMLElement) {
    const parent = document.createElement('div')
    parent.classList.add('parent-node')

    const node = document.createElement('div')
    node.innerHTML = ''
    node.setAttribute('id', 'node-' + dataNode.id)
    node.classList.add('drawflow-node')

    if (dataNode.class != '') {
      node.classList.add(dataNode.class)
    }

    const inputs = document.createElement('div')
    inputs.classList.add('inputs')

    const outputs = document.createElement('div')
    outputs.classList.add('outputs')

    Object.keys(dataNode.inputs).map(function (inputItem, index) {
      const input = document.createElement('div')
      input.classList.add('input')
      input.classList.add(inputItem)
      inputs.appendChild(input)
      Object.keys(dataNode.inputs[inputItem].connections).map(function (
        output_item,
        index
      ) {
        const connection = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'svg'
        )
        const path = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        )
        path.classList.add('main-path')
        path.setAttributeNS(null, 'd', '')
        // path.innerHTML = 'a';
        connection.classList.add('connection')
        connection.classList.add('node_in_node-' + dataNode.id)
        connection.classList.add(
          'node_out_node-' +
            dataNode.inputs[inputItem].connections[output_item].node
        )
        connection.classList.add(
          dataNode.inputs[inputItem].connections[output_item].input
        )
        connection.classList.add(inputItem)

        connection.appendChild(path)
        precanvas.appendChild(connection)
      })
    })

    for (let x = 0; x < Object.keys(dataNode.outputs).length; x++) {
      const output = document.createElement('div')
      output.classList.add('output')
      output.classList.add('output_' + (x + 1))
      outputs.appendChild(output)
    }

    const content = document.createElement('div')
    content.classList.add('drawflow_content_node')
    //content.innerHTML = dataNode.html;

    if (dataNode.typenode === false) {
      content.innerHTML = dataNode.html
    } else if (dataNode.typenode === true) {
      content.appendChild(this.noderegister[dataNode.html].html.cloneNode(true))
    } else {
      // if (parseInt(this.render.version) === 3) {
      //   //Vue 3
      //   let wrapper = this.render.createApp({
      //     render: h => this.render.h(this.noderegister[dataNode.html].html, this.noderegister[dataNode.html].props, this.noderegister[dataNode.html].options)
      //   }).mount(content)
      // } else {
      //   //Vue 2
      //   let wrapper = new this.render({
      //     render: h => h(this.noderegister[dataNode.html].html, { props: this.noderegister[dataNode.html].props }),
      //     ...this.noderegister[dataNode.html].options
      //   }).$mount()
      //   content.appendChild(wrapper.$el);
      // }
    }

    Object.entries(dataNode.data).forEach(function (key, value) {
      if (typeof key[1] === 'object') {
        insertObjectkeys(null, key[0], key[0])
      } else {
        const elems = content.querySelectorAll<HTMLInputElement>(
          '[df-' + key[0] + ']'
        )
        for (let i = 0; i < elems.length; i++) {
          elems[i].value = key[1] as string
        }
      }
    })

    function insertObjectkeys(object = {}, name, completname) {
      if (object === null) {
        object = dataNode.data[name]
      } else {
        object = object[name]
      }
      if (object !== null) {
        Object.entries(object).forEach(function (key, value) {
          if (typeof key[1] === 'object') {
            insertObjectkeys(object, key[0], completname + '-' + key[0])
          } else {
            const elems = content.querySelectorAll<HTMLInputElement>(
              '[df-' + completname + '-' + key[0] + ']'
            )
            for (let i = 0; i < elems.length; i++) {
              elems[i].value = key[1] as string
            }
          }
        })
      }
    }
    node.appendChild(inputs)
    node.appendChild(content)
    node.appendChild(outputs)
    node.style.top = dataNode.posY + 'px'
    node.style.left = dataNode.posX + 'px'
    parent.appendChild(node)
    this.precanvas.appendChild(parent)
  }

  addRerouteImport(dataNode: DataDrawFlow) {
    const rerouteWidth = this.rerouteWidth
    const rerouteFixCurvature = this.rerouteFixCurvature

    Object.keys(dataNode.outputs).map(function (output_item, index) {
      Object.keys(dataNode.outputs[output_item].connections).map(function (
        inputItem,
        index
      ) {
        const points =
          dataNode.outputs[output_item].connections[inputItem].points
        if (points !== undefined) {
          points.forEach((item, i) => {
            const input_id =
              dataNode.outputs[output_item].connections[inputItem].node
            const inputClass =
              dataNode.outputs[output_item].connections[inputItem].output
            //console.log('.connection.node_in_'+input_id+'.node_out_'+dataNode.id+'.'+output_item+'.'+inputClass);
            const ele = document.querySelector(
              '.connection.node_in_node-' +
                input_id +
                '.node_out_node-' +
                dataNode.id +
                '.' +
                output_item +
                '.' +
                inputClass
            )

            if (rerouteFixCurvature) {
              if (i === 0) {
                for (let z = 0; z < points.length; z++) {
                  const path = document.createElementNS(
                    'http://www.w3.org/2000/svg',
                    'path'
                  )
                  path.classList.add('main-path')
                  path.setAttributeNS(null, 'd', '')
                  ele.appendChild(path)
                }
              }
            }

            const point = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'circle'
            )
            point.classList.add('point')

            const posX = item.posX
            const posY = item.posY

            point.setAttributeNS(null, 'cx', posX)
            point.setAttributeNS(null, 'cy', posY)
            point.setAttributeNS(null, 'r', rerouteWidth + '')

            ele.appendChild(point)
          })
        }
      })
    })
  }

  updateNodeValue(event: MouseEvent & { target: HTMLInputElement }) {
    const attr = event.target.attributes
    for (let i = 0; i < attr.length; i++) {
      if (attr[i].nodeName.startsWith('df-')) {
        const keys = attr[i].nodeName.slice(3).split('-')
        let target = this.drawflow.drawflow[this.module].data[
          event.target
            .closest('.drawflow_content_node')
            .parentElement.id.slice(5)
        ].data
        for (let index = 0; index < keys.length - 1; index += 1) {
          if (target[keys[index]] == null) {
            target[keys[index]] = {}
          }
          target = target[keys[index]]
        }
        target[keys[keys.length - 1]] = event.target.value
      }
    }
  }

  updateNodeDataFromId(id: string, data: DataDrawFlow) {
    const moduleName = this.getModuleFromNodeId(id)
    this.drawflow.drawflow[moduleName].data[id].data = data
    if (this.module === moduleName) {
      const content = document.querySelector('#node-' + id)

      Object.entries(data).forEach(function (key, value) {
        if (typeof key[1] === 'object') {
          insertObjectkeys(null, key[0], key[0])
        } else {
          const elems = content.querySelectorAll<HTMLInputElement>(
            '[df-' + key[0] + ']'
          )
          for (let i = 0; i < elems.length; i++) {
            elems[i].value = key[1] as string
          }
        }
      })

      const insertObjectkeys = (
        object = {},
        name: string,
        completname: string
      ) => {
        if (object === null) {
          object = data[name]
        } else {
          object = object[name]
        }
        if (object !== null) {
          Object.entries(object).forEach(function (key, value) {
            if (typeof key[1] === 'object') {
              insertObjectkeys(object, key[0], completname + '-' + key[0])
            } else {
              const elems = content.querySelectorAll<HTMLInputElement>(
                '[df-' + completname + '-' + key[0] + ']'
              )
              for (let i = 0; i < elems.length; i++) {
                elems[i].value = key[1] as string
              }
            }
          })
        }
      }
    }
  }

  addNodeInput(id: string) {
    const moduleName = this.getModuleFromNodeId(id)
    const infoNode = this.getNodeFromId(id)
    const numInputs = Object.keys(infoNode.inputs).length
    if (this.module === moduleName) {
      //Draw input
      const input = document.createElement('div')
      input.classList.add('input')
      input.classList.add('input_' + (numInputs + 1))
      const parent = document.querySelector('#node-' + id + ' .inputs')
      parent.appendChild(input)
      this.updateConnectionNodes('node-' + id)
    }
    this.drawflow.drawflow[moduleName].data[id].inputs[
      'input_' + (numInputs + 1)
    ] = { connections: [] }
  }

  addNodeOutput(id: string) {
    const moduleName = this.getModuleFromNodeId(id)
    const infoNode = this.getNodeFromId(id)
    const numOutputs = Object.keys(infoNode.outputs).length
    if (this.module === moduleName) {
      //Draw output
      const output = document.createElement('div')
      output.classList.add('output')
      output.classList.add('output_' + (numOutputs + 1))
      const parent = document.querySelector('#node-' + id + ' .outputs')
      parent.appendChild(output)
      this.updateConnectionNodes('node-' + id)
    }
    this.drawflow.drawflow[moduleName].data[id].outputs[
      'output_' + (numOutputs + 1)
    ] = { connections: [] }
  }

  removeNodeInput(id: string | number, inputClass: string) {
    const moduleName = this.getModuleFromNodeId(id)
    const infoNode = this.getNodeFromId(id)
    if (this.module === moduleName) {
      document
        .querySelector('#node-' + id + ' .inputs .input.' + inputClass)
        .remove()
    }
    const removeInputs = []
    Object.keys(infoNode.inputs[inputClass].connections).map(function (
      key,
      index
    ) {
      const idOutput = infoNode.inputs[inputClass].connections[index].node
      const outputClass = infoNode.inputs[inputClass].connections[index].input
      removeInputs.push({ idOutput, id, outputClass, inputClass })
    })
    // Remove connections
    removeInputs.forEach((item, i) => {
      this.removeSingleConnection(
        item.idOutput,
        item.id,
        item.outputClass,
        item.inputClass
      )
    })

    delete this.drawflow.drawflow[moduleName].data[id].inputs[inputClass]

    // Update connection
    const connections = []
    const connectionsInputs = this.drawflow.drawflow[moduleName].data[id].inputs
    Object.keys(connectionsInputs).map(function (key, index) {
      connections.push(connectionsInputs[key])
    })
    this.drawflow.drawflow[moduleName].data[id].inputs = {}
    const inputClass_id = inputClass.slice(6)
    let nodeUpdates: Array<any> | Set<any> = []
    connections.forEach((item, i) => {
      item.connections.forEach((itemx, f) => {
        ;(nodeUpdates as Array<any>).push(itemx)
      })
      this.drawflow.drawflow[moduleName].data[id].inputs[
        'input_' + (i + 1)
      ] = item
    })
    nodeUpdates = new Set(nodeUpdates.map((e) => JSON.stringify(e)))
    nodeUpdates = Array.from(nodeUpdates).map((e) => JSON.parse(e))

    if (this.module === moduleName) {
      const eles = document.querySelectorAll('#node-' + id + ' .inputs .input')
      eles.forEach((item, i) => {
        const id_class = item.classList[1].slice(6)
        if (parseInt(inputClass_id) < parseInt(id_class)) {
          item.classList.remove('input_' + id_class)
          item.classList.add('input_' + (+id_class - 1))
        }
      })
    }

    nodeUpdates.forEach((itemx, i) => {
      this.drawflow.drawflow[moduleName].data[itemx.node].outputs[
        itemx.input
      ].connections.forEach((itemz, g) => {
        if (itemz.node == id) {
          const output_id = itemz.output.slice(6)
          if (parseInt(inputClass_id) < parseInt(output_id)) {
            if (this.module === moduleName) {
              const ele = document.querySelector(
                '.connection.node_in_node-' +
                  id +
                  '.node_out_node-' +
                  itemx.node +
                  '.' +
                  itemx.input +
                  '.input_' +
                  output_id
              )
              ele.classList.remove('input_' + output_id)
              ele.classList.add('input_' + (output_id - 1))
            }
            if (itemz.points) {
              this.drawflow.drawflow[moduleName].data[itemx.node].outputs[
                itemx.input
              ].connections[g] = {
                node: itemz.node,
                output: 'input_' + (output_id - 1),
                points: itemz.points,
              }
            } else {
              this.drawflow.drawflow[moduleName].data[itemx.node].outputs[
                itemx.input
              ].connections[g] = {
                node: itemz.node,
                output: 'input_' + (output_id - 1),
              }
            }
          }
        }
      })
    })
    this.updateConnectionNodes('node-' + id)
  }

  removeNodeOutput(id: string | number, outputClass: string) {
    const moduleName = this.getModuleFromNodeId(id)
    const infoNode = this.getNodeFromId(id)
    if (this.module === moduleName) {
      document
        .querySelector('#node-' + id + ' .outputs .output.' + outputClass)
        .remove()
    }
    const removeOutputs = []
    Object.keys(infoNode.outputs[outputClass].connections).map(function (
      key,
      index
    ) {
      const idInput = infoNode.outputs[outputClass].connections[index].node
      const inputClass = infoNode.outputs[outputClass].connections[index].output
      removeOutputs.push({ id, idInput, outputClass, inputClass })
    })
    // Remove connections
    removeOutputs.forEach((item, i) => {
      this.removeSingleConnection(
        item.id,
        item.idInput,
        item.outputClass,
        item.inputClass
      )
    })

    delete this.drawflow.drawflow[moduleName].data[id].outputs[outputClass]

    // Update connection
    const connections = []
    const connectionsOuputs = this.drawflow.drawflow[moduleName].data[id]
      .outputs
    Object.keys(connectionsOuputs).map(function (key, index) {
      connections.push(connectionsOuputs[key])
    })
    this.drawflow.drawflow[moduleName].data[id].outputs = {}
    const outputClass_id = outputClass.slice(7)
    let nodeUpdates: Array<any> | Set<any> = []
    connections.forEach((item, i) => {
      item.connections.forEach((itemx, f) => {
        ;(nodeUpdates as Array<any>).push({
          node: itemx.node,
          output: itemx.output,
        })
      })
      this.drawflow.drawflow[moduleName].data[id].outputs[
        'output_' + (i + 1)
      ] = item
    })
    nodeUpdates = new Set(nodeUpdates.map((e) => JSON.stringify(e)))
    nodeUpdates = Array.from(nodeUpdates).map((e) => JSON.parse(e))

    if (this.module === moduleName) {
      const eles = document.querySelectorAll(
        '#node-' + id + ' .outputs .output'
      )
      eles.forEach((item, i) => {
        const id_class = item.classList[1].slice(7)
        if (parseInt(outputClass_id) < parseInt(id_class)) {
          item.classList.remove('output_' + id_class)
          item.classList.add('output_' + (+id_class - 1))
        }
      })
    }

    nodeUpdates.forEach((itemx, i) => {
      this.drawflow.drawflow[moduleName].data[itemx.node].inputs[
        itemx.output
      ].connections.forEach((itemz, g) => {
        if (itemz.node == id) {
          const input_id = itemz.input.slice(7)
          if (parseInt(outputClass_id) < parseInt(input_id)) {
            if (this.module === moduleName) {
              const ele = document.querySelector(
                '.connection.node_in_node-' +
                  itemx.node +
                  '.node_out_node-' +
                  id +
                  '.output_' +
                  input_id +
                  '.' +
                  itemx.output
              )
              ele.classList.remove('output_' + input_id)
              ele.classList.remove(itemx.output)
              ele.classList.add('output_' + (input_id - 1))
              ele.classList.add(itemx.output)
            }
            if (itemz.points) {
              this.drawflow.drawflow[moduleName].data[itemx.node].inputs[
                itemx.output
              ].connections[g] = {
                node: itemz.node,
                input: 'output_' + (input_id - 1),
                points: itemz.points,
              }
            } else {
              this.drawflow.drawflow[moduleName].data[itemx.node].inputs[
                itemx.output
              ].connections[g] = {
                node: itemz.node,
                input: 'output_' + (input_id - 1),
              }
            }
          }
        }
      })
    })

    this.updateConnectionNodes('node-' + id)
  }

  removeNodeId(id: string) {
    this.removeConnectionNodeId(id)
    const moduleName = this.getModuleFromNodeId(id.slice(5))
    if (this.module === moduleName) {
      this.container.querySelector(`#${id}`).remove()
    }
    delete this.drawflow.drawflow[moduleName].data[id.slice(5)]
    this.dispatch('nodeRemoved', id.slice(5))
  }

  removeConnection() {
    if (this.connectionSelected != null) {
      const listclass = this.connectionSelected.parentElement.classList
      this.connectionSelected.parentElement.remove()
      //console.log(listclass);
      const index_out = this.drawflow.drawflow[this.module].data[
        listclass[2].slice(14)
      ].outputs[listclass[3]].connections.findIndex(function (item, i) {
        return (
          item.node === listclass[1].slice(13) && item.output === listclass[4]
        )
      })
      this.drawflow.drawflow[this.module].data[listclass[2].slice(14)].outputs[
        listclass[3]
      ].connections.splice(index_out, 1)

      const index_in = this.drawflow.drawflow[this.module].data[
        listclass[1].slice(13)
      ].inputs[listclass[4]].connections.findIndex(function (item, i) {
        return (
          item.node === listclass[2].slice(14) && item.input === listclass[3]
        )
      })
      this.drawflow.drawflow[this.module].data[listclass[1].slice(13)].inputs[
        listclass[4]
      ].connections.splice(index_in, 1)
      this.dispatch('connectionRemoved', {
        output_id: listclass[2].slice(14),
        input_id: listclass[1].slice(13),
        outputClass: listclass[3],
        inputClass: listclass[4],
      })
      this.connectionSelected = null
    }
  }

  removeSingleConnection(
    idOutput: string,
    idInput: string,
    outputClass: string,
    inputClass: string
  ) {
    const nodeOneModule = this.getModuleFromNodeId(idOutput)
    const nodeTwoModule = this.getModuleFromNodeId(idInput)
    if (nodeOneModule === nodeTwoModule) {
      // Check nodes in same module.

      // Check connection exist
      const exists = this.drawflow.drawflow[nodeOneModule].data[
        idOutput
      ].outputs[outputClass].connections.findIndex(function (item, i) {
        return item.node == idInput && item.output === inputClass
      })
      if (exists > -1) {
        if (this.module === nodeOneModule) {
          // In same module with view.
          document
            .querySelector(
              '.connection.node_in_node-' +
                idInput +
                '.node_out_node-' +
                idOutput +
                '.' +
                outputClass +
                '.' +
                inputClass
            )
            .remove()
        }

        const index_out = this.drawflow.drawflow[nodeOneModule].data[
          idOutput
        ].outputs[outputClass].connections.findIndex(function (item, i) {
          return item.node == idInput && item.output === inputClass
        })
        this.drawflow.drawflow[nodeOneModule].data[idOutput].outputs[
          outputClass
        ].connections.splice(index_out, 1)

        const index_in = this.drawflow.drawflow[nodeOneModule].data[
          idInput
        ].inputs[inputClass].connections.findIndex(function (item, i) {
          return item.node == idOutput && item.input === outputClass
        })
        this.drawflow.drawflow[nodeOneModule].data[idInput].inputs[
          inputClass
        ].connections.splice(index_in, 1)

        this.dispatch('connectionRemoved', {
          output_id: idOutput,
          input_id: idInput,
          outputClass: outputClass,
          inputClass: inputClass,
        })
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  removeConnectionNodeId(id: string) {
    const idSearchIn = 'node_in_' + id
    const idSearchOut = 'node_out_' + id

    const elemsOut = this.container.querySelectorAll(`.${idSearchOut}`)
    for (let i = elemsOut.length - 1; i >= 0; i--) {
      const listclass = elemsOut[i].classList

      const index_in = this.drawflow.drawflow[this.module].data[
        listclass[1].slice(13)
      ].inputs[listclass[4]].connections.findIndex(function (item, i) {
        return (
          item.node === listclass[2].slice(14) && item.input === listclass[3]
        )
      })
      this.drawflow.drawflow[this.module].data[listclass[1].slice(13)].inputs[
        listclass[4]
      ].connections.splice(index_in, 1)

      const index_out = this.drawflow.drawflow[this.module].data[
        listclass[2].slice(14)
      ].outputs[listclass[3]].connections.findIndex(function (item, i) {
        return (
          item.node === listclass[1].slice(13) && item.output === listclass[4]
        )
      })
      this.drawflow.drawflow[this.module].data[listclass[2].slice(14)].outputs[
        listclass[3]
      ].connections.splice(index_out, 1)

      elemsOut[i].remove()

      this.dispatch('connectionRemoved', {
        output_id: listclass[2].slice(14),
        input_id: listclass[1].slice(13),
        outputClass: listclass[3],
        inputClass: listclass[4],
      })
    }

    const elemsIn = this.container.querySelectorAll(`.${idSearchIn}`)
    for (let i = elemsIn.length - 1; i >= 0; i--) {
      const listclass = elemsIn[i].classList

      const index_out = this.drawflow.drawflow[this.module].data[
        listclass[2].slice(14)
      ].outputs[listclass[3]].connections.findIndex(function (item, i) {
        return (
          item.node === listclass[1].slice(13) && item.output === listclass[4]
        )
      })
      this.drawflow.drawflow[this.module].data[listclass[2].slice(14)].outputs[
        listclass[3]
      ].connections.splice(index_out, 1)

      const index_in = this.drawflow.drawflow[this.module].data[
        listclass[1].slice(13)
      ].inputs[listclass[4]].connections.findIndex(function (item, i) {
        return (
          item.node === listclass[2].slice(14) && item.input === listclass[3]
        )
      })
      this.drawflow.drawflow[this.module].data[listclass[1].slice(13)].inputs[
        listclass[4]
      ].connections.splice(index_in, 1)

      elemsIn[i].remove()

      this.dispatch('connectionRemoved', {
        output_id: listclass[2].slice(14),
        input_id: listclass[1].slice(13),
        outputClass: listclass[3],
        inputClass: listclass[4],
      })
    }
  }

  getModuleFromNodeId(id: string | number) {
    let nameModule: string
    const editor = this.drawflow.drawflow
    Object.keys(editor).map(function (moduleName, index) {
      Object.keys(editor[moduleName].data).map(function (node, index2) {
        if (node == id) {
          nameModule = moduleName
        }
      })
    })
    return nameModule
  }

  addModule(name: string) {
    this.drawflow.drawflow[name] = { data: {} }
    this.dispatch('moduleCreated', name)
  }

  changeModule(name: string) {
    this.dispatch('moduleChanged', name)
    this.module = name
    this.precanvas.innerHTML = ''
    this.canvas_x = 0
    this.canvas_y = 0
    this.posX = 0
    this.posY = 0
    this.mouse_x = 0
    this.mouse_y = 0
    this.zoom = 1
    this.zoom_last_value = 1
    this.precanvas.style.transform = ''
    this.import(this.drawflow)
  }

  removeModule(name: string) {
    if (this.module === name) {
      this.changeModule('Home')
    }
    delete this.drawflow.drawflow[name]
    this.dispatch('moduleRemoved', name)
  }

  clearModuleSelected() {
    this.precanvas.innerHTML = ''
    this.drawflow.drawflow[this.module] = { data: {} }
  }

  clear() {
    this.precanvas.innerHTML = ''
    this.drawflow = { drawflow: { Home: { data: {} } } }
  }
  export() {
    const dataExport = JSON.parse(JSON.stringify(this.drawflow))
    this.dispatch('export', dataExport)
    return dataExport
  }

  import(data: ContainerDrawFlow) {
    this.clear()
    this.drawflow = JSON.parse(JSON.stringify(data))
    this.load()
    this.dispatch('import', 'import')
  }

  /* Events */
  on(event: keyof HTMLElementEventMap, callback: (...args: unknown[]) => void) {
    console.log(event, callback)

    // Check if the callback is not a function
    if (typeof callback !== 'function') {
      console.error(
        `The listener callback must be a function, the given type is ${typeof callback}`
      )
      return false
    }

    // Check if the event is not a string
    if (typeof event !== 'string') {
      console.error(
        `The event name must be a string, the given type is ${typeof event}`
      )
      return false
    }

    // Check if this event not exists
    if (this.events[event] === undefined) {
      this.events[event] = {
        listeners: [],
      }
    }

    this.events[event].listeners.push(callback)
  }

  removeListener(
    event: keyof HTMLElementEventMap,
    callback: (...args: unknown[]) => void
  ) {
    // Check if this event not exists
    if (this.events[event] === undefined) {
      //console.error(`This event: ${event} does not exist`);
      return false
    }

    this.events[event].listeners = this.events[event].listeners.filter(
      (listener) => {
        return listener.toString() !== callback.toString()
      }
    )
  }

  dispatch(event: string, details: any) {
    // Check if this event not exists
    if (this.events[event] === undefined) {
      // console.error(`This event: ${event} does not exist`);
      return false
    }

    this.events[event].listeners.forEach((listener) => {
      listener(details)
    })
  }

  getUuid() {
    // http://www.ietf.org/rfc/rfc4122.txt
    const s = []
    const hexDigits = '0123456789abcdef'

    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }

    s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-'

    const uuid = s.join('')
    return uuid
  }
}
