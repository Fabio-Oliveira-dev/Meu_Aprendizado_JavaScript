
// Conversão de um pokemon para item de lista
function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </li>
    `
}

// Pagando a lista de pokemons e atribuindo a uma variavel
const pokemonList = document.getElementById('pokemonList')

// interface de comunicação de uma promisse
// Vai retornar uma promisse requisição assincrona
// Pegar a lista de pokemons, mapear e converter em lista html, juntar tudo e sem separador
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})
