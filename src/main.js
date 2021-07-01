import { getFilm, searchYears} from './data.js';

import data from './data/ghibli/ghibli.js';
const filmsGhibli = getFilm(data);//obtiene la data Original y la copia seria filmGhibli
// trae solo films.
const showAllFilms = document.getElementById("showAllFilms")


function showFilmsInScreen (arrayData){
    arrayData.forEach(element => {
        const divFilm = document.createElement("section");
        divFilm.innerHTML=`<p>Title: ${element.title}</p>
        <img src="${element.poster}" alt="">`
        showAllFilms.append(divFilm);
        divFilm.classList.add("cardClass");
        console.log(divFilm);
    });
}
showFilmsInScreen(filmsGhibli);

const dropdown = (arrayData) =>{
     arrayData.forEach((element) => {
         const optionYears = document.createElement("option");
         //optionYears.classList.add("optionYears");
         optionYears.innerHTML= `<option>${element.release_date}</option>`;
         selectDropdown.appendChild(optionYears);
     });
      return showAllFilms;
};
dropdown(filmsGhibli);
searchYears()