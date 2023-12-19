import React from "react";
import OnBoarding from "../components/OnBoarding";
import { pages } from "../utils/contants";
import { Dimensions, Image } from "react-native";
const { width, height } = Dimensions.get("window");

const index = () => {
  return (
    <OnBoarding
      pages={[
        {
          image: (
            <Image
              source={require("../assets/images/4966026.jpg")}
              style={{
                width: width,
                height: height * 0.5,
                resizeMode: "contain",
              }}
            />
          ),
          title: "Clear your Clutter",
          subtitle:
            "Gather all your unused stuff and make it to reach for the needy",
        },
        {
          image: (
            <Image
              source={require("../assets/images/3911161.jpg")}
              style={{
                width: width,
                height: height * 0.5,
                resizeMode: "contain",
              }}
            />
          ),
          title: "Door Step Pickup",
          subtitle:
            "This is the sub Description of the screen showcasing what exactly does this mean for tge applaication flow to check",
        },
      ]}
    />
  );
};

export default index;
