import axios, { AxiosInstance } from "axios";
import Pokemon from "./pokemon";

class API {
  private axios: AxiosInstance;

  pokemon;

  constructor() {
    this.axios = axios.create({ baseURL: "http://localhost:3000" });
    this.pokemon = new Pokemon(this.axios);
  }
}

const api = new API();

export default api;
