const axios = require('axios');
const fs = require('fs/promises');

class Trainer {
    constructor(name, age, gender){
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.pokemon = []
        this.maximumPokemon = 6;
    };

catchPokemon = function(pokemonName){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) =>{
        if(this.pokemon.length < this.maximumPokemon){
            const pokemonObject = {[`${response.data.name}`]: response.data};
            return this.pokemon.push(pokemonObject);
        } else console.log('Already have maximum pokemon number');

    }).catch(err=>{console.log(err)})
} 
};


module.exports = Trainer;