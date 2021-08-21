export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function createElementByHtml(html) {
  let template = document.createElement("template")
  template.innerHTML = html
  return template.content.firstElementChild
}