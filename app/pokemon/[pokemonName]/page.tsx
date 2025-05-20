import { fetchPokemonById } from '@/lib/fetchPokemons';
import React from 'react';
import PokemonTitle from './(component)/title';
import Card from './(component)/Card';
import Skill from './(component)/Skill';
import Evaluation from './(component)/Evaluation';
import EvolutionChain from './(component)/Evaluation';
type pokemonProps = {
    params : {
        pokemonName : string
    }
}
export default async function PokemonInfo ({params}:pokemonProps) 
{
    const { pokemonName } = await params;
    const decodeName = decodeURIComponent(pokemonName);
    const pokemonInfo = await fetchPokemonById(decodeName);
    console.log({pokemonInfo});
    return (
        <div className="px-20 py-10 bg-[url('/pokemonBg.png')] bg-cover bg-center bg-repeat">
          {/* <h1 className="text-3xl font-bold">Pokemon: {pokemonName}</h1>
          <h1 className="text-3xl font-bold">Decode : {decodeName}</h1> */}
          {/* You can fetch more data about this Pokémon here */}
          <PokemonTitle name={pokemonInfo.name} />
          {/* pokenom info */}
          <div className=' w-full items-center'>
            {/* Top part */}
            <div className=" flex w-full justify-center space-x-10 items-center p-10">
                {/* Card */}
                <Card 
                id={decodeName}
                name={pokemonInfo.name} 
                image={pokemonInfo.image} 
                types={pokemonInfo.types} 
                />
                {/* skill pary */}
                <Skill fast={pokemonInfo.attacks.fast} 
                      special={pokemonInfo.attacks.special} 
                      weak={pokemonInfo.weaknesses}
                      resist={pokemonInfo.resistant}/>
            </div>
            {/* Evaluation Part */}
            <div className='flex w-full justify-center  items-center p-10  '>
              <EvolutionChain evolutions={pokemonInfo.evolutions} mypokemon={pokemonInfo}/>
            </div>
          </div>
        </div>
      );
}


