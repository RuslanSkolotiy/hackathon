import { Module } from '../core/module'
import { Modal } from "bootstrap"


export class TimerModule extends Module {
	#timerId
	#timer
	#modalElStart
	#modalElFinish
	#timerEl
	#timerBlock
	
	constructor(type, text) {
		super(type, text)
		this.#modalElStart = null
		this.#modalElFinish = null
		this.#timerEl = null
		this.#timerBlock = null
		this.#timerId = null
		this.#timer = null
	}

	trigger() {
		this.#init()
		this.#modalControl()
	}

	#init() {
		this.#modalElStart = this.#createModalStart()
		this.#timerEl = this.#createTimerEl()
		this.#modalElFinish = this.#createModalFinish()
	}

	#modalControl() {
		const modalStart = this.#addElementToHTML(this.#modalElStart, true)
		const input = this.#modalElStart.querySelector('input')

		document.querySelector('.modal__timer').addEventListener('click', (e) => {

			if (e.target.closest('#start')) {
				if ( input.value > 0 ) {
					this.#timer = input.value
					this.#removeElementToHtml(this.#modalElStart, modalStart)
					this.#timerControl()
				} else {
					this.#showError('Число должно быть больше нуля')
				}	
			}

			if (e.target.closest('.btn-close') || e.target.closest('.btn-secondary') || !e.target.closest('.modal-content')) {
				this.#removeElementToHtml(this.#modalElStart, modalStart)
			}
		})
	}

	#timerControl() {
		this.#addElementToHTML(this.#timerEl)
		this.#timerBlock = this.#timerEl.querySelector('p')
		this.#timerBlock.textContent = this.#getTime(this.#timer)
		
		this.#timerId = setInterval(this.#timerStart.bind(this), 1000)
	}

	#timerStart() {
		this.#timer -= 1
		this.#timerBlock.textContent = this.#getTime(this.#timer)
		
		if (this.#timer === 0) {
			clearInterval(this.#timerId)
			this.#removeElementToHtml(this.#timerEl)
			this.#showModalFinish()
		}
	}

	#showError(text) {
		const errorBlock = this.#modalElStart.querySelector('.modal-body')

		if (!errorBlock.querySelector('.text-danger')) {
			errorBlock.prepend(this.#createError(text))
		}
	}

	#showModalFinish() {
		const modalFinish = this.#addElementToHTML(this.#modalElFinish, true)

		setTimeout( () => {
				this.#removeElementToHtml(this.#modalElFinish, modalFinish)
		}, 2000)
	}

	#getTime(time) {
		const minutes = Math.floor(time / 60)
		const seconds = time % 60

		const min = `${minutes < 10 ? `0${minutes}` : `${minutes}`}`
		const sec = `${seconds < 10 ? `0${seconds}` : `${seconds}`}`

		return `${min}:${sec}`
	}

	#addElementToHTML(el, modal = false) {
		document.body.append(el)

		if (modal) {
			const element = new Modal(el)
			element.show()
			return element
		}
	}

	#removeElementToHtml(el, modal = false) {
		if (modal) {
			modal.hide()
		}

		el.remove()
	}

	#createTimerEl() {
		const timerEl = document.createElement('div')
		timerEl.classList.add('card', 'w-25');
		timerEl.innerHTML = `<div class="card-body">
			<h6 class="card-title">Отсчет времени</h6>
			<p class="card-text h5"></p>
		</div>`

		return timerEl
	}

	#createModalFinish() {
		const modal = document.createElement('div');
		modal.classList.add('modal');
		modal.innerHTML = `<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Отсчет закончен</h5>
			</div>
			<div
		</div>`

		return modal
	}

	#createError(text) {
		const err = document.createElement('p')
		err.classList.add('text-danger')
		err.textContent = text

		return err
	}

	#createModalStart() {
		const modal = document.createElement('div')
		modal.classList.add('modal', 'modal__timer')
		modal.tabindex = "-1"
		modal.innerHTML = `<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Введите значение в секундах</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<input class="form-control" type="number" min="0" placeholder="Значение в секундах" aria-label="default input example">
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отменить</button>
				<button type="button" class="btn btn-primary" id="start">Запустить</button>
			</div>
			</div>
		</div>`

		return modal
	}
}