import { fetchList } from "../api/call-to-api-list.js";
import { detail } from "./detail.js";


// finder
const pokeFinder = function () {
  const finder = document.getElementById("finder");
  finder.style.display = "block";
  const arrTags = document.getElementsByClassName(`tag`);
  finder.addEventListener("input", (find) => {
    for (let i = 0; i < arrTags.length; i++) {
        if (arrTags[i].classList[1].includes(find.target.value)) {
            arrTags[i].style.display = "block"
        }else{
            arrTags[i].style.display = "none";
        }
    }
  });
};

//vista de la lista
const pokeList = async () => {
  // borrar contenido anterior
  const mainContainer = document.getElementById("view");
  mainContainer.innerHTML = "";
  mainContainer.classList.toggle("grid");
  await fetchList()
    .then((arrPokemon) => {
      return arrPokemon.forEach((pokemon, index) => {
        return printPokeTag(pokemon.name, index);
      });
    })
    .catch((err) => console.log(err));

  // poner eventos a todos los tags
  const tag = document.getElementsByClassName("tag");
  for (let i = 0; i < tag.length; i++) {
    tag[i].addEventListener("click", () => {
      return detail(i + 1);
    });
  }
  pokeFinder();
};

// function creadora de los list items
const printPokeTag = function (pokemonName, pokemonIndex) {
  const tagContainer = document.getElementById("view");
  // crear tag
  const tag = document.createElement("div");
  tag.classList.add("tag", `${pokemonName}`);
  tag.id = `${pokemonIndex + 1}`;
  // pokebal img
  const pokeballImgContainer = document.createElement("div");
  pokeballImgContainer.classList.add("tag__img-container");
  const pokeballImg = document.createElement("img");
  pokeballImg.classList.add("tag__img");
  pokeballImg.src = "./app/assets/pokeball.png";
  pokeballImgContainer.appendChild(pokeballImg);
  // index
  const pokeId = document.createElement("span");
  pokeId.classList.add("tag__id");
  pokeId.textContent = `Id:${pokemonIndex + 1}`;
  // name
  const pokeName = document.createElement("h3");
  pokeName.classList.add("tag__name");
  pokeName.textContent = `${pokemonName}`;
  // insertar
  tag.appendChild(pokeballImgContainer);
  tag.appendChild(pokeId);
  tag.appendChild(pokeName);
  tagContainer.appendChild(tag);
};

// export
export { pokeList };
