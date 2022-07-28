import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";
import usersApi from "../api/users";
import authApi from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";

// validate input data from registration
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  type: Yup.string().required().label("Typ"),
});

function RegisterScreen() {
  const auth = useAuth();
  const [error, setError] = useState();

  // handle registration
  const handleSubmit = async (userInfo) => {
    const result = await usersApi.register(userInfo);

    // check if error message is available
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("Unerwarteter Fehler");
        console.log(result);
      }
      return;
    }

    // login the user after the registration
    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/brett.jpg")} />
      <AppForm
        initialValues={{ name: "", email: "", password: "", type: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="E-mail"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Passwort"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCorrect={false}
          icon="account-question"
          name="type"
          placeholder="Typ (Privatperson, Verein, Organisation, ...)"
        />
        <SubmitButton title="Registrieren" onPress={handleSubmit} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
});

export default RegisterScreen;
