// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(item => item.director);
  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(x => x.director === director );
  //console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = array.filter(x => x.director === director );
  let sumaNota = result.map(r => r.score).reduce((n, s) =>  n + s) / result.length.toFixed(2);
  console.log("EXERCICE 3 ->", sumaNota);
  return sumaNota;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(x => x.title).sort().slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {  
  let arrayNew = [...array];
  let result = arrayNew.sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
  //console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genreType) {
      let result = array.filter(x => (x.genre ==  genreType) && (x.score !== ""));
      let genreAvarage = result.map(r => r.score).reduce((n, s) => n + s) / result.length.toFixed(2);
    //  console.log("EXERCICE 6 ->", genreAvarage);
      return genreAvarage;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let minutsTotal = {...array};
  let minuts = array.map(m => m.duration.replace(/\D/g,''));
  let calc = minuts.map(c => (c[0]*60) + parseInt(c[1] + c[2]));
  for(let i = 0; i < array.length; i++){
    array[i].duration = calc[i];
    minutsTotal = array;
  };
  console.log("EXERCICE 7 ->", minutsTotal);
  return minutsTotal;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  /* let result = array.sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
  }).filter(x => x.score == Math.max(x.score));
  console.log("EXERCICE 8 ->", result);
  return result; */
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
