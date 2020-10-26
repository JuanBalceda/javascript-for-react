import movies from './movies.js'
import render from './render.js'

const $form = window['search-form']

$form.addEventListener('submit', function(event) {
  event.preventDefault()

  const formData = new FormData(this)
  const title = formData.get('title')
  const movies = filterByTitle(title)
  render(movies)
})

function filterByTitle(title) {
  return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase().trim()))
}