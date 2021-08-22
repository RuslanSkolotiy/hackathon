import { Box } from './box'

export class Circle extends Box{
    constructor(body,option) {
        super(body, option)
        this.$el.style.borderRadius = '50%'
    }
}