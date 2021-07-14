import data from './data/ghibli/ghibli.js';
import {getFilm, searchYears , directors , filterDirectors  } from './data.js';
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
        divFilm.classList.add("cardClass"); //Pusimos class para poder editar todo junto el CSS de las cards.
        divFilm.setAttribute("id" , element.id);  // los id ya vienen en el 'ghibli.js' 
        const identificador = document.getElementById(element.id);
        identificador.addEventListener("click", newScreen);
        
        function newScreen(){                // Muestra en pantalla la información de cada película. 
          showAllFilms.textContent = '';
          const article = document.createElement("article");
          const aside = document.createElement("aside");
          const topSection = document.createElement("section");
          const peopleSection = document.createElement("section");
          const locationSection = document.createElement("section");
          const vehicleSection = document.createElement("section");
          article.innerHTML= `<h1>${element.title}</h1>`
          aside.innerHTML= `<img src=${element.poster}>
          <h3>Director: ${element.director}</h3>
          <h3>Producer: ${element.producer}</h3>`
          topSection.innerHTML= `<p>Description: ${element.description}</p>
          <h3>Release Date: ${element.release_date}</h3>` 
          
          const characters = element.people;         // Recorre cada personaje para mostrarlo en pantalla. 
          for (let i = 0; i <= characters.length-1; i++){  
            peopleSection.innerHTML += `<p>Name: ${characters[i].name}</p> 
            <img src = ${characters[i].img}>` 
          }
          const locations = element.locations;        // Recorre cada locación para mostrarla en pantalla.
          for (let i = 0; i <= locations.length-1; i++){ 
            locationSection.innerHTML += `<p>Location: ${locations[i].name}</p> 
            <img src = ${locations[i].img}>`
          } 
          const vehicles = element.vehicles;          //Recorre cada vehículo para mostrarlo en pantalla.
          for (let i = 0; i <= vehicles.length-1; i++){
            vehicleSection.innerHTML= `<p>Vehicle: ${vehicles[i].name}</p> 
            <img src = ${vehicles[i].img}>`
          }

          showAllFilms.append(article);
          article.append(aside, topSection, peopleSection, locationSection, vehicleSection);
        }   
         
        
 
    });
}
showFilmsInScreen(filmsGhibli);


/*
showAllFilms.textContent = '';
const section = document.createElement("section")
section.innerHTML = `<img src="${element.poster}" alt="">`
*/

/* Sort by Directors */
const select = document.getElementById("directors");

//Uso la nueva lista de directores en un <select>
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



