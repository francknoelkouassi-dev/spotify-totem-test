import axios from "axios";

const request = axios.create({
  baseURL: "https://localhost:443/"
});

export default request;
