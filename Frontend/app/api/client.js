import { create } from "apisauce";

// set baseURL to the server (database)
const apiClient = create({
  baseURL: "http://192.168.178.95:9000/api",
});

export default apiClient;
