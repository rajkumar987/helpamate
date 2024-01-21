import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";

const OnBoaringItem = ({ item }: any) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.constainer, { width, height }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.4 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

export default OnBoaringItem;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 32,
    marginBottom: 10,
    textAlign: "center",
    color: "black",
  },

  subtitle: {
    fontWeight: "300",
    color: "gray",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
