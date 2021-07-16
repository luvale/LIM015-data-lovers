import data from './data/ghibli/ghibli.js';
// Trae Films
export const getFilm = (data) => {
  const dataGhibli = data.films.map((arr) => arr);
  return dataGhibli;
}
//Por año
export const searchYears = (data, fecha) => {
  const result = data.filter(arr => arr.release_date == fecha);
  return result;
}

// Hago un array de todos los productores
 export const mapDirectors = (data) => {
  const arrayP = data.films.map(a => (a.director));
  return arrayP;
}

const arrayDirectors = mapDirectors(data);
// console.log (arrayProducers)
// Filtro el array de producers para que los nombres no se repitan
export const directors = arrayDirectors.filter((value, index) =>{
  return arrayDirectors.indexOf(value) === index;
});

export const filterDirectors = (data, value) => {
  const filterDirectors = data.films.filter(x => x.director === value)
  return filterDirectors;  
}
 
 
 
