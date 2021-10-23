//element será el ID o NOMBRE
const fetchDetail = async (id) => {
  // HACER LA PETICIÓN
  const endPoint = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemonRequest = await fetch(endPoint).catch((err)=>console.log(err));
  if (pokemonRequest.status !== 200) {
    return Promise.reject;
  }
  const pokemonAnswer = await pokemonRequest.json();

  const pokemonDataTrans = {
    id: pokemonAnswer.id,
    name:pokemonAnswer.name,
    types: pokemonAnswer.types.map((tipo) => tipo.type.name),
    imgUrl: pokemonAnswer.sprites.front_default,
  };
  // RETORNAR EL VALOR DEVUELTO
  return pokemonDataTrans;
};

export { fetchDetail }