'use strict';

const catlist = document.querySelector(".js-list");
const buttonAdd = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".js-form");
const buttonCancel = document.querySelector(".js-cancel");
const formCats = document.querySelector(".js-formcats");
const searchButton = document.querySelector(".js-button-search");
const descrSearchText = docuemnt.querySelector(".js-in-search-desc");
const resultsContainer = document.getElementById("js-data-container");

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;


const kittenTwo = `<li class="card">
<article>
    <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
    <h3 class="card_title">Fiona</h3>
    <h4 class="card_race">Sphynx</h4>
    <p class="card_description">
            Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.
    </p>

</article>
</li>`;

const kittenThree = `<li class="card">
<article>
    <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
    <h3 class="card_title">Cielo</h3>
    <h4 class="card_race">Maine Coon</h4>
    <p class="card_description"> Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.
        </p>

</article>
</li>`;

catlist.innerHTML = kittenOne + kittenTwo + kittenThree

buttonAdd.addEventListener("click", ()=>{
  newForm.classList.remove("collapsed");
});

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
});

const kittenDesc1 =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";


const kittenDesc2 =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenDesc3 =
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

  if (kittenDesc1.includes(descrSearchText)) {
    console.log("KittenDesc1")
  }
  
  if (kittenDesc2.includes(descrSearchText)) {
    console.log("KittenDesc1")
  }
  
  if (kittenDesc3.includes(descrSearchText)) {
    console.log("KittenDesc1")
  }

  // PERO NO SALEN LOS GATOS