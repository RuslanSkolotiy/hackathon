import {Module} from '../core/module'
import { MessageOne } from './message/messageOne'

export class MessageModule extends Module {
    #body

    constructor(type, text) {
        super(type, text)
        this.#body = document.querySelector('body')
    }

    createRandomBlockMessage() {

        const m = new MessageOne()
        m.create(this.#body,{
            selector: 'message',
            text: 'Привет! Я кастомное сообщение. Скоро я исчезну)'
        })

    }

    trigger(event) {
        this.createRandomBlockMessage()
    }
}