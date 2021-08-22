import { MessageComponent } from './messageComponent'

export class MessageBlock  extends  MessageComponent {
    constructor(body,option) {
        super(body, option.selector)
        this.$el.textContent = option.text

    }
}