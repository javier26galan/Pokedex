import { fetchDetail } from "../api/call-to-api-detail.js";

// el nombre de la fucntion es bastante descriptivo creo yo
const randomNum = function (max, min) {
  return Math.round(Math.random() * (max - min) + min);
};


// vista Home
const pokeHome = function () {
  // borrar contenido anterior
  const mainContainer = document.getElementById("view");
  mainContainer.innerHTML = "";
  // ocultar el finder
  const finder = document.getElementById("finder");
  finder.style.display = "none";
  // creacion de imagenes home
  pokeRandomUrl();
  pokeLogo();
  pokeRandomUrl();
};

// function del logo
const pokeLogo = function () {
  // seleccionar container
  const mainContainer = document.getElementById("view");
  // contenido home
  const homeImgContainer = document.createElement("div");
  homeImgContainer.classList.add("home__logo-container");
  //imagenes
  const homeImg = document.createElement("img");
  homeImg.classList.add("home__logo");
  homeImg.setAttribute("src", "./app/assets/logo.png");
  homeImgContainer.appendChild(homeImg);
  mainContainer.appendChild(homeImgContainer);
};

// function para imagenes random
const pokeRandomUrl = function () {
  fetchDetail(randomNum(151, 1))
    // .then((pokemon)=>console.log(pokemon.imgUrl))
    .then((pokemon)=>{
      return pokeImg(pokemon.imgUrl)
    })
    .catch((err) => console.log(err));
}
//function para hacer las imagenes random
const pokeImg = function (url){
  const mainContainer = document.getElementById("view");
  // contenido home
  const homeImgContainer = document.createElement("div");
  homeImgContainer.classList.add("home__random");
  //imagenes
  const homeImg = document.createElement("img");
  homeImg.classList.add("home__img");
  homeImg.setAttribute("src", `${url}`);
  homeImgContainer.appendChild(homeImg);
  mainContainer.appendChild(homeImgContainer);
} 

export { pokeHome, randomNum };
