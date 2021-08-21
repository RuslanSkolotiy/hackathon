import {Module} from '../core/module'
import { random } from "../utils"

export class BackgroundModule extends Module {
    #letters

    constructor(type, text) {
        super(type, text)
        this.#letters = "0123456789ABCDEF"
        this.el = document.body
    } 

    getRandomColors() {
        this.#letters.split('')
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += this.#letters[Math.floor(Math.random() * 16)]
        }
        return color
    }



    trigger(event) {
        // set random background color
        this.el.style.background = this.getRandomColors()
    }
}