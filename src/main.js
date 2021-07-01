import {getFilm, searchYears} from './data.js';
import data from './data/ghibli/ghibli.js';
const filmsGhibli = getFilm(data);//obtiene la data Original y la copia seria filmGhibli
// trae solo films.
// Muestra todas las tarjetas
const showAllFilms = document.getElementById("showAllFilms")

function showFilmsInScreen (arrayData){
    arrayData.forEach(element => {
        const divFilm = document.createElement("section");
        divFilm.innerHTML=`<p>Title: ${element.title}</p>
        <img src="${element.poster}" alt="">`
        showAllFilms.append(divFilm);
        divFilm.classList.add("cardClass");
    });
}
showFilmsInScreen(filmsGhibli);
/* Filter(SORT) BY years --> Diana (traer ID - incluir funcion)*/
const dropdown = (arrayData) =>{
     arrayData.forEach((element) => {
         const optionYears = document.createElement("option");
         optionYears.innerHTML= `${element.release_date}`;
         console.log(optionYears);
         selectDropdown.appendChild(optionYears);
     });
      return showAllFilms;
};
dropdown(filmsGhibli);
/* Filter(SORT) BY years --> Diana */

//Sort By Producers Valeria
const array = (data) => data.films.map(a => a.producer);
const arrayProducers = array(data);
 console.log (arrayProducers);

const unique = new Set(arrayProducers); // le borré el Array.from() y aún funciona.
console.log (unique);

function sortByProducer() {
    unique.forEach( element => {
        const options = document.createElement("option");
        options.innerHTML= `${element}`;
        const select = document.getElementById("producers");
        select.append(options);
       console.log(element);
    })
}
sortByProducer(filmsGhibli);
//Sort By Producers Valeria
