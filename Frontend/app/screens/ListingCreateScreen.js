import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import AppFormPicker from "../components/AppFormPicker";
import SubmitButton from "../components/SubmitButton";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";

import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/FormImagePicker";
import UploadScreen from "./UploadScreen";
import { ScrollView } from "react-native-gesture-handler";

// create shema for one listing and validate them via yup
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Bitte Titel angeben!").min(1).label("Titel"),
  village: Yup.string()
    .required("Bitte Ort angeben!")
    .min(1)
    .max(10000)
    .label("Ort"),
  description: Yup.string()
    .required("Bitte Beschreibung angeben!")
    .label("Beschreibung"),
  category: Yup.object()
    .required("Bitte eine Kategorie auswählen!")
    .nullable()
    .label("Kategorie"),
  date: Yup.string().label("Datum"),
  intervall: Yup.string().label("Intervall"),
  images: Yup.array().min(1, "Mindestens ein Bild auswählen!"),
});

// set categories to choose from
const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "basketball",
    label: "Sport und Freizeit",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "silverware-fork-knife",
    label: "Veranstaltungen",
    value: 2,
  },
  {
    backgroundColor: "#26de81",
    icon: "cash-fast",
    label: "Verkauf",
    value: 3,
  },
  {
    backgroundColor: "#fed330",
    icon: "magnify",
    label: "Suche",
    value: 4,
  },
  {
    backgroundColor: "lightblue",
    icon: "pencil",
    label: "Lernen",
    value: 5,
  },
  {
    backgroundColor: "purple",
    icon: "cart-variant",
    label: "Aktionen",
    value: 6,
  },
];

function ListingCreateScreen() {
  // set upload const
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // get the user who create the listing
  const { user, logOut } = useAuth();

  // handle the upload animation
  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(listing, (progress) =>
      setProgress(progress)
    );
    setUploadVisible(false);

    // alert result if upload was successfull
    if (!result.ok) return alert("Ein Fehler ist aufgetreten");
    alert("Erfolgreich veröffentlich!");

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <UploadScreen progress={progress} visible={uploadVisible} />
        <AppForm
          initialValues={{
            title: "",
            village: "",
            description: "",
            date: "",
            intervall: "",
            category: null,
            images: [],
            userId: user.userId,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
          <AppFormField maxLength={255} name="title" placeholder="Titel*" />
          <AppFormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Beschreibung*"
          />
          <AppFormField
            maxLength={255}
            name="village"
            placeholder="Ort*"
            width="70%"
          />
          <AppFormPicker
            items={categories}
            name="category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Kategorie*"
            width="50%"
          />
          <AppFormField
            maxLength={255}
            name="date"
            placeholder="Datum: tt/mm/jjjj"
            width="50%"
            keyboardType="numbers-and-punctuation"
          />
          <AppFormField
            maxLength={255}
            name="intervall"
            placeholder="Intervall"
            width="70%"
          />
          <SubmitButton title="Veröffentlichen" />
          <AppText style={styles.text}>* = Pflichtfeld</AppText>
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    padding: 10,
  },
});
export default ListingCreateScreen;
