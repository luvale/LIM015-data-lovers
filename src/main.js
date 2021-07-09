import data from './data/ghibli/ghibli.js';
import {getFilm, searchYears} from './data.js';
const filmsGhibli = getFilm(data);//obtiene la data Original y la copia seria filmGhibli
// trae solo films.
const showAllFilms = document.getElementById("showAllFilms");
const elementFilterYears = document.querySelector("#filter-years");

const showFilmInScreen = (arrayData) =>{
     arrayData.forEach((element) => {
         const divFilm = document.createElement("section");
         divFilm.classList.add("cardClass");
         divFilm.innerHTML=`<p>${element.title}</p>
         <img src="${element.poster}" alt="">`;
         showAllFilms.appendChild(divFilm);
     });
     return showAllFilms;
 };
 showFilmInScreen(filmsGhibli);
 
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
console.log(withoutDuplicateYears(onlyYears));

nameYears.forEach(name => {
  const newOption = document.createElement('option');
  newOption.value= name;
  newOption.textContent = name;
  elementFilterYears.appendChild(newOption)
});

elementFilterYears.addEventListener('change',() =>{
  if(elementFilterYears.value === 'all'){
    showAllFilms.innerHTML = '';
    showFilmInScreen(filmsGhibli);
  } else{
    const catchFilter = searchYears(filmsGhibli, elementFilterYears.value);
    showAllFilms.innerHTML='';
    showFilmInScreen(catchFilter);
  }
})
