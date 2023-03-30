import axios from "axios";
const instance = axios.create({ baseURL: "https://app.apnabillbook.com" });
// const instance = axios.create({ baseURL: "http://localhost:5003" });

export default instance;

// https://app.apnabillbook.com/api/store/50b6506e-8787-4c3e-9321-9ae407da8d75

// /api/product
