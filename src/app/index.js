//Importamos Vistas
import { pokeList } from "./views/list.js";
import { pokeHome } from "./views/home.js";


const card = document.getElementById("card");
const addListerners = () => {
  document.getElementById("home").addEventListener("click",pokeHome);
  document.getElementById('pokedex').addEventListener('click', pokeList);
  document.getElementById('close-btn').addEventListener('click', ()=>{card.style.display = "none"});
};

window.onload = () => {
  pokeHome();
  addListerners();
};
