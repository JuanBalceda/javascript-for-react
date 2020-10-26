import movies from './movies.js'
import render from './render.js'

const $button = window.recommended
// const $button = document.querySelector('#document')
// const $button = document.getElementById('document')

$button.addEventListener('click', () => {
  render(setRecommendedMovies(movies))
})

function setRecommendedMovies(movies) {
  return movies.map(movie => {
    return { ...movie, recommended: movie.vote_average > 7 }
  })
}