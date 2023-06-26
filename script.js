const input = document.querySelector('input')
const button = document.querySelector('button')
const main = document.querySelector('main')

button.addEventListener('click', () => {
  const newElement = document.createElement('div')
  newElement.classList.add('compra')
  if (input.value) {
    newElement.textContent = input.value
    main.appendChild(newElement)
    input.value = ''
  }
})

main.addEventListener('click', event => {
  const selectedElement = event.target
  selectedElement.remove()
})
