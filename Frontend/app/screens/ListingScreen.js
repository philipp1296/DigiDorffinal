import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  View,
} from "react-native";
import listingsApi from "../api/listings";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  // get all listings from server
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  // set the filter and search options
  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState("");

  const [freizeit, setFreizeit] = useState(false);

  const [veranstaltungen, setVeranstaltungen] = useState(false);

  const [verkaufe, setVerkaufe] = useState(false);

  const [suche, setSuche] = useState(false);

  const [lernen, setLernen] = useState(false);

  const [aktion, setAktion] = useState(false);

  // check if one filter is active
  const parseCategory = (x) => {
    if (freizeit && x.categoryId === 1) return true;
    if (veranstaltungen && x.categoryId === 2) return true;
    if (verkaufe && x.categoryId === 3) return true;
    if (suche && x.categoryId === 4) return true;
    if (lernen && x.categoryId === 5) return true;
    if (aktion && x.categoryId === 6) return true;
    return false;
  };

  return (
    <Screen style={styles.screen}>
      {/* handle error if server is offline */}
      {getListingsApi.error && (
        <>
          <AppText>
            Einträge konnten nicht geladen werden, bitte später wieder
            versuchen!
          </AppText>
          <AppButton
            title="Erneut versuchen"
            onPress={getListingsApi.request}
          />
        </>
      )}

      {/* render all categories as button to filter and the press event to activate the filter */}
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Pressable
          style={[
            styles.button,
            freizeit ? { backgroundColor: "lightgrey" } : {},
          ]}
          onPress={() => setFreizeit(!freizeit)}
        >
          <Text style={styles.text}>{"Sport und Freizeit"}</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            veranstaltungen ? { backgroundColor: "lightgrey" } : {},
          ]}
          onPress={() => setVeranstaltungen(!veranstaltungen)}
        >
          <Text style={styles.text}>{"Veranstaltungen"}</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            verkaufe ? { backgroundColor: "lightgrey" } : {},
          ]}
          onPress={() => setVerkaufe(!verkaufe)}
        >
          <Text style={styles.text}>{"Verkauf"}</Text>
        </Pressable>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Pressable
          style={[styles.button, suche ? { backgroundColor: "lightgrey" } : {}]}
          onPress={() => setSuche(!suche)}
        >
          <Text style={styles.text}>{"Suche"}</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            lernen ? { backgroundColor: "lightgrey" } : {},
          ]}
          onPress={() => setLernen(!lernen)}
        >
          <Text style={styles.text}>{"Lernen"}</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            aktion ? { backgroundColor: "lightgrey" } : {},
          ]}
          onPress={() => setAktion(!aktion)}
        >
          <Text style={styles.text}>{"Aktionen"}</Text>
        </Pressable>
      </View>

      {/* render searchbar to search for title or village */}
      <TextInput
        style={styles.search}
        placeholder="Suche nach Titel oder Wohnort"
        onChangeText={setSearch}
      />
      <FlatList
        data={getListingsApi.data

          // sort all listings in opposite direction to get newest first
          .sort((a, b) => (a.id > b.id ? -1 : b.id < a.id ? 1 : 0))

          // check if either filter or search is active and filter the lisitings if
          .filter((x) =>
            freizeit || veranstaltungen || verkaufe || suche || lernen || aktion
              ? parseCategory(x)
              : search.trim()
              ? x.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
                x.village.toLowerCase().includes(search.toLocaleLowerCase())
              : true
          )}
        keyExtractor={(listing) => listing.id.toString()}
        // handle pulldown to refresh
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await getListingsApi.request();
          setRefreshing(false);
        }}
        // render all listings
        renderItem={({ item }) => (
          <Card
            // pass all data
            title={item.title}
            subTitle={item.village}
            date={item.date}
            intervall={item.intervall}
            description={item.description}
            imageUrl={item.images[0].url}
            // navigate to the seperate Listingscreen
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  button: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "lightgrey",
  },
  search: {
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 5,
    height: 30,
    marginTop: 10,
    marginBottom: 15,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
});
export default ListingScreen;
