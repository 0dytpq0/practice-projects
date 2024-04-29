class Movies {
  #movies;

  constructor() {
    this.#movies = new Map();
  }

  async initialize() {
    await this.#fetchMovieInfo();
    this.#renderMovieCards(this.#movies);
  }

  getMoviesInfo() {
    return this.#movies;
  }

  async #fetchMovieInfo() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmQ0Nzk2MDhlMTQyMzllYWJlN2FhNjhjOGVkMTQ1ZiIsInN1YiI6IjY2MjcwNzRmMmRkYTg5MDE4N2U0NWFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E20d8N0N0gg-zMHnAxjXvz6vV51ClYT-dZsc5lYY25g",
      },
    };

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        options
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      this.#parseMovieData(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  }

  #parseMovieData(results) {
    results.forEach((element) => {
      this.#movies.set(element.poster_path, {
        overview: element.overview,
        title: element.title,
        poster_path: element.poster_path,
      });
    });
  }

  #renderMovieCards(movies) {
    const container = document.getElementById("movie-list");
    container.innerHTML = "";
    movies.forEach((value) => {
      const card = document.createElement("div");
      card.classList.add("movie-card");

      const posterImg = document.createElement("img");
      posterImg.src = `https://image.tmdb.org/t/p/w500${value.poster_path}`;
      posterImg.alt = value.title;
      posterImg.classList.add("movie-poster");

      const title = document.createElement("h2");
      title.textContent = value.title;
      title.classList.add("movie-title");

      const overview = document.createElement("p");
      overview.textContent = value.overview;
      overview.classList.add("movie-overview");

      card.appendChild(posterImg);
      card.appendChild(title);
      card.appendChild(overview);

      container.appendChild(card);
    });
  }

  searchMovies(keyword) {
    const filteredMovies = new Map();
    let isShowing = false;
    this.#movies.forEach((movie, poster_path) => {
      if (movie.title.toLowerCase().includes(keyword.toLowerCase())) {
        //같은 이름의 다른 영화가 있더라도 데이터가 덮어 씌어진다.
        filteredMovies.set(poster_path, movie);
        isShowing = true;
      }
    });
    if (isShowing === false) alert("해당 영화는 현재 상영중이지 않습니다.");
    if (filteredMovies.size === 0) return this.#renderMovieCards(this.#movies);

    return this.#renderMovieCards(filteredMovies);
  }
}

const movies = new Movies();
movies.initialize();

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
searchInput.addEventListener("keyup", (e) => {
  const keyword = e.target.value;
  if (e.keyCode === 13) {
    movies.searchMovies(keyword);
  }
});

searchButton.addEventListener("click", (e) => {
  const keyword = searchInput.value;

  movies.searchMovies(keyword);
});
