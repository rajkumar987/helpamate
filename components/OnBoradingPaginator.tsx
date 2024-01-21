import {
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text } from "./Themed";
import { router } from "expo-router";
import { setItem } from "../utils/asyncStorage";

const OnBoradingPaginator = ({
  pages,
  scrollX,
  currentIndex,
  slideRef,
}: any) => {
  const [buttonText, setButtonText] = useState("Next");

  const { width } = useWindowDimensions();
  useEffect(() => {
    if (currentIndex + 1 == pages.length) {
      setButtonText("Login");
    } else {
      setButtonText("Next");
    }
  }, [currentIndex]);

  const handlePress = async (buttonType: string) => {
    switch (buttonType) {
      case "skip":
        slideRef.current.scrollToIndex({ index: pages.length - 1 });
        return;
      case "Next":
        slideRef.current.scrollToIndex({ index: currentIndex + 1 });
        return;
      case "Login":
        setItem("ONBOARDED", "true");
        router.replace("/login");
      default:
        return;
    }
  };
  return (
    <View className="w-screen flex-1 flex-row items-center px-4">
      <TouchableOpacity className="flex-1" onPress={() => handlePress("skip")}>
        <Text className="text-lg font-semibold text-black">Skip</Text>
      </TouchableOpacity>
      <View className="flex-row flex-2 justify-center">
        {pages.map((each: any, i: any) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              style={[styles.dot, { width: dotWidth, opacity, marginTop: 5 }]}
              key={i}
            />
          );
        })}
      </View>
      <TouchableOpacity
        className="flex-1 items-end"
        onPress={() => handlePress(buttonText)}
      >
        <Text className="text-lg font-semibold text-black">{buttonText} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoradingPaginator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  dot: {
    height: 8,
    borderRadius: 5,
    backgroundColor: "black",
    marginHorizontal: 5,
  },
});
