import { renderMoviesFromMap } from './render.js'
import {
  all,
  mostValued,
  leastValued, 
  moviesMap
} from './normalize.js'

window.filter.addEventListener('change', function (event) {
  console.log(this.value)
  switch (this.value) {
    case 'most-valued':
      return renderMoviesFromMap(mostValued, moviesMap)
    case 'least-valued':
      return renderMoviesFromMap(leastValued, moviesMap)
    default:
      return renderMoviesFromMap(all, moviesMap)
  }
})