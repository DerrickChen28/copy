import "../styles/styles.css";
import { songs } from './card'

const DOMSelectors = {
    button: document.getElementById("btn"),
    Hype : document.querySelector(".Hype"), 
    Sad : document.querySelector(".Sad"), 
    Random : document.querySelector(".Random"), 
    Price : document.querySelector(".price"),
    card : document.querySelector(".card"),
    display : document.querySelector(".display-parent"),
}
DOMSelectors.display.insertAdjacentHTML("afterbegin", `<div class="display-parent>`);
DOMSelectors.Hype.addEventListener("click", function () {
    const HypeSong = songs.filter(song => {
        if (song.Hype === true) {
            return song;
            };
    });
        
    });
;
DOMSelectors.display.insertAdjacentHTML("afterbegin", `<div class="display-parent>`);
DOMSelectors.Sad.addEventListener("click" , function () {
    const SadSong = songs.filter(song => {
        if (song.Sad === true) {
            return song;
            };
    });
});
DOMSelectors.display.insertAdjacentHTML("afterbegin", `<div class="display-parent">`);
DOMSelectors.Random.addEventListener("click" , function () {
    const RandomSong = songs.filter(song => {
        if (song.Random === true) {
            return song;
            };
        });
    });
        


function create(list) {
  list.forEach((song) =>
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class = 'card '>
      <img class = 'picture' src="${song.image}" alt="">
      <h2 class = 'name'>${song.name}</h2>
      <h3 class = 'color'>${song.price}</h3>

      
    </div>`
    )
  );
}


export{DOMSelectors}


 

    


