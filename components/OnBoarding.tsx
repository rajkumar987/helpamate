import React, { useState, useRef } from "react";
import { FlatList, StyleSheet, Animated } from "react-native";
import { pages } from "../utils/contants";
import { Text, View } from "./Themed";
import OnBoaringItem from "./OnBoaringItem";
import OnBoradingPaginator from "./OnBoradingPaginator";

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        <FlatList
          data={pages}
          renderItem={({ item }) => <OnBoaringItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <OnBoradingPaginator
        pages={pages}
        scrollX={scrollX}
        currentIndex={currentIndex}
        slideRef={slideRef}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
