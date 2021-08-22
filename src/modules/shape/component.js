import { random } from '../../utils'
import { colores } from './colores'

export default class Component {
    static count = 0

    #selector
    #body

    /**
     *
     * @param body
     * @param selector id - тега  div и класс фигуры в  css (в данном случае  figure)
     */
    constructor(body, selector) {
        this.#selector = `${selector}${Component.count + 1}`
        this.#body = body
        this.$div = document.createElement('div')
        this.$div.classList.add(selector)
        this.$div.id = this.#selector
        this.$div.style.position = 'absolute'
        this.$div.style.background = colores[Math.round(random(0,colores.length - 1))]
        this.$div.style.transition = '1s ease'
        this.$div.style.boxShadow = `0 0 2px ${this.$div.style.background}, 0 0 10px ${this.$div.style.background}`
        this.#body.append(this.$div)
        this.$el = document.querySelector(`#${this.#selector}`)
        Component.count++

        setTimeout(() => {
            this.$el.remove()
        },2000)
    }

}