import { Module } from "../core/module"

export class ClicksModule extends Module {
    #body
    #counter
    #time
    constructor(type, text) {
        super(type, text)
        this.#counter = 0
        this.#time = 5
        this.#body = document.querySelector("body")
    }

    trigger(event) {
        this.clickCounter()
    }

    clickCounter() {
        let timer = setInterval(() => {
            if (this.#time > 0) {
                div2.innerHTML = this.#time
            } else {
                div2.innerHTML = `Количество кликов: ${this.#counter}`
                clearTimeout(timer)
            }
            --this.#time
        }, 1000)

        window.addEventListener("click", () => {
            return this.#counter++
        })
        window.addEventListener("dblclick", () => {
            return (this.#counter = this.#counter + 1 - 2)
        })

        let div2 = document.createElement("div")
        div2.className = "counter__container"
        div2.innerHTML = `Let's click!`
        this.#body.append(div2)
    }
}
