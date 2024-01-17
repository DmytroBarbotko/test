const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    personalMovieDB.count = prompt(
      "How many movies have you already watched?",
      ""
    );
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt(
        "How many movies have you already watched?",
        ""
      );
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastFilms = prompt(
          "What was the last film you watched ?",
          ""
        ).trim(),
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
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("You have watched not many films");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log("Not bad!");
    } else if (personalMovieDB.count >= 30) {
      console.log("You are insane");
    } else {
      console.log("Error");
    }
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Your favorite genre is number ${i}`);
      if (genre === "" || genre === null) {
        console.log("Incorrect input");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite genre ${i + 1} - it´s ${item}`);
    });
  },
};
