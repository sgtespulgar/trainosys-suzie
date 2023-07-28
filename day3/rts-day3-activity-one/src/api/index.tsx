import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";


export const fetchPokemons = async () => {
    return await axios.get(baseUrl + "pokemon/?offset=0&limit=30");
};

export const  fetchPokemonData = async (pokemonName : string) => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
};

export const fetchPokemonColors = async () => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon-color`);
};

export const fetchPokemonTypes = async () => {
    return await axios.get(`https://pokeapi.co/api/v2/type`);
};