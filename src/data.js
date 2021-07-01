// Trae Films
export const getFilm = (data) => {
  const dataGhibli = data.films.map((arr) => arr);
  return dataGhibli;
}

// Trae 1 Film / movie // Podemos agregar el buscador
export const searchMovie = (films, nameMovie) => {
  const result = films.filter(film => film.title === nameMovie);
  return result;
}


export const searchYears = (arrayData, release_date) => {
  const result = arrayData.filter(film => film.release_date === release_date);
  return result;
}


/* export const showPeople = (films) => {
  const dataGhibli = films.map((arr) => arr.people);
  return dataGhibli;  
} */