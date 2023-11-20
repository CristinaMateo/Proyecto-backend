// FUNCIÓN COGER DETALLES DE CADA PELÍCULA Y PINTARLO:
function viewDetails() {
  let = document.querySelector();

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=titanic&api_key=1b1d8ac19d2157bc278dad11d08b1894/${
      (poster_path, title, vote_average)
    }`,
    {
      method: "PUT",
      body: JSON({}),
    }
  );

  fetch(
    `https://api.themoviedb.org/3/movie/179533/credits?&api_key=03ce75d14fd1010ba46c32378b9f079a /${director}`
  )
    .then((response) => response.json())
    .then((post) => {});
  fetch(
    `https://api.themoviedb.org/3/movie/179533?&api_key=03ce75d14fd1010ba46c32378b9f079a/${runtime}`
  )
    .then((response) => response.json())
    .then((post) => {});
}
