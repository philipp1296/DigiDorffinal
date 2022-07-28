import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import AppText from "../components/AppText";
import colors from "../config/colors";

// implement Screen while listing is uploaded
function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {/* set progressbar animation while listing is uploaded */}
        <AppText style={{ color: colors.greygreen }}>Wird hochgeladen</AppText>
        <Progress.Bar progress={progress} color={colors.greygreen} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
