// Trae Films
export const getFilm = (data) => {
  const dataGhibli = data.films.map((arr) => arr);
  return dataGhibli;
};

/* Diana Filter By Years ARREGLAR*/
export const searchYears = (arrayData, release_date) => {
  const result = arrayData.filter(film => film.release_date === release_date);
  return result;
}

// Exporto a todos los productores
export const allProducers = (data) => {
  const arrayP = data.films.map(a => (a.producer));
  return arrayP;
}

