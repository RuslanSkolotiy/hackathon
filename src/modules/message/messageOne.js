import { MessageBlock } from './messageBlock'
import { MessageComponent } from './messageComponent'
import {ColorClassList} from './colorClassList'

import {random} from "../../utils";

export class MessageOne {
    create(body, selector) {
        if(MessageComponent.count === 0) {
            const message = new MessageBlock(body,selector)
        } else {
            const f = body.querySelector('.alert')
            f.className  = `alert ${ColorClassList[Math.round(random(0,ColorClassList.length - 1))]}`
        }
    }
}