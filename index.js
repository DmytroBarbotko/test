const numberOfFilms = +prompt("How many movies have you already watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilms = prompt("What was the last film you watched ?", ""),
  assessment = prompt("How would you rate this?", ""),
  lastFilmsSecond = prompt("What was the last film you watched ?", ""),
  assessmentSecond = prompt("How would you rate this?", "");

personalMovieDB.movies[lastFilms] = assessment;
personalMovieDB.movies[lastFilmsSecond] = assessmentSecond;

console.log(personalMovieDB);
