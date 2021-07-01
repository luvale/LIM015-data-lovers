// Trae Films
export const getFilm = (data) => {
  const dataGhibli = data.films.map((arr) => arr);
  return dataGhibli;
};

export const allProducers = (data) => {
  const arrayP = data.films.map(a => (a.producer));
  return arrayP;
}