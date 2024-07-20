"use client";
import { usePokemons } from "@/services/usePokemon.service";
import { PokemonsType } from "@/types/pokemonType";
import Link from "next/link";
import PokemonCard from "../PokemonCard";

function PokemonList() {
  const { data: pokemons } = usePokemons();

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {pokemons?.map((pokemon: PokemonsType) => {
        return (
          <Link key={pokemon.id} href={`/${pokemon.id}`}>
            <PokemonCard
              name={pokemon.korean_name}
              pokemonImg={pokemon.sprites.front_default}
              pokemonNum={pokemon.id}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default PokemonList;
