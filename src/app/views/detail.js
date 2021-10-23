import { fetchDetail } from "../api/call-to-api-detail.js";

const detail = (id) => {
  fetchDetail(id)
    .then((pokemon) => {
      return fillCard(pokemon);
    })
    .catch((err) => console.log(err));
};

const fillCard = function (pokemon) {
  const card = document.getElementById("card");
  const cardImg = document.getElementById("card-img");
  const cardId = document.getElementById("card-id");
  const cardName = document.getElementById("card-name");
  const cardType = document.getElementById("card-type");
  const cardType2 = document.getElementById("card-type-2");

  card.className = "card";
  card.classList.add(`${pokemon.types[0]}`);
  cardImg.src = pokemon.imgUrl;
  cardId.textContent = `Id:${pokemon.id}`;
  cardName.textContent = pokemon.name;
  cardType.textContent = pokemon.types[0];
  if (pokemon.types[1]) {
    cardType2.textContent = pokemon.types[1];
    card.classList.add(`border-${pokemon.types[1]}`);
    cardType2.style.display = "inline-block";
  } else {
    cardType2.style.display = "none";
  }
  card.style.display = "flex";
};

// const createPokeCard = function (pokemon) {
//   // seleccionar container
//   const mainContainer = document.getElementById("view");

//   // creación de elementos
//   // card
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.id = "card"
//   // close button
//   const cardButton = document.createElement("span");
//   cardButton.classList.add("card__btn");
//   cardButton.id = "close-btn";
//   cardButton.textContent = `X`;
//   card.appendChild(cardButton);
//   // cardImg
//   const imgContainer = document.createElement("div");
//   imgContainer.classList.add("card__container");
//   const cardImg = document.createElement("img");
//   cardImg.classList.add("card__img");
//   cardImg.src = `${pokemon.imgUrl}`;
//   imgContainer.appendChild(cardImg);
//   card.appendChild(imgContainer);
//   // cardId
//   const cardId = document.createElement("span");
//   cardId.classList.add("card__id");
//   cardId.textContent = `#${pokemon.id}`;
//   card.appendChild(cardId);
//   // cardName
//   const cardName = document.createElement("span");
//   cardName.classList.add("card__name");
//   cardName.textContent = `#${pokemon.name}`;
//   card.appendChild(cardName);
//   // cardId
//   const cardType = document.createElement("span");
//   cardType.classList.add("card__type");
//   cardType.textContent = `#${pokemon.types}`;
//   card.appendChild(cardType);
//   //push to view
//   mainContainer.appendChild(card);
// };

export { detail };
