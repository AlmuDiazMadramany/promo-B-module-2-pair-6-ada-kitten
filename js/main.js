"use strict";

const catlist = document.querySelector(".js-list");
const buttonAdd = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".js-form");
const buttonCancel = document.querySelector(".js-cancel");
const formCats = document.querySelector(".js-formcats");
const searchButton = document.querySelector(".js-button-search");
const input_search_desc = document.querySelector(".js_in_search_desc");


// kittenOne

const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1= "Anastacio";
const kittenRace1 = "Siamés";
const kittenDesc1 =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

  // kittenTwo
  const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
  const kittenName2= "Fiona";
  const kittenRace2 = "Sphynx";
  const kittenDesc2 =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

  // kittenThree
  const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp" ;
const kittenName3= "Cielo";
const kittenRace3 = "Maine Coon";
const kittenDesc3 =
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";




const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage1}"
    alt="gatito1"/>
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${kittenRace1}</h4>
  <p class="card_description">${kittenDesc1}</p>
</article>
</li>`;


const kittenTwo = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage2}"
    alt="gatito1"/>
  <h3 class="card_title">${kittenName2}</h3>
  <h4 class="card_race">${kittenRace2}</h4>
  <p class="card_description">${kittenDesc2}</p>
</article>
</li>`;

const kittenThree = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage3}"
    alt="gatito1"/>
  <h3 class="card_title">${kittenName3}</h3>
  <h4 class="card_race">${kittenRace3}</h4>
  <p class="card_description">${kittenDesc3}</p>
</article>
</li>`;

catlist.innerHTML = kittenOne + kittenTwo + kittenThree


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


let breedText = " ";
  if (kittenRace1 === "") {
    breedText = `Uy que despiste, no sabemos su raza`;
  } else {
    breedText = kittenRace1;
  }
;




//let kittenName = "whiskers";
//kittenName = kittenName.toUpperCase();  // Convierte a mayúsculas
//console.log(kittenName);  // Output: WHISKERS






