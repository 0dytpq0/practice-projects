import axios, { AxiosInstance } from "axios";
import Auth from "./auth.api";
import Record from "./record.api";

const BASE_URL = "https://spot-notch-fox.glitch.me";

const AUTH_URL = "https://moneyfulpublicpolicy.co.kr";

class API {
  private axios: AxiosInstance;

  record;
  auth;

  constructor() {
    this.axios = axios.create({ baseURL: BASE_URL });
    this.record = new Record(this.axios);
    this.auth = new Auth(axios.create({ baseURL: AUTH_URL }));
  }
}

const api = new API();

export default api;
