import {ColorClassList} from './colorClassList'
import {random} from "../../utils";

export class MessageComponent {
    static count = 0

    #selector
    #body

    constructor(body, selector) {
        this.#selector = `${selector}${MessageComponent.count + 1}`
        this.#body = body
        this.$el = document.querySelector(`#${this.#selector}`)
        this.$div = document.createElement('div')
        this.$div.role = 'alert'
        this.newColorBlock(`${ColorClassList[Math.round(random(0,ColorClassList.length - 1))]}`)
        this.$div.style.display = 'inline-block'
        this.$div.position = 'relative' //'absolute' //'relative'
        //this.$div.zIndex = `${MessageComponent.count * 2}`

        this.$div.style.top = '0px'
        this.$div.style.left = '0px'

        this.$div.id = this.#selector
        this.#body.append(this.$div)
        this.$el = document.querySelector(`#${this.#selector}`)
        MessageComponent.count++

        this.newTime(4000)
        console.log('this.time', this.time)
    }

    newColorBlock(className) {
        this.$div.classList.add('alert', className)
    }

    newTime(time) {
        this.time = setTimeout(() => {

            this.$el.remove()
            MessageComponent.count--
            console.log('MessageComponent.count', MessageComponent.count)
        },time)

    }
}