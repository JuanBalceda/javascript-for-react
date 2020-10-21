import { BURN } from '../actions/index.js'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case BURN:
      state.burnedCalories += payload
      if (state.pizzaCalories - payload > 0) {
        state.pizzaCalories -= payload
      } else {
        state.pizzaCalories = 0
      }
      return state
    default:
      return state
  }
}

export default reducer