let inputText = document.getElementById('searchInput');

let buttonSearch = document.getElementById('searchButton');

let buttonRemove = document.getElementById('remove')

let divResults = document.getElementById('results');

let api_key = 'c35f6c6e915c404b90e06fe7568da9b1'
let url_base = 'https://api.themoviedb.org/3/search/movie';
let urlImg = 'https://image.tmdb.org/t/p/w200'

buttonSearch.addEventListener('click', searchMovies)
buttonRemove.addEventListener('click', () => {
    divResults.innerHTML = ''
    inputText.value = ''
})

function searchMovies(movies) {
    divResults.innerHTML = '<h3>Loading....</h3>'
    fetch(`${url_base}?query=${inputText.value}&api_key=${api_key}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results))
}

function displayMovies(movies) {
    divResults.innerHTML = ''

    if (movies.length === 0) {
        divResults.innerHTML = '<h2>No se encontro la peliculas que buscas.</h2>'
        divResults.style.color = 'white'
        return
    }

    movies.forEach(movie => {
        console.log(movie)
        let divContent = document.createElement('div')
        divContent.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title
        
        let release = document.createElement('p')
        release.textContent = `EL año del lanzamiento es: ${movie.release_date}`

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        
        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath
        

        divContent.appendChild(poster)
        divContent.appendChild(title)
        divContent.appendChild(release)
        divContent.appendChild(overview)

        divResults.appendChild(divContent)
        divContent.style.color = 'black'
    })
}