function renderElement(movie) {
  const element = buildElement(movie)

  window.container.append(element)
}

function buildElement({ title, poster_path, vote_average, id, recommended }) {

  const template = `
  <article class="movie ${recommended ? 'recommended' : ''}">
    <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="">
    <p class="movie-title">${title}</p>
    <p class="movie-id">${id}</p>
    <span class="movie-rate">${vote_average}</span>
  </article>
`
  const movie = document.createElement('div')
  movie.innerHTML = template

  return movie.firstElementChild
}

function cleanMovies() {
  window.container.innerHTML = ''
}

export default function renderMovies(list) {
  // console.table(list, ['id', 'title', 'poster_path', 'vote_average'])
  cleanMovies()
  list.forEach(renderElement)
}

export function renderMoviesFromMap(list, map) {
  cleanMovies()
  list.forEach(idMovie => renderElement(map.get(idMovie)))
}