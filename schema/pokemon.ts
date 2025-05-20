import { types } from "util";

export type Pokemon = {
    id: string;
  name: string;
  image: string;
  // number?: string;
  types?: string[];
}

export type PokemonDeatil = {
  id :string
  name :string
  image : string
  types : string[]
  resistant : string[]
  weaknesses : string[]
  attacks: {
    fast: skill[]  
    special: skill[]
  }
  evolutions : EvaluationType[]
}

export type EvaluationType = {
  id : string;
  name : string;
  image : string;
  classification : string
  types : string[]
}

export type skill = {
  name: string;
  type: string;
  damage: number;
}
