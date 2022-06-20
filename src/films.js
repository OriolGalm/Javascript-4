// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(x => x.director === "Sidney Lumet" );
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = array.filter(x => x.director === "Sidney Lumet" );
  let sumaNota = result.map(r => r.score).reduce((n, s) =>  n + s);
  let notaMitja = (sumaNota / result.length).toFixed(2);
  console.log("EXERCICE 3 ->", notaMitja);
  return notaMitja;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(x => x.title).sort().slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.filter(x => x.year == x.year).sort((a, b) => a - b).reverse();
  //let igual = result.filter(i => i.year == )
  //let igual = result.map().reduce((y, n) => y.year == n.year);
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
