import Component from './component'

export class Oval extends Component {
    constructor(body,option) {
        super(body, option.selector)

        this.$el.style.width = (option.size * 2) + 'px'
        this.$el.style.height =  option.size + 'px'
        this.$el.style.borderRadius = `${option.size}px/${option.size / 2}px`
        this.$el.style.top = option.top + 'px'
        this.$el.style.left = option.left + 'px'
    }
}
