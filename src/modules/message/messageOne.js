import { MessageBlock } from './messageBlock'
import { MessageComponent } from './messageComponent'
import {ColorClassList} from './colorClassList'

import {random} from "../../utils";

export class MessageOne {
    static timeID = 0
    create(body, selector) {
        if(MessageComponent.count === 0) {
            const message = new MessageBlock(body,selector)
            MessageOne.timeID = message.time
            console.log('MessageOne.timeID', MessageOne.timeID)
        } else {
            const f = body.querySelector('.alert')
            f.className  = `alert ${ColorClassList[Math.round(random(0,ColorClassList.length - 1))]}`
        }
    }
}