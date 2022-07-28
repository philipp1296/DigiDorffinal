import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

function AccountScreen({ navigation }) {
  // get current user
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        {/* render profildata */}
        <ListItem
          title={user.name}
          subTitle={user.email}
          subsubTitle={user.type}
          image={require("../assets/profil.png")}
        />
      </View>
      <View style={styles.listitems}>
        {/* button to move to own listings */}
        <ListItem
          title="Meine Angebote"
          ImageComponent={
            <Icon name="format-list-bulleted" backgroundColor={colors.grey} />
          }
          onPress={() => navigation.navigate("MyListings")}
        />
      </View>
      {/* button to logout of account */}
      <ListItem
        title="Abmelden"
        ImageComponent={
          <Icon name="logout" backgroundColor={colors.greygreen} />
        }
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
  listitems: {
    marginBottom: 20,
  },
});

export default AccountScreen;
