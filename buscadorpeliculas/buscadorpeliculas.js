document.getElementById("searchButton").addEventListener("click", searchMovies);

let APIKEY = "f18a7fc1bd256125ef75910fe416684b";
let url = "https://api.themoviedb.org/3/search/movie";
let urlIMG = "https://image.tmdb.org/t/p/w500";

let resultContainer = document.getElementById("results");

function searchMovies() {
  resultContainer.innerHTML = "Cargando...";
  let buscarPelicula = document.getElementById("searchInput").value;
  fetch(`${url}?query=${buscarPelicula}&api_key=${APIKEY}`)
    .then((response) => response.json())
    .then((response) => displayMovies(response.results));
}

function displayMovies(response) {
  resultContainer.innerHTML = "";

  if (response.length === 0) {
  resultContainer.innerHTML = "";
    resultContainer.innerHTML =
      "<p>No se encontraron resultados para tu búsqueda</p>";
    return;
  }

  response.forEach((movie) => {
    let movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    let title = document.createElement("h2");
    title.textContent = movie.title;

    let releaseDate = document.createElement("p");
    releaseDate.textContent =
      "la fecha de lanzamiento fue: " + movie.release_date;

    let overview = document.createElement("p");
    overview.textContent = movie.overview;

    let posterPath = `${urlIMG}${movie.poster_path}`;
    let poster = document.createElement("img");
    poster.src = posterPath;

    movieDiv.appendChild(poster);
    movieDiv.appendChild(title);
    movieDiv.appendChild(releaseDate);
    movieDiv.appendChild(overview);
    resultContainer.appendChild(movieDiv);
  });
}
