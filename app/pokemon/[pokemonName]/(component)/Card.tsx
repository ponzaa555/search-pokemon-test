import React from 'react';
import Image from 'next/image';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

const Card: React.FC<PokemonCardProps> = ({  name, image, types }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer border-2 border-gray-300 hover:border-yellow-500 p-6 w-[380px] h-[380px] flex flex-col justify-between">
      {/* Image */}
      <div className="w-full h-48 relative mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-extrabold text-center text-gray-800">{name}</h2>

      {/* Types */}
      <div className="flex justify-center flex-wrap mt-4 gap-2">
        {types.map((type, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 rounded-full bg-red-200 text-red-800 font-semibold"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
