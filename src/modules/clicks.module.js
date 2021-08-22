import { Module } from "../core/module"

export class ClicksModule extends Module {
    #body
    #counter = 0
    #doubleCounter = 0
    #time

    #onClick
    #onDoubleClick

    #el

    constructor(type, text) {
        super(type, text)
    
        this.#body = document.querySelector("body")

        this.#onClick = (() => {
            this.#counter++
        }).bind(this)

        this.#onDoubleClick = (() => {
            this.#doubleCounter++
        }).bind(this)

        let div = document.createElement("div")
        div.className = "counter__container"
       
        this.#el = div
        this.#body.append(div)
    }

    trigger(event) {
        this.reset()
        this.#el.innerHTML = `Let's click!`
        this.clickCounter()
    }

    reset() {
        this.#counter = 0
        this.#doubleCounter = 0
        this.#time = 5
    }

    clickCounter() {
        let timer = setInterval(() => {
            if (this.#time > 0) {
                this.#el.innerHTML = this.#time
            } else {
                this.#el.innerHTML = `Количество кликов <br>
                одинарных: ${this.#counter}<br>
                двойных: ${this.#doubleCounter}`

                clearInterval(timer)
                window.removeEventListener("click", this.#onClick)
                window.removeEventListener("dblclick", this.#onDoubleClick)
            }
            --this.#time
        }, 1000)

        setTimeout(() => {
            window.addEventListener("click", this.#onClick)
            window.addEventListener("dblclick", this.#onDoubleClick)
        }, 0)

        
    }
}
