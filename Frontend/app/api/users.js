import client from "./client";

// call server via api to register a user
const register = (userInfo) => client.post("/users", userInfo);

export default { register };
