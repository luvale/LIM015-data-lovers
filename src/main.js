import { getFilm, searchMovie, showPeople } from './data.js';

import data from './data/ghibli/ghibli.js';
const filmsGhibli = getFilm(data);//obtiene la data Original y la copia seria filmGhibli
// trae solo films.
const showAllFilms = document.getElementById("showAllFilms")


function showFilmInScreen (arrayData){
    arrayData.forEach(element => {
        const divFilm = document.createElement("section");
        divFilm.classList.add("cardClass");
        divFilm.innerHTML=`<p>title:${element.title}</p>
        <p> ${element.director}</p>
        <img src="${element.poster}" alt="">`
        showAllFilms.appendChild(divFilm);
        console.log(divFilm);
    });
}
showFilmInScreen(filmsGhibli);

 



