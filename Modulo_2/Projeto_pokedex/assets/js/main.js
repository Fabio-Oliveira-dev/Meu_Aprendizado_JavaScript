// Pagando a lista de pokemons e atribuindo a uma variavel
const pokemonList = document.getElementById('pokemonList')

// Criando botão de paginação
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;




function loadPokemonItens(offset, limit) {
    // interface de comunicação de uma promisse
    // Vai retornar uma promisse requisição assincrona
    // Pegar a lista de pokemons, mapear e converter em lista html, juntar tudo e sem separador
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => 
        // Conversão de um pokemon para item de lista
        `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
        
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('')

        pokemonList.innerHTML += newHTML
    })
}

loadPokemonItens(offset, limit)

// Evento de quando clicar no botão de peginação
loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if(qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }

    
})
