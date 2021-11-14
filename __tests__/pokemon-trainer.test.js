const Trainer = require('../Pokemon Trainer/pokemon-trainer');

describe('Trainer', ()=>{

    test('When trainer is invoked, a new trainer instance should be created with specified keys', ()=>{

        const newTrainer = new Trainer();
        
        expect(newTrainer).toBeInstanceOf(Trainer);
        expect(newTrainer).toHaveProperty('name');
        expect(newTrainer).toHaveProperty('age');
        expect(newTrainer).toHaveProperty('gender');
        expect(newTrainer).toHaveProperty('pokemon');
    })

    test('When passed arguments, should assign arguments to the specified keys',()=>{

        const newTrainer = new Trainer('Ste', 31, 'Male');

        expect(newTrainer.name).toBe('Ste');
        expect(newTrainer.age).toBe(31);
        expect(newTrainer.gender).toBe('Male');
    })

    describe('Method tests',()=>{
        test.only('when catchpokemon is called, should push that pokemon into trainers pokemon array',()=>{

            const newTrainer = new Trainer('Ste', 31, 'Male');
            newTrainer.catchPokemon('pikachu');
            console.log(newTrainer.pokemon)

            expect(newTrainer.pokemon).toEqual(['pikachu'])
        })
        test('when catchpokemon is called and maximum pokemon number is met, should log "already at maximum pokemon"',()=>{

            const newTrainer = new Trainer('Ste', 31, 'Male');
            newTrainer.catchPokemon('Pikachu');
            newTrainer.catchPokemon('Blastoise');
            newTrainer.catchPokemon('Charizard');
            newTrainer.catchPokemon('Venusaur');
            newTrainer.catchPokemon('MewTwo');
            newTrainer.catchPokemon('Gengar');
            newTrainer.catchPokemon('Mew');

            expect(newTrainer.pokemon.length).toBe(6);
        })
    })
})