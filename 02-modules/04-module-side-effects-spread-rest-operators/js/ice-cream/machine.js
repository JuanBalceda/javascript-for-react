import { isRequired } from '../util/validations.js'
function makeIceCream([flavor1 = isRequired('flavor1'), flavor2 = isRequired('flavor2'), ...otherFlavors]) {

  const toppings = otherFlavors.map((f) => f.dataset.flavor)
  const toppingsMessage = (toppings?.length > 0) ? `Toppings: ${toppings}` : ''

  alert(`Your ${flavor1.dataset.flavor} and ${flavor2.dataset.flavor} ice cream is ready! ${toppingsMessage}`)
}

export default makeIceCream