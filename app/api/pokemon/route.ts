import type { NextApiRequest, NextApiResponse } from "next";
import { fetchPokemons } from "@/lib/fetchPokemons";
import { Pokemon } from "@/schema/pokemon";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ pokemons: Pokemon[] }>
) {
  const pokemons = await fetchPokemons(3);
  res.status(200).json({ pokemons });
}
