async function consomePokeAPI() {

    const loading = document.querySelector('#loading')

    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
      .then(response => response.json())
      .catch(error => console.log(error))

    // Independente da requisição ser um sucesso, ou um erro, removeremos o loading da tela
    loading.classList.add('hidden')

    // Retorna esse valor convertido
    return pokemonsDaAPI
}

// Chama a função para rodá-la ao carregar a página
consomePokeAPI()


async function getPokemonByName(pokemonName) {

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res =>{
    
    return res
  })

  return pokemon
}

function renderSearch() {

  const searchinput = document.querySelector('.searchBar')
  const seachBtn = document.querySelector('.searchBtn')

  seachBtn.addEventListener('click', async () => {

   
    
    showPokemon(await getPokemonByName(searchinput.value))
})

}


async function showPokemon(element) {

  const ulTag = document.querySelector('ul');

  ulTag.innerHTML = "";

  const liTag = document.createElement('li')
  const imgPoke = document.createElement('img')
  imgPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.id}.png`
  imgPoke.alt = `${element.name}`
  const namePoke = document.createElement('h3')
  namePoke.innerHTML = `${element.name}`

  liTag.append(imgPoke,namePoke)
  ulTag.appendChild(liTag)
}



renderSearch()
