import "../styles/style.css"
import { songs } from './card'

const DOMSelectors = {
    button1: document.getElementById("btn hype"),
    button2: document.getElementById("btn sad"),
    button3: document.getElementById("btn random"),
    Type: document.querySelector(".Type"), 
    Price : document.querySelector(".price"),
    card : document.querySelector(".card"),
    display : document.querySelector(".display-parent"),
};

DOMSelectors.Type.addEventListener("click", function () {
    if (DOMSelectors.Type.classList.contains("Hype")) {
      let music = document.querySelectorAll(".card");
      music.forEach((song) => song.remove());
      items.forEach((music) =>
        DOMSelectors.display.insertAdjacentHTML(
          "afterbegin",
          <div class = 'card '>
        <img class = 'image' src="${song.image}" alt=""></img>
        <h2 class = 'name'>${songs.name}</h2>
        <h3 class = 'price'>${songs.price}</h3>
        <h3 class = 'Type'>${songs.Type}</h3>
        
        </div>
)
);
DOMSelectors.Type.addEventListener("click", function () {
    if (DOMSelectors.Type.classList.contains("Sad")) {
      let music = document.querySelectorAll(".card");
      music.forEach((song) => song.remove());
      items.forEach((music) =>
        DOMSelectors.display.insertAdjacentHTML(
          "afterbegin",
          <div class = 'card '>
        <img class = 'image' src="${song.image}" alt=""></img>
        <h2 class = 'name'>${songs.name}</h2>
        <h3 class = 'price'>${songs.price}</h3>
        <h3 class = 'Type'>${songs.Type}</h3>
        
        </div>
)
);
DOMSelectors.Type.addEventListener("click", function () {
    if (DOMSelectors.Type.classList.contains("Random")) {
      let music = document.querySelectorAll(".card");
      music.forEach((song) => song.remove());
      items.forEach((music) =>
        DOMSelectors.display.insertAdjacentHTML(
          "afterbegin",
          <div class = 'card '>
        <img class = 'image' src="${song.image}" alt=""></img>
        <h2 class = 'name'>${songs.name}</h2>
        <h3 class = 'price'>${songs.price}</h3>
        <h3 class = 'Type'>${songs.Type}</h3>
        
        </div>
)
);    

DOMSelectors.display.insertAdjacentHTML("afterbegin", `<div class="display-parent">`);
document.getElementById("card").addEventListener("click" , function () {
    songs.sort((a, b) => {
        return a.price - b.price;
    });
    songs.forEach((e) => {
        console.log(`${e.name} ${e.price}`) 
    });
        });
    ;
    function create(list) {
    list.forEach((song) =>
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class = 'card '>
        <img class = 'picture' src="${song.image}" alt="">
        <h2 class = 'name'>${song.name}</h2>
        <h3 class = 'Type'>${song.Type}</h3>
        <h3 class = 'color'>${song.price}</h3>
      </div>`
      
      )
    );
  ;
  }

    

export{DOMSelectors}


