//função de mudar imagem pelo id e pela url
function changeImage(id, url) {
  document.getElementById(id).src = url;
}
//função de mudar texto pelo id e pelo texto
function changeText(id, text) {
  document.getElementById(id).innerText = text;
}

// Daqui para baixo voce ira escrever
// o código para resolver o desafio

let pokemons = [];
let pokemonAtual = 0;

async function fetchTodosPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292');
  const data = await response.json();
  pokemons = data.results;
  mostrarPokemon(pokemonAtual);
}

async function mostrarPokemon(index) {
  const pokemon = pokemons[index];
  if (!pokemon) return;
  const response = await fetch(pokemon.url);
  const data = await response.json();
  changeImage('img_sprite_front_default', data.sprites.front_default);
  changeText('name', data.name);
}

function anteriorPokemon() {
  pokemonAtual = (pokemonAtual - 1 + pokemons.length) % pokemons.length;
  mostrarPokemon(pokemonAtual);
}

function proximoPokemon() {
  pokemonAtual = (pokemonAtual + 1) % pokemons.length;
  mostrarPokemon(pokemonAtual);
}

window.onload = fetchTodosPokemons;
