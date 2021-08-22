import { Menu } from "./core/menu"
import { Module } from "./core/module"
import { createElementByHtml } from "./utils"

export class ContextMenu extends Menu {
    #mudules = []

    constructor(selector) {
        super(selector)
        document.addEventListener("contextmenu", this.#onContextmenu.bind(this))
        this.el.addEventListener("click", this.#onItemClick.bind(this))
    }

    open({ x, y }) {
        if (!this.#mudules.length) return
        this.el.style.display = "block"
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
        event.preventDefault()
        this.open({ x: event.clientX, y: event.clientY })
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
}
