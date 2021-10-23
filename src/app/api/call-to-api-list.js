const fetchList = async () => {
  // console.log("Entramos en la api del listado");
  // HACER LA PETICIÓN
  const endPoint = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;
  const pokeListResponse = await fetch(endPoint).catch((err) => {
    console.log(err);
  });

  if (pokeListResponse.status !== 200) {
    return Promise.reject;
  }
  const pokeListAnswer = await pokeListResponse.json();
  const pokeListTransform = pokeListAnswer.results.map((pokemon) => {
    return { name: pokemon.name};
  });

  // RETORNAR EL VALOR DEVUELTO
  return pokeListTransform;
};

export { fetchList };
