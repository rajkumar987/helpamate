import React from "react";
import OnBoarding from "../components/OnBoarding";
import { Text, View } from "../components/Themed";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View style={styles.container}>
      <OnBoarding />
      <StatusBar style="auto" />
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
