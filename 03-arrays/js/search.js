import movies from './movies.js'
import render from './render.js'

const $form = window['search-form']

$form.addEventListener('submit', function (event) {
  event.preventDefault()

  const formData = new FormData(this)
  const query = formData.get('title')
  const movies = searchMovie(query)
  if (movies) {
    return render(movies)
  }

  return alert('Movie not found')
})

function filterByTitle(title) {
  return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase().trim()))
}

function filterById(id) {
  return movies.find(movie => movie.id === parseInt(id, 10))
}

function searchMovie(query) {
  if (isNaN(query)) {
    return filterByTitle(query)
  } else {
    return [filterById(query)]
  }
}