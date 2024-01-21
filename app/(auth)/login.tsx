import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState<
    "eye-outline" | "eye-off-outline"
  >("eye-outline");
  useEffect(() => {
    setShowPasswordIcon(!showPassword ? "eye-outline" : "eye-off-outline");
  }, [showPassword]);
  return (
    <View className="flex-1  justify-center items-center w-screen ">
      <View className="w-4/5  items-center gap-10 ">
        <Text className="text-3xl">Hello, Sign in!</Text>
        <View className="w-full gap-3">
          <TextInput
            placeholder="Enter your username or email address"
            placeholderTextColor={"gray"}
            className="border border-gray-500 py-3 pl-3 rounded-lg text-gray-500"
          />
          <View className="flex-row" style={styles.password}>
            <TextInput
              placeholder="Enter your password"
              className="border border-gray-500 py-3 pl-3 rounded-lg text-gray-500 flex-1"
              secureTextEntry={!showPassword}
              placeholderTextColor={"gray"}
            />
            <TouchableOpacity
              style={styles.passwordShow}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons name={showPasswordIcon} size={18} color="black" />
            </TouchableOpacity>
            {/* <Ionicons name="eye-off-outline" size={24} color="black" /> */}
          </View>
          <Link className="text-center" href="/(auth)/forgotpassword">
            Forgot Password?
          </Link>
        </View>
        <TouchableOpacity className="bg-black px-10 py-2.5 rounded-full w-full">
          <Text className="text-white text-xl text-center">Sign In</Text>
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
              href="/(auth)/register"
              className="text-blue-500 font-semibold "
            >
              Sign Up
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  password: {
    position: "relative",
  },
  passwordShow: {
    position: "absolute",
    right: 10,
    top: "30%",
  },
});
