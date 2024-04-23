// api 키 f2d479608e14239eabe7aa68c8ed145f
// api 읽기 엑세스 토큰 eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmQ0Nzk2MDhlMTQyMzllYWJlN2FhNjhjOGVkMTQ1ZiIsInN1YiI6IjY2MjcwNzRmMmRkYTg5MDE4N2U0NWFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E20d8N0N0gg-zMHnAxjXvz6vV51ClYT-dZsc5lYY25g

async function getMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmQ0Nzk2MDhlMTQyMzllYWJlN2FhNjhjOGVkMTQ1ZiIsInN1YiI6IjY2MjcwNzRmMmRkYTg5MDE4N2U0NWFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E20d8N0N0gg-zMHnAxjXvz6vV51ClYT-dZsc5lYY25g",
    },
  };

  const json = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing",
    options
  )
    .then((response) => response.json())
    .then((res) => console.log(res.results));
}
getMovies();
