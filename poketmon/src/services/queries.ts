import api from "./api";

const queryKeys = {
  all: ["pokemons"] as const,
  detail: (pokemonId: number) => [...queryKeys.all, pokemonId] as const,
};

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => api.pokemon.getPokemons(),
  }),
  detail: (pokemonId: number) => ({
    queryKey: queryKeys.detail(pokemonId),
    queryFn: () => api.pokemon.getPokemon(pokemonId),
  }),
};

export default queryOptions;
