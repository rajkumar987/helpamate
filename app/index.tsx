import { Redirect, useRouter } from "expo-router";
import { getItem } from "../utils/asyncStorage";
import { useEffect } from "react";
import { View } from "react-native";

export default function index() {
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const ONBOARDED = await getItem("ONBOARDED");
      router.replace(ONBOARDED ? "/(auth)/login" : "/onboarding");
    };
    getData();
  }, []);

  return <View></View>;
}
