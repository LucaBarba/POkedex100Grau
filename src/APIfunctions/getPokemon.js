import api from "../resources/api"

function formatPokemon(module){

    // prepara uma div para mostrar informacoes do pokemon





}

function getAllPokemon(){           // formato: GET https://pokedex20201.herokuapp.com/pokemons?page=2

    // busca pagina de pokemons

    // testando inicialmente para a pagina 1
    let elemento = api.get("/pokemons?page=1").map(()=>{

        

    })

    // console.log(elemento)

}

function getPokemonByName(name){        // formato: GET https://pokedex20201.herokuapp.com/pokemons/bulbasaur

    // busca pokemon a partir de nome


}

function getFavoritePokemon(trainer){   // formato: GET https://pokedex20201.herokuapp.com/users/ash_ketchum

    // busca informacoes sobre treinador (incluindo seus pokemon favoritos){           // formato: GET https://pokedex20201.herokuapp.com/}


    
}

export default getAllPokemon