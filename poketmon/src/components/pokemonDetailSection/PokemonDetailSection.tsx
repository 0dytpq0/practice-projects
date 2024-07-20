"use client";
import { usePokemon } from "@/services/usePokemon.service";
import { useParams } from "next/navigation";
import PokemonDetailCard from "../pokemonDetailCard";

function PokemonDetailSection() {
  const params = useParams<{ tag: string; pokemonId: string }>();
  const { data: pokemon } = usePokemon(Number(params?.pokemonId));

  return (
    <div className="container mx-auto ">
      <PokemonDetailCard key={params?.pokemonId} pokemon={pokemon} />
    </div>
  );
}

export default PokemonDetailSection;
