import {getFilm, searchYears, directors , filterDirectors } from './data.js';
import data from './data/ghibli/ghibli.js';
const filmsGhibli = getFilm(data);//obtiene la data Original y la copia seria filmGhibli
// trae solo films.
// Muestra todas las tarjetas

const showAllFilms = document.getElementById("showAllFilms")

function showFilmsInScreen (arrayData){
    arrayData.forEach(element => {
        const divFilm = document.createElement("section");
        divFilm.innerHTML=`<p>${element.title}</p>
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
         selectDropdown.appendChild(optionYears);
     });
      return showAllFilms;
};
dropdown(filmsGhibli);
/* Filter(SORT) BY years --> Diana */
const select = document.getElementById("directors");
/* Sort by producers --> Valeria */
//Uso la nueva lista de producers en un <select>
function directorsList() {
    directors.forEach( element => {
        const options = document.createElement("option");
        options.value = element;
        options.textContent= `${element}`;
        select.append(options);
    })
}
directorsList(filmsGhibli);

select.addEventListener("change", sortByDirectors);

function sortByDirectors() {
    if (select.value !== "Sort By Directors"){
        showAllFilms.textContent= "";
        const selectDirector = filterDirectors(data, select.value);
        showFilmsInScreen(selectDirector);
    }     
}