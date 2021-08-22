import {Module} from '../core/module'
import { MessageBlock } from './message/messageBlock'
import { MessageComponent } from './message/messageComponent'
import { MessageOne } from './message/messageOne'



export class MessageModule extends Module {

    #body

    constructor(type, text) {
        super(type, text)
        this.#body = document.querySelector('body')
    }

    createRandomBlockMessage() {




        // const message = new MessageBlock(this.#body,{
        //     selector: 'message',
        //     text: 'Привет! Я кастомное сообщение. Скоро я исчезну)'
        // })

        const m = new MessageOne()
        m.create(this.#body,{
            selector: 'message',
            text: 'Привет! Я кастомное сообщение. Скоро я исчезну)'
        })


        console.log('MessageComponent.count',MessageComponent.count);

    }

    trigger(event) {
        this.createRandomBlockMessage()
    }
}