import data from './data/ghibli/ghibli.js';
import {getFilm, searchYears , directors , filterDirectors} from './data.js';
const filmsGhibli = getFilm(data);//obtiene la data Original y la copia seria filmGhibli
// trae solo films.
const showAllFilms = document.getElementById("showAllFilms");
const elementFilterYears = document.querySelector("#filter-years");


function showFilmsInScreen (arrayData){
  arrayData.forEach(element => {
      const divFilm = document.createElement("section");

      divFilm.innerHTML=`<p>${element.title}</p>
      <img src="${element.poster}" alt="">`;
      showAllFilms.append(divFilm);
      divFilm.classList.add("cardClass"); // clase de cada CARD
      divFilm.setAttribute("id" , element.id);
      const identificador = document.getElementById(element.id);
      identificador.addEventListener("click", newScreen);
      function newScreen(){
        showAllFilms.textContent = '';
        const article = document.createElement("article");
        const aside = document.createElement("aside");
        const topSection = document.createElement("section");
        const peopleSection = document.createElement("section");
        article.innerHTML= `<h1>${element.title}</h1>`
        aside.innerHTML= `<img src=${element.poster}>
        <h3>Director: ${element.director}</h3>
        <h3>Producer: ${element.producer}</h3>`
        topSection.innerHTML= `<p>Description: ${element.description}</p>
        <h3>Release Date: ${element.release_date}</h3>`
        peopleSection.innerHTML= `<h3>Characters</h3>
        <p>${element.people}</p>`
        // <h3>Locations</h3>
        // <h3>Vehicles</h3>
        showAllFilms.append(article);
        article.append(aside, topSection, peopleSection);
      }
      //console.log(divFilm);
  });
}
showFilmsInScreen(filmsGhibli);

//BUSCADOR  
const d = document;
function searchFilms(input, selector){
  d.addEventListener('keyup',(e) =>{
    if(e.target.matches(input)){
      if(e.key === "Escape"){
        e.target.value="";
      }
        d.querySelectorAll(selector).forEach((element) =>
        element.textContent.toLowerCase().includes(e.target.value)
        ?element.classList.remove("filter")
        :element.classList.add("filter")
        );
    }
  });
}
searchFilms(".card-filter", ".cardClass");

/* Sort by producers --> Valeria */
const select = document.getElementById("directors");

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

/* DROPDOWN-Years*/
const withoutDuplicateYears = (arr) => {
  let result = arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
  });
  return result;
}
const arrDate = (arrObj) => {
  let newArray = [];
  arrObj.forEach((ele) => {    
      newArray.push(ele.release_date);
  });
  return newArray;
}
const onlyYears = arrDate(filmsGhibli);
const nameYears = withoutDuplicateYears(onlyYears);

nameYears.forEach(name => {
  const newOption = document.createElement('option');
  newOption.value= name;
  newOption.textContent = name;
  elementFilterYears.appendChild(newOption)
});

elementFilterYears.addEventListener('change',() =>{
  if(elementFilterYears.value === 'all'){
    showAllFilms.innerHTML = '';
    showFilmsInScreen(filmsGhibli);
  } else{
    const catchFilter = searchYears(filmsGhibli, elementFilterYears.value);
    showAllFilms.innerHTML='';
    showFilmsInScreen(catchFilter);
  }
})