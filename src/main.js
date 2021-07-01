import { getFilm , allProducers } from './data.js';

import data from './data/ghibli/ghibli.js';
const filmsGhibli = getFilm(data);//obtiene la data Original y la copia seria filmGhibli
// trae solo films.

// Muestra todas las películas
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

const arrayProducers = allProducers(data)

// Filtro el array de producers para que los nombres no se repitan
const producers = arrayProducers.filter((value, index) =>{
    return arrayProducers.indexOf(value) === index;
});

//Uso la nueva lista de producers en un <select>
function sortByProducer() {
    producers.forEach( element => {
        const options = document.createElement("option");
        options.innerHTML= `${element}`;
        const select = document.getElementById("producers");
        select.append(options);
    })
}
sortByProducer(filmsGhibli);


