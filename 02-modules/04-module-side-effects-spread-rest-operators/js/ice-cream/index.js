import makeIceCream from './machine.js'

const $flavors = document.querySelectorAll('.flavor')
$flavors.forEach($el => $el.addEventListener('click', function () {
  this.classList.toggle('is-active')
}))

window.btn.addEventListener('click', () => {
  const $flavors = document.querySelectorAll('.flavor.is-active')
  try {
    makeIceCream([...$flavors])
  } catch (error) {
    alert('Please, select two flavors')
  }
})