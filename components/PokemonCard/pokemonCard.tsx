import React from "react";

export interface PokemonCardProps {
  id: string;
  name: string;
  image: string;
  number?: string;
  types?: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, image, number, types }) => {
  return (
    <div
      key={id}
      className="bg-white rounded-2xl shadow-md p-4 w-64 hover:scale-105 transition-transform duration-200"
    >
      <img
        src={image}
        alt={name}
        className="w-40 h-40 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-2">{name}</h2>
      {number && <p className="text-center text-gray-500">#{number}</p>}

      {types && (
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {types.map((type) => (
            <span
              key={type}
              className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
