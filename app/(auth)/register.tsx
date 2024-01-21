import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Link, router } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState<
    "eye-outline" | "eye-off-outline"
  >("eye-outline");
  useEffect(() => {
    setShowPasswordIcon(!showPassword ? "eye-outline" : "eye-off-outline");
  }, [showPassword]);

  return (
    <SafeAreaView
      className="min-h-screen bg-white space-y-5 pt-3"
      style={styles.container}
    >
      <Pressable
        className="flex items-center flex-row pl-5 "
        onPress={router.back}
      >
        <Ionicons name="chevron-back" size={18} color="black" />
        <Text
          className="text-lg ml-0.5"
          style={{ height: StatusBar.currentHeight }}
        >
          Back
        </Text>
      </Pressable>
      <View className=" items-center space-y-10 pt-5 ">
        <View className="items-center">
          <Text className="text-3xl">Create Account</Text>
        </View>
        <View className="w-5/6 space-y-5">
          <TextInput
            placeholder="Enter Your Name"
            className="border border-gray-500 py-3 pl-5 rounded-lg text-gray-500 "
            placeholderTextColor="gray"
          />
          <TextInput
            placeholder="Enter Your Email "
            className="border border-gray-500 py-3 pl-5 rounded-lg text-gray-500 "
            placeholderTextColor="gray"
          />
          <View className="flex-row" style={styles.password}>
            <TextInput
              placeholder="Enter your password"
              className="border border-gray-500 py-3 pl-3 rounded-lg text-gray-500 flex-1"
              secureTextEntry={!showPassword}
              placeholderTextColor="gray"
            />
            <TouchableOpacity
              style={styles.passwordShow}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons name={showPasswordIcon} size={18} color="black" />
            </TouchableOpacity>
            {/* <Ionicons name="eye-off-outline" size={24} color="black" /> */}
          </View>
          <TextInput
            placeholder="Enter Your Phone Number"
            className="border border-gray-500 py-3 pl-5 rounded-lg text-gray-500 "
            placeholderTextColor="gray"
          />
          <TouchableOpacity className="bg-black px-10 py-2.5 rounded-full w-full">
            <Text className="text-white text-xl text-center">Sign Up</Text>
          </TouchableOpacity>
          <View className="items-center space-y-5">
            <Text className="text-lg font-semibold">Or</Text>
            <Text className="">Sign in with</Text>
            <View className="flex-row space-x-5">
              <TouchableOpacity>
                <AntDesign name="google" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="facebook-square" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row space-x-1">
              <Text> Don't have an account?</Text>
              <Link
                href="/(auth)/login"
                className="text-blue-500 font-semibold "
              >
                Sign In
              </Link>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  password: {
    position: "relative",
  },
  passwordShow: {
    position: "absolute",
    right: 10,
    top: "30%",
  },
});
