import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export const getUsers = () => axios.get("/users");

export const getProducts = () => axios.get("/products");

export const createProduct = (data) => axios.create("/products", data);

export const destroyProduct = (id) => axios.delete(`/products/${id}`);

export const getProduct = (id) => axios.get(`products/${id}`);

export const signup = async (data) => {
  const res = await axios.post("/auth/signup", data);
  console.log({ res });
  return res;
};

export const login = async (data) => {
  const res = await axios.post("/auth/signin", data);
  return res;
};
