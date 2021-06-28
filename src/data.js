// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

/*
export const showProducers =
data.films.map( function (all) {
  return all.director
});
console.log(showProducers);
*/

export const descriptions = (data) => {
let pelis = data.films.map(a => (a.people));
console.log(pelis[0][0]);
}

/*
Object.entries(data.films);
console.log(pelis[0][1])
*/

 /* export const showProducers = data.films.map(a => (a.producer));
console.log(showProducers);
*/


/*
export const showData = () => {
  data.films.forEach(function(element) {
   console.log(element);
})
  // console.log(a);
}
*/
/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
 */