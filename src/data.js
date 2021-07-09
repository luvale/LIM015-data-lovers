export const getFilm = (data) => {
  const dataGhibli = data.films.map((arr) => arr);
  return dataGhibli;
}
//Por año
export const searchYears = (data, fecha) => {
  const result = data.filter(arr => arr.release_date == fecha);
  return result;
}

// Exporto a todos los productores
export const allProducers = (data) => {
  const arrayP = data.films.map(a => (a.producer));
  return arrayP;
}

