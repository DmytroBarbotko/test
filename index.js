let numberOfFilms;

function start() {
  numberOfFilms = prompt("How many movies have you already watched?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("How many movies have you already watched?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("You have watched not many films");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Not bad!");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are insane");
  } else {
    console.log("Error");
  }
}

// detectPersonalLevel();

/* my attempt
function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

showMyDB(); */

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Your favorite genre is number ${i}`
    );
  }
}

writeYourGenres();
