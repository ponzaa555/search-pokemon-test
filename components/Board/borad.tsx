"use client"
import { Pokemon } from '@/schema/pokemon';
import React from 'react';
import PokemonCard from '../PokemonCard/pokemonCard';
import { useRouter } from 'next/navigation';

interface BoradProps {
    Pokemons : Pokemon[]
}
const Borad = ({Pokemons}:BoradProps) => {
    const route = useRouter();
    // const [showPokemon , setShowPokemon] = useState(Pokemons);
    const handleClick = (id: string) => {
        route.push(`/pokemon/${id}`);
    }
    return (
        <div className="flex w-full justify-center items-center p-4">
            <div className="h-[80vh] w-full max-w-7xl overflow-y-scroll rounded-lg border border-gray-300 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Pokemons.map((pokemon, index) => (
                   <div key={index} onClick={() => handleClick(pokemon.id)}> 
                        <PokemonCard
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types}
                        />
                    </div>
        ))}
    </div>
  </div>
</div>
    );
}

export default Borad;
