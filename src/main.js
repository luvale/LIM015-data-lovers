import data from './data/ghibli/ghibli.js';
import {getFilm, searchYears , directors , filterDirectors, sortAZ, sortZA  } from './data.js';
const filmsGhibli = getFilm(data);//obtiene la data Original y la copia seria filmGhibli
// trae solo films.
const showAllFilms = document.getElementById("showAllFilms");
const elementFilterYears = document.querySelector("#filter-years");

const filterAZ = document.querySelector("#filter-AZ");

function showFilmsInScreen (arrayData){ 
    arrayData.forEach(element => {
        const divFilm = document.createElement("section");
        divFilm.innerHTML=`<p>${element.title}</p>
        <img class="posters" src="${element.poster}" alt="">`;
        showAllFilms.append(divFilm);
        divFilm.classList.add("cardClass"); //Pusimos class para poder editar todo junto el CSS de las cards.
        divFilm.setAttribute("id" , element.id);  // los id ya vienen en el 'ghibli.js' 
        const identificador = document.getElementById(element.id);
        identificador.addEventListener("click", newScreen);
        
        function newScreen(){                // Muestra en pantalla la información de cada película. 
          showAllFilms.textContent = ''; 
          const title = document.createElement("section");           // Título de la película.
          title.classList.add("title");         
          const article = document.createElement("article");         // Artículo = contenedor de toda la página.
          article.classList.add("moviesInfo");  
          const aside = document.createElement("aside");             // Aside.
          const mainSection = document.createElement("section");     // Contenedor de todo al lado derecho.
          mainSection.classList.add("mainSection");
          
          const peopleSection = document.createElement("section");  // Section con los personajes.
          const peopleLoop = document.createElement("section");
          peopleSection.classList.add("peopleSection"); 
          const locationSection = document.createElement("section"); // Section con las locaciones.           
          const locationLoop =  document.createElement("section");
          locationSection.classList.add("locationSection");
          const vehicleSection = document.createElement("section");  // Section con los vehículos.
          const vehicleLoop = document.createElement("section");
          vehicleSection.classList.add("vehicleSection");
          
          title.innerHTML= `<h1>${element.title}</h1>` 
          aside.innerHTML= `<img class="posters" src=${element.poster}>
          <h3 class="director">Director: ${element.director}</h3>
          <h3 class="producer">Producer: ${element.producer}</h3>`
          mainSection.innerHTML= `<p class="description">Description: ${element.description}</p>
          <h3 class="releaseDate">Release Date: ${element.release_date}</h3>` 

          peopleSection.innerHTML = `<h3 class="subtitle">Characters:</h3>`;
          locationSection.innerHTML = `<h3 class="subtitle">Locations:</h3>`;
          vehicleSection.innerHTML = `<h3 class="subtitle">Vehicles:</h3>`;
          
          const characters = element.people;         // Recorre cada personaje para mostrarlo en pantalla.
          for (let i = 0; i < characters.length; i++){  
            peopleLoop.innerHTML += `<div class="peopleCards"> <p>${characters[i].name}</p> 
            <img class="peopleImg" src = ${characters[i].img}> </div>` 
          }

          const locations = element.locations;        // Recorre cada locación para mostrarla en pantalla.
          if (locations.length === 0) {
             locationLoop.innerHTML = `<p>No locations found in this movie.</p>`
          } else {
              for (let i = 0; i < locations.length; i++){ 
                locationLoop.innerHTML += `<div class="locationCards"> <p>${locations[i].name}</p> 
                <img src = ${locations[i].img}> </div>`
              } 
            }
          
          const vehicles = element.vehicles;          //Recorre cada vehículo para mostrarlo en pantalla.
           if (vehicles.length === 0) {
            vehicleLoop.innerHTML = `<p>No vehicles found in this movie.</p>`
          } else {
              for (let i = 0; i < vehicles.length; i++){
                vehicleLoop.innerHTML= `<div class="vehicleCards"> <p>${vehicles[i].name}</p> 
                <img src = ${vehicles[i].img}> </div>`
              }
            }
          showAllFilms.append(title, article);
          article.append( aside, mainSection);
          mainSection.append(peopleSection, locationSection, vehicleSection);
          peopleSection.append(peopleLoop);
          locationSection.append(locationLoop);
          vehicleSection.append(vehicleLoop);
        }   
    });
}
showFilmsInScreen(filmsGhibli);

/* Sort by Directors */
const selectOfDirectors = document.getElementById("directors");

//Uso la nueva lista de directores en un <select>
function directorsList() {
    directors.forEach( element => {
        const options = document.createElement("option");
        options.value = element;
        options.textContent= `${element}`;
        selectOfDirectors.append(options);
    })
}
directorsList(filmsGhibli);

selectOfDirectors.addEventListener("change", sortByDirectors);

function sortByDirectors() {
    if (selectOfDirectors.value !== "Sort By Directors"){
        showAllFilms.textContent= "";
        const selectDirector = filterDirectors(data, selectOfDirectors.value);
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
  if(elementFilterYears.value !== 'all'){
    const catchFilter = searchYears(filmsGhibli, elementFilterYears.value);
    showAllFilms.innerHTML='';
    showFilmsInScreen(catchFilter);
  }
})

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
//Sort by AZ-ZA 
filterAZ.addEventListener('change',() =>{
  if(filterAZ.value ==='A-Z'){
    sortAZ(filmsGhibli, filterAZ.value);
    showAllFilms.innerHTML = '';
    showFilmsInScreen(filmsGhibli);
  } if(filterAZ.value === 'Z-A'){
    sortZA(filmsGhibli, filterAZ.value);
    showAllFilms.innerHTML = '';
    showFilmsInScreen(filmsGhibli);
  }
})
const logo = document.getElementById('logo');
logo.addEventListener("click" , home);

const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener("click" , home);
function home(){
  showAllFilms.textContent = '';
  showFilmsInScreen(filmsGhibli);
  selectOfDirectors
}

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click" , mostrarMenu);
function mostrarMenu(){
  document.getElementById("sortBtns").style.display = 'flex';
  document.getElementById("buscador").style.display = 'none';
}

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click" , displaySearch);

function displaySearch(){
  document.getElementById("buscador").style.display = 'flex';
  document.getElementById("sortBtns").style.display = 'none';
}