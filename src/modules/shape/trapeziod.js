import Component from './component'

export class Trapeziod extends Component {
    constructor(body,option) {
        super(body, option.selector)

        this.$el.style.marginLeft = `${option.size * 0.2}`
        this.$el.style.width =  (option.size / 2 + option.size) + 'px'
        this.$el.style.height = option.size + 'px'
        this.$el.style.transform = 'skew(20deg)'

        this.$el.style.top = option.top + 'px'
        this.$el.style.left = option.left + 'px'
    }
}
