import { Pokemon, PokemonDeatil } from "@/schema/pokemon";


export async function fetchPokemons(first : number): Promise<Pokemon[]> {
    const query = `
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            types
        }
    }
    `
    const res = await fetch("https://graphql-pokemon2.vercel.app",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables: {
                first: first,
            },
        }),

    })
    const json = await res.json();
    return json.data.pokemons;
}

export async function fetchPokemonById(id: string): Promise<PokemonDeatil> 
{
    console.log({id});
    const query = `
    query pokemon($id: String!) {
        pokemon(id: $id) {
            id
            name
            types
            image
            resistant
            weaknesses
            attacks {
                fast {
                    name
                    type
                    damage
                }
                special {
                    name
                    type
                    damage
                }
            }
            evolutions{
                id
                name
                image
                classification
                types
                resistant
                weaknesses
                fleeRate
                maxCP
                maxHP
                image
             }
        }
    }
    `
    const res = await fetch("https://graphql-pokemon2.vercel.app",{
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query,
            variables: {
                id: id,
            },
        }),
    })
    const json = await res.json();
    console.log(json.data.pokemon);
    return json.data.pokemon;
}