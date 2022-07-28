import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      source={require("../assets/dorf.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.Line}>DigiDorf</Text>
        <Text style={styles.tagLine}>Das digitale schwarze Brett</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {/* navigate to Loginscreen */}
        <AppButton
          title="Login"
          onPress={() => navigation.navigate("Login")}
          color="grey"
        />

        {/* navigate to Registerscreen */}
        <AppButton
          title="Registrieren"
          onPress={() => navigation.navigate("Registrieren")}
          color="greygreen"
        />
      </View>

      {/* navigate to Visitorscreen */}
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Gastzugang")}
      >
        <Text style={styles.subLine}>Weiter als Gast</Text>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  Line: {
    fontSize: 40,
    fontWeight: "600",
    paddingTop: 110,
    paddingBottom: 20,
    color: colors.light,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.light,
  },
  subLine: {
    fontSize: 15,
    fontWeight: "400",
    paddingVertical: 5,
    color: colors.light,
    marginBottom: 40,
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
