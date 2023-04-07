import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4000",
});

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const getLogin = async (payload) => {
  const res = await client.post("/api/v1/auth/signin", payload, config);
  return res.data;
};

export const getSignUp = async (payload) => {
  const res = await client.post("/api/v1/auth/signup", payload);
  return res.data;
};
