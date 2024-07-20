import { PokemonsType as PokemonType } from "@/types/pokemonType";
import { AxiosInstance } from "axios";

class Pokemon {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getPokemons() {
    const path = "/pokemons";

    const res = await this.axios.get<PokemonType[]>(path);
    const data = res.data;
    return data;
  }
  async getPokemon(id: number) {
    const path = `/pokemons/${id}`;
    const res = await this.axios.get<PokemonType>(path);
    const data = res.data;

    return data;
  }
}

export default Pokemon;
