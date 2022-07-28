import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

// handle the authentification via token
const key = "authToken";

// store the current usertoken on login
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error stroing auth token", error);
  }
};

// get the current usertoken
const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

// remove current usertoken on logout
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("error removing the auth token", error);
  }
};

// get the curent user
const getUser = async () => {
  const token = await getToken();
  if (token) return jwtDecode(token);
  return null;
};

export default { getUser, removeToken, storeToken };
