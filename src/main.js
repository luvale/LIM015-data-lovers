import { getFilm } from './data.js';

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

//Sort By Producers

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


