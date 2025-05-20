"use client"
import React from 'react';
import Image from 'next/image';
import { EvaluationType, PokemonDeatil } from '@/schema/pokemon';
import { useRouter } from 'next/navigation';

interface EvolutionProps {
  mypokemon:PokemonDeatil;
  evolutions: EvaluationType[]
}

const typeColors: Record<string, string> = {
  Fire: 'bg-orange-400 text-white',
  Flying: 'bg-cyan-400 text-white',
  Grass: 'bg-green-400 text-white',
  Water: 'bg-blue-400 text-white',
  // Add more types as needed
};

const EvolutionChain: React.FC<EvolutionProps> = ({ evolutions , mypokemon}) => {
    const route = useRouter();
    const handleClick = (id: string) => {
        route.push(`/pokemon/${id}`);
    }
  return (
    <div className="bg-gray-800 p-6 rounded-xl text-white p-6 w-[1050px]">
      <h2 className="text-2xl font-bold mb-6">Evolutions</h2>

      <div className="flex items-center justify-center space-x-6 cursor-pointer  ">
        {/* myself */}
        <div className="flex flex-col items-center space-y-2 hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => handleClick(mypokemon.id)}>
              {/* Image in circle */}
              <div className="w-32 h-32 rounded-full border-4 border-white relative overflow-hidden">
                <Image
                  src={mypokemon.image}
                  alt={mypokemon.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name and ID */}
              <div className="text-center">
                <div className="text-lg font-semibold">{mypokemon.name}</div>
                {/* <div className="text-sm text-gray-400">#{mypokemon.id.padStart(4, '0')}</div> */}
              </div>

              {/* Types */}
              <div className="flex flex-wrap justify-center gap-2">
                {mypokemon.types.map((type) => (
                  <span
                    key={type}
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      typeColors[type] || 'bg-gray-300 text-black'
                    }`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow between items */}
            {
                evolutions?.length > 0 ? (<div className="text-3xl text-white">➜</div>) :(<></>)
            }
        {/* map other */}
        {evolutions?.map((pokemon, index) => (
          <React.Fragment key={pokemon.id}>
            {/* Card */}
            <div className="flex flex-col items-center space-y-2 cursor-pointer  hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleClick(pokemon.id)}>
              {/* Image in circle */}
              <div className="w-32 h-32 rounded-full border-4 border-white relative overflow-hidden">
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name and ID */}
              <div className="text-center">
                <div className="text-lg font-semibold">{pokemon.name}</div>
                {/* <div className="text-sm text-gray-400">#{pokemon.id.padStart(4, '0')}</div> */}
              </div>

              {/* Types */}
              <div className="flex flex-wrap justify-center gap-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      typeColors[type] || 'bg-gray-300 text-black'
                    }`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow between items */}
            {index < evolutions.length - 1 && (
              <div className="text-3xl text-white">➜</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EvolutionChain;
