// app/page.tsx
"use client"
import Borad from "@/components/Board/borad";
import SearchInput from "@/components/Board/searchInput";
import Navbar from "@/components/NavBar/navbar";
import SideBar from "@/components/sideBar";
import { fetchPokemons } from "@/lib/fetchPokemons";

export default async function HomePage() {
  const pokemons = await fetchPokemons(200); // Runs on the server
  // const [showPokemon , setShowPokemon] = useState()
  return (
    <main >
      <div className=" flex h-screen">
      <SideBar/>
      <div className="  border border-red-600 w-full ">
        <Navbar/>
        <SearchInput/>
        <Borad Pokemons={pokemons}/>
      </div>
      </div>
    </main>
  );
}
