import axios from "axios";

export const api = axios.create({
  // https://viacep.com.br/ws/01001000/json/
  baseURL: "https://viacep.com.br/ws/",
});
