
async function renderPokemons() {

  const loading = document.querySelector("#loading");
  const ulTag = document.querySelector('ul');

  const listPokemons = await consomePokeAPI();

  listPokemons.results.forEach((element) => {
    const pokemonNumber = element.url.slice(33, -1)

    setTimeout(() => {
      loading.innerText = "";
 
      const liTag = document.createElement('li')
      const imgPoke = document.createElement('img')
      imgPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`
      imgPoke.alt = `${element.name}`
      const namePoke = document.createElement('h3')
      namePoke.innerHTML = `${element.name}`

      liTag.append(imgPoke,namePoke)
      ulTag.appendChild(liTag)
    }, 3000);
  });
}
renderPokemons();