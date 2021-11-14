const pokemonTrainer = require('../Pokemon Trainer/pokemon-trainer');
const inquirer = require('inquirer');

const trainerQuestions = [
    {
        type: 'input',
        name: 'trainerName',
        message: 'Enter your name',
        default: 'Ash',

    },
    {
        type: 'list',
        name: 'select_pokemon',
        message: 'Select which pokemon you would like to catch:',
        choices: ['Charizard', 'Blastoise', 'Venusaur'],
    }
]
function round1(){
console.log('Welcome to the Pokemon League round one!')
}