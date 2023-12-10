const numberOfFilms = +prompt("How many movies have you already watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const lastFilms = prompt("What was the last film you watched ?", ""),
    assessment = prompt("How would you rate this?", "");

  if (
    (lastFilms != null) & (assessment != null) &&
    lastFilms != "" &&
    assessment != "" &&
    lastFilms.length < 50
  ) {
    personalMovieDB.movies[lastFilms] = assessment;
    console.log("done");
  } else {
    console.log("Try once again");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("You have watched not many films");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log("Not bad!");
} else if (personalMovieDB.count >= 30) {
  console.log("You are insane");
} else {
  console.log("Error");
}

console.log(personalMovieDB);
