import rawMovies from './movies.js'

const moviesMap = rawMovies.reduce((map, movie) => {
  map.set(movie.id, movie)
  return map
}, new Map())

const all = rawMovies.map(movie => movie.id)

const mostValued = rawMovies.reduce((list, movie) => {
  if (movie.vote_average > 7) {
    list.push(movie.id)
  }
  return list
}, [])

const leastValued = rawMovies.reduce((list, movie) => {
  if (movie.vote_average <= 7) {
    list.push(movie.id)
  }
  return list
}, [])

export {
  moviesMap,
  all,
  mostValued,
  leastValued
}