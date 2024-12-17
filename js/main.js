"use strict";

const catlist = document.querySelector(".js-list");
const buttonAdd = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".js-form");
const buttonCancel = document.querySelector(".js-cancel");
const formCats = document.querySelector(".js-formcats");
const searchButton = document.querySelector(".js-button-search");
const input_search_desc = document.querySelector(".js_in_search_desc");
const kittenImage = document.querySelector (".js-kittenImage");
const kittenName = document.querySelector (".js-kittenName");
const kittenRace = document.querySelector (".js-kittenRace");
const kittenDesc = document.querySelector (".js-kittenDesc");
const buttonSubmit = document.querySelector (".js-buttonSubmit");

// kittenOne
const kittenData_1 ={
  image : "https://dev.adalab.es/gato-siames.webp",
  name : "Anastacio",
  race : "Siamés",
  desc : "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
};

// kittenTwo
  const kittenData_2 ={
    image : "https://dev.adalab.es/sphynx-gato.webp",
    name : "Fiona",
    race : "Sphynx",
    desc : "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  };

// kittenThree
  const kittenData_3 ={
    image : "https://dev.adalab.es/maine-coon-cat.webp",
    name : "Cielo",
    race : "Maine Coon",
    desc : "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  };


const renderKitten = (kittenData) => {
  const li = `
    <li class="card">
        <article>
          <img
            class="card_img"
            src="${kittenData.image}"
            alt="gatito1"/>
          <h3 class="card_title">${kittenData.name}</h3>
          <h4 class="card_race">${kittenData.race}</h4>
          <p class="card_description">${kittenData.desc}</p>
        </article>
        </li>`;
 return li
}

catlist.innerHTML = renderKitten (kittenData_1) + renderKitten (kittenData_2) + renderKitten (kittenData_3);

// FUNCION PARA AÑADIR GATOS NUEVOS: 

function renderNewKitten (event) {
  event.preventDefault();
  const kittenData ={
    image : kittenImage.value,
    name : kittenName.value,
    race : kittenRace.value,
    desc : kittenDesc.value,
  };
 
}

catlist.innerHTML += renderNewKitten (kittenData);

buttonSubmit.addEventListener("click", renderNewKitten);


// EL FORMULARIO DE AÑADIR GATO

function showNewCatForm() {
  newForm.classList.remove("collapsed");
}

function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

// tenemos las dos funciones definidas arriba. creamos una función que contenga el evento click. Dentro de la función del evento, ponemos el if, else. 
//En el if i else ponemos las dos funciones que tenemos arriba definidas para que ocurra como el elemento que queremos. 
function handleClickNewCatForm (event) {
  event.preventDefault();
  if (newForm.classList.contains("collapsed")){
    showNewCatForm()

   } else {
    hideNewCatForm()
   };

};

//resumen de toda la función de arriba --> cuando se apriete al botón miramos si tiene la classe i si la tiene la quitamos, si no la tiene, la ponemos. 
buttonAdd.addEventListener("click", handleClickNewCatForm);

buttonCancel.addEventListener("click", () => {
  newForm.classList.add("collapsed");
  formCats.reset();
  //newForm.reset(); estábamos en el elemento section:
  //newForm = document.querySelector(".js-form")
  //<section class="new-form collapsed js-form">
  //Entonces había que poner una clase al elemento form
});


searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;

  if (kittenDesc1.includes(descrSearchText)) {
    console.log("KittenDesc1");
    catlist.innerHTML = kittenOne;
  }

  if (kittenDesc2.includes(descrSearchText)) {
    console.log("KittenDesc2");
    catlist.innerHTML = kittenTwo;
  }
  
  if (kittenDesc3.includes(descrSearchText)) {
    console.log("KittenDesc3");
    catlist.innerHTML = kittenThree;
  }

});

/*
let breedText = " ";
  if (kittenRace1 === "") {
    breedText = `Uy que despiste, no sabemos su raza`;
  } else {
    breedText = kittenRace1;
  }
;
*/





//let kittenName = "whiskers";
//kittenName = kittenName.toUpperCase();  // Convierte a mayúsculas
//console.log(kittenName);  // Output: WHISKERS


//funciones II
//Creamos constante que coja el valor del input desc
const descrSearchText = input_search_desc.value;
const race1 = document.querySelector(".js-race")


//cramos función para que a la hora de buscar por descripción, aparezca el gato que tenga una descripción que coincida
const filterKitten = (event) => {
  if (kittenDesc1.includes(descrSearchText)){
    listElement.innerHTML += kittenOne;
  }
  if (kittenDesc2.includes(descrSearchText)){
    listElement.innerHTML += kittenTwo;
  }
  if(kittenDesc3.includes(descrSearchText)){
    listElement.innerHTML += kittenThree;
  }
};



/*
//ejecutamos el evento sobre el botón de buscar
searchButton.addEventListener("click", handleClickKitten);
*/


//Tenemos dudas sobre el ejercicio bonus de funciones II. No tenemos claro como declarar la función para que nos salgan los gatos cuando buscamos su raza
//Nos sale el 3r gato pongamos lo que pongamos. Con la descripción nos sale bien.
//Podemos hacer dos eventos en un mismo elemento? (en el botón buscar, darle información para la descricpión y para la raza)


// const handleClickKitten(event) => {
//   const raceSearch = race1.value;
//   if (raceSearch === kittenRace1 || raceSearch === kittenRace2 || raceSearch === kittenRace3) {
//     return raceSearch;
//   } else {
//     return 'Uy que despiste, no sabemos su raza';
//   }
// }

// function renderRace () {


// searchButton.addEventListener("click", renderRace);



