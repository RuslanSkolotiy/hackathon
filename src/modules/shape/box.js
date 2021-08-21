import Component from './component'

export class Box extends Component {
    constructor(body,option) {
        super(body, option.selector)

        this.$el.style.width = this.$el.style.height =  option.size + 'px'
        this.$el.style.top = option.top + 'px'
        this.$el.style.left = option.left + 'px'
    }
}