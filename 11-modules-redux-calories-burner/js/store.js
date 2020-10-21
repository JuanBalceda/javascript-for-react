import { createStore } from './redux/index.js'
import reducer from './reducers/index.js'

const initialState = {
  burnedCalories: 0,
  pizzaCalories: 1835000.00
}

const store = createStore(reducer, initialState)

export default store