import data from './data/ghibli/ghibli.js';
// Trae Films
export const getFilm = (data) => {
  const dataGhibli = data.films.map((arr) => arr);
  return dataGhibli;
}

//sort by ZA- ZA
export const sortAZ = (data) =>{
  const sortLetters = data.sort((name1, name2) => {
    return(name1.title < name2.title) ? -1  : 1 
  });
  return sortLetters;
}
export const sortZA = (data) =>{
  const sortLetterZA = data.sort((name1, name2) => {
    return(name1.title > name2.title) ? -1  : 1 
  });
  return sortLetterZA;
}


//Por año
export const searchYears = (data, fecha) => {
  const result = data.filter(arr => arr.release_date == fecha);
  return result;
} 

// Hago un array de todos los productores
 export const mapDirectors = (data) => {
  const array = data.films.map(a => (a.director));
  return array;
}

const arrayDirectors = mapDirectors(data);
// console.log (mapDirectors(data))
// Filtro el array de producers para que los nombres no se repitan
export const directors = arrayDirectors.filter((value, index) =>{
  return arrayDirectors.indexOf(value) === index;
});

export const filterDirectors = (data, value) => {
  const filterDirectors = data.films.filter(x => x.director === value)
  return filterDirectors;  
}

/*
const pruebaPersonajes = (data) => {
  const personajes = data.films.map(e => e.people)
  return personajes;
}*/
//console.log(pruebaPersonajes(data));
 
// console.log(data.films.filter(elem => elem.id === "2baf70d1-42bb-4437-b551-e5fed5a87abe").map(e => e.people[0]))
 
 
