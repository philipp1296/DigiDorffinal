import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default {
  ...DefaultTheme, //... heist kopieren
  colors: {
    ...DefaultTheme.colors,
    primary: colors.greygreen, //überschreiben
    background: colors.white,
  },
};
