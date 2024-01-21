import React from "react";
import OnBoarding from "../components/OnBoarding";
import { View } from "../components/Themed";
import { StyleSheet } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <OnBoarding />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
