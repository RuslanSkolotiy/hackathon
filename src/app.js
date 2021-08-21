import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./styles.css"
import { ContextMenu } from "./menu"
import { BackgroundModule } from "./modules/background.module"
import { ClicksModule } from "./modules/clicks.module"
import { ShapeModule } from "./modules/shape.module"
import { SoundModule } from "./modules/sound.module"
import { CatModule } from "./modules/cat.module"

let menu = new ContextMenu("#menu")
menu.add(new BackgroundModule(1, "Случайный фон"))
menu.add(new ClicksModule(2, "Аналитика кликов"))
menu.add(new ShapeModule(3, "Случайная фигура"))
menu.add(new SoundModule(4, "Случайный звук"))
menu.add(new CatModule(5, "Показать котика"))

