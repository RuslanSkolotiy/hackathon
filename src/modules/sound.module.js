import { Module } from "../core/module"
import { random } from "../utils"
import sound1 from "./sounds/1.wav"
import sound2 from "./sounds/2.wav"
import sound3 from "./sounds/3.wav"
import sound4 from "./sounds/4.wav"
import sound5 from "./sounds/5.wav"
import sound6 from "./sounds/6.wav"
import sound7 from "./sounds/7.wav"

export class SoundModule extends Module {
    #library = []

    constructor(type, text) {
        super(type, text)
        this.#library = [sound1, sound2, sound3, sound4, sound5, sound6, sound7]
    }

    trigger(event) {
        // Play random sound
        let randomSoundIndex = random(0, this.#library.length - 1)
        var audio = new Audio(this.#library[randomSoundIndex])
        audio.play()
    }
}
