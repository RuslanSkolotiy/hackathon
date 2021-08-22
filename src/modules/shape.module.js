import {Module} from '../core/module'
import { random } from '../utils'
import { Figuras } from './shape/figuras'

export class ShapeModule extends Module {
    #body
    constructor(type, text) {
        super(type, text)
        this.#body = document.querySelector('body')
    }

    createRandomFigure() {
        const  {height, width} = this.#body.getBoundingClientRect()
        let randomPequeno = random(10,50)

        const x = random(0, width - randomPequeno)
        const y = random(0, height - randomPequeno)


        const shape = new Figuras()
        const typeShape = Math.round(random(0, Figuras.list.length - 1))

        shape.create(this.#body, {
            selector: 'figure',
            size: randomPequeno,
            top: y,
            left: x
        }, typeShape)

    }

    trigger(event) {
        this.createRandomFigure()
    }

}