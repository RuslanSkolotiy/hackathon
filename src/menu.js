import { Menu } from "./core/menu"
import { Module } from "./core/module"
import { createElementByHtml } from "./utils"

export class ContextMenu extends Menu {
    #mudules = []
    #touchTimer

    constructor(selector) {
        super(selector)
        document.addEventListener("contextmenu", this.#onContextmenu.bind(this))
        document.addEventListener("touchstart", this.#onTouchstart.bind(this))
        document.addEventListener("touchend", this.#onTouchend.bind(this))
        this.el.addEventListener("click", this.#onItemClick.bind(this))
    }

    open({ x, y }) {
        console.log('this.el', this.el)

        if (!this.#mudules.length) return
        this.el.style.display = "block"

        let maxX =
            document.body.getBoundingClientRect().width -
            this.el.getBoundingClientRect().width
        let maxY =
            document.body.getBoundingClientRect().height -
            this.el.getBoundingClientRect().height

        if (x > maxX) x = maxX
        if (y > maxY) y = maxY

        this.el.style.left = x + "px"
        this.el.style.top = y + "px"
    }

    close() {
        this.el.style.display = "none"
    }

    add(module) {
        if (!(module instanceof Module))
            throw new Error(`module must instanceof Module`)
        this.#mudules.push(module)
        this.el.append(createElementByHtml(module.toHTML()))
    }

    #onContextmenu(event) {
        if (event.target.nodeName === "BODY") {
            event.preventDefault()
            this.open({ x: event.clientX, y: event.clientY })
        }
    }

    #onItemClick(event) {
        let type = event.target.dataset.type
        this.#mudules
            .find((item) => {
                return item.type == type
            })
            .trigger(event)
        this.close()
    }

    #onTouchstart(event) {
        if (event.target.nodeName === "BODY") {
            let clientX = event.touches[0].clientX
            let clientY = event.touches[0].clientY
            this.#touchTimer = setTimeout(() => {
                this.open({ x: clientX, y: clientY })
            }, 1000)
        }
    }

    #onTouchend(event) {
        clearTimeout(this.#touchTimer)
    }
}
