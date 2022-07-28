import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";

import ListItem from "../components/ListItem";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";
import client from "../api/client";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  // create const for user of the current listing
  const [currentUser, setCurrentUser] = useState(undefined);

  // get and set current user of the listing
  client
    .get("/users/")
    .then((rsp) =>
      setCurrentUser(rsp.data.find((x) => x.id === listing.userId))
    );

  return (
    <Screen>
      <View>
        {/* render the information about listing */}
        <Image style={styles.image} source={{ uri: listing.images[0].url }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.village}>{listing.village}</AppText>
          {/* conditional rendering */}
          {listing.date !== "" && (
            <AppText style={styles.subTitle}>
              <Text style={{ fontWeight: "700" }}>Datum: </Text>
              {listing.date}
            </AppText>
          )}
          {/* conditional rendering */}
          {listing.intervall !== "" && (
            <AppText style={styles.subTitle}>
              <Text style={{ fontWeight: "700" }}>Wiederholung: </Text>
              {listing.intervall}
            </AppText>
          )}
          {/* conditional rendering */}
          {listing.description !== "" && (
            <AppText style={styles.subTitle}>
              <Text style={{ fontWeight: "700" }}>Beschreibung: {"\n"}</Text>
              {listing.description}
            </AppText>
          )}
          {/* render the creator of the listing from current user*/}
          <View style={styles.userContainer}>
            {currentUser && (
              <ListItem
                image={require("../assets/profil.png")}
                title={currentUser.name}
                subTitle={currentUser.email}
                subsubTitle={currentUser.type}
              />
            )}
          </View>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  village: {
    color: colors.greygreen,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
  subTitle: {
    paddingBottom: 8,
  },
});
export default ListingDetailsScreen;
