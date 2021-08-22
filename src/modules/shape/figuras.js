import { Box } from './box'
import { Oval } from './oval'
import { Circle } from './circle'

export class Figuras {
    static list = [
         Box,
         Oval,
         Circle
    ]

    create(body,option, type = 0) {
        const Figura = Figuras.list[type] || Figuras.list[0]
        const shape = new Figura(body,option)
        shape.type = type

        return shape
    }
}