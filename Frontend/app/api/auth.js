import client from "./client";

// call server via api to login a user (check data)
const login = (email, password) => client.post("/auth", { email, password });

export default {
  login,
};
