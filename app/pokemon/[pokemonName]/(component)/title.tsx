import React, { use } from 'react';
import Image from 'next/image';

interface PokemonTitleProps {
  name: string;
}

const PokemonTitle: React.FC<PokemonTitleProps> = ({ name }) => {
  return (
    <div className="flex items-center">
      {/* Pokéball on the left */}
      <div className="w-28 h-28 relative -mr-10">
        <a href="/">
        <Image
          src="/pokeball.png"
          alt="Pokéball"
          fill
          className="object-contain rounded-full"
        />
        </a>
      </div>

      <div className=" w-[200px] h-24 bg-red-600 text-white font-bold border-4  border-red-800 border-r-0  border-l-0  items-center justify-ceenter z-0 overflow-hidden z-10">
        {/* Top: Static label */}
        <div className="text-center text-sm text-yellow-400  pt-3 pb-2">POKÉMON</div>
        <hr className=' items-center mx-3'></hr>
        {/* Bottom: Dynamic name */}
        <div className="text-center text-xl pt-2 pb-2 ">{name}</div>

      </div>
      {/* Right-side 30° kite angle */}
      <div className=" border-t-[47px] border-b-[47px] border-l-[30px] border-t-transparent border-b-transparent border-l-red-600 -left-3 z-10" />
    </div>
  );
};

export default PokemonTitle;
