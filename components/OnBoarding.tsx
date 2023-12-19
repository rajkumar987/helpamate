import React, { useState } from "react";
import { Text, View } from "./Themed";
import { TouchableOpacity } from "react-native";
import { Page } from "../utils/interfaces";

const OnBoarding = ({ pages }: { pages: Page[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <View className="w-full h-screen justify-around ">
      <View>
        {pages[currentPage].image}
        <View className="items-center gap-4 px-5">
          <Text className="text-3xl font-semibold tracking-wider">
            {pages[currentPage].title}
          </Text>
          <Text className="text-gray-400 font-medium text-center">
            {pages[currentPage].subtitle}
          </Text>
        </View>
      </View>

      <View className=" flex-row  justify-between items-center px-5 ">
        <TouchableOpacity>
          <Text className="text-lg tracking-wider text-gray-600">Skip</Text>
        </TouchableOpacity>
        <View className="flex-row gap-2">
          {pages.map((page, _pageIndex) => {
            return (
              <TouchableOpacity
                onPress={() => setCurrentPage(_pageIndex)}
                key={_pageIndex}
              >
                <View
                  className={`w-2 h-2 rounded-full ${
                    _pageIndex == currentPage ? "bg-blue-800" : "bg-gray-400"
                  }`}
                ></View>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          onPress={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage == pages.length - 1}
        >
          <Text className="text-lg tracking-wider text-gray-600">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
