import { BURN } from './actions/index.js'
import store from './store.js'


store.subscribe(() => {
  window.result.textContent = `You've burned ${store.getState().burnedCalories.toFixed(2)} calories`
  window.pizza.textContent = `${store.getState().pizzaCalories.toFixed(2)} calories left to burn a 🍕`
})

const burnCalories = () => {
  store.dispatch({
    type: BURN,
    payload: 1.24
  })
}

window.burn.addEventListener('click', burnCalories)