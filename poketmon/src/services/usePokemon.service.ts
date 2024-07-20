import { useQuery } from "@tanstack/react-query";
import queryOptions from "./queries";

export function usePokemons() {
  return useQuery(queryOptions.all());
}

export function usePokemon(pokemonId: number) {
  return useQuery(queryOptions.detail(pokemonId));
}
