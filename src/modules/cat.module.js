import { Module } from "../core/module"
import { createElementByHtml } from "../utils"
import { Modal } from "bootstrap"

export class CatModule extends Module {
    #img
    #nextButton
    #loading

    constructor(type, text) {
        super(type, text)
        this.el = createElementByHtml(
            this.#template({ title: "Случайный котик" })
        )

        this.#nextButton = this.el.querySelector(".show-next")
        this.#img = this.el.querySelector(".cat-image")
        this.#loading = this.el.querySelector(".cat-loading")

        this.#nextButton.addEventListener(
            "click",
            this.#onNextCatClick.bind(this)
        )

        document.querySelector("body").append(this.el)
        this.modal = new Modal(this.el)
    }

    trigger(event) {
        // Show popup
        this.modal.show()
        this.showRandomCat()
    }

    showRandomCat() {
        //Hide image show loading
        this.#img.classList.add("d-none")
        this.#loading.classList.remove("d-none")
        //Disable next button
        this.#nextButton.setAttribute("disabled", "disabled")

        this.#getCarFromApi()
            .then((url) => {
                this.#img.setAttribute("src", url)
                this.#img.onload = () => {
                    //Hide loading show image
                    this.#img.classList.remove("d-none")
                    this.#loading.classList.add("d-none")
                    //Enable next button
                    this.#nextButton.removeAttribute("disabled")
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    async #getCarFromApi() {
        const url = "https://api.thecatapi.com/v1/images/search"
        let result = await fetch(url)
        let data = await result.json()
        let imageUrl = data?.[0]?.url

        if (!imageUrl) throw new Error("Image not find")
        return imageUrl
    }

    #onNextCatClick() {
        this.showRandomCat()
    }

    #template({ title }) {
        return `
        <div class="modal fade" aria-hidden="true" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex justify-content-center">
                        <div class="spinner-border text-primary d-none cat-loading" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <img class="img-fluid img-thumbnail cat-image d-none">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary show-next">Показать другого котика</button>
                    </div>
                </div>
            </div>
        </div>
      `
    }
}
