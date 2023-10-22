console.log("Pokemon!");

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function Pokemon2HTML(pokemon){
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="details">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="$ {pokemon.name} splash image">
                </div>
            </li>
    `
}

const pokemonList = document.getElementById("pokemonList");

fetch(url)
    .then((response) => response.json()) 
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {

        for (let index = 0; index < pokemons.length; index++) {
            const pokemon = pokemons[index];
            console.log(Pokemon2HTML(pokemon));
            
            pokemonList.innerHTML += Pokemon2HTML(pokemon);
        }

    })
    //(function (response){ ... }) // Entender qual o parametro do ()
    // pois, seria função (nomeDela) (Parametros), mas só tem o param.
    .finally(() => console.log("Requisição à PokeAPI concluída!"));
    //substitui por 1 linha invés de abrir {}, já que só tinha 1 instrução (virando => response.json())
    //debugger - breakpoint

//Exemplo pra mostrar o async
const x = 10+10;
console.log(x);