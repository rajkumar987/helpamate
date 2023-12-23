import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

const welcome = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View className="items-center justify-center">
        <Text className="text-5xl">Welcome</Text>
        <Image
          source={require("../assets/images/welcome.jpg")}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
      </View>
      <View className="flex-1 w-4/5 items-center gap-4">
        <TouchableOpacity className="bg-black px-10 py-2.5 rounded-full w-full">
          <Text className="text-white text-xl text-center">Sign In</Text>
        </TouchableOpacity>
        <Text className="text-xl font-semibold">Or</Text>
        <Text className="text-gray-600">If you are a first time user ?</Text>
        <TouchableOpacity className="bg-black px-10 py-2.5 rounded-full w-full">
          <Text className="text-white text-xl text-center">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
});
