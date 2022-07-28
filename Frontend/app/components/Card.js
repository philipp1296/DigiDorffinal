import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

// implement reusable cardcomponent for each listing on listingscreen with the information

function Card({ title, subTitle, onPress, imageUrl, onDelete }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
          {/* handle delete option, only in MyListingScreen */}
          {onDelete && <Button onPress={onDelete} title="Löschen" />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.greygreen,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
