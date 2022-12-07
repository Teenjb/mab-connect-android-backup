import {
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
} from "react-native";

import React, { useState, useEffect } from "react";
import axios from "axios";
import client from "../Api/Client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });

  const login = async () => {
    await client
      .post("/auth/local", loginData)
      .then((response) => {
        console.log();
        if (response.status === 200) {
          AsyncStorage.setItem("login", JSON.stringify(response.data));
          navigation.navigate("Dashboard");
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error,response) => {
        console.log(error);
        console,log(response);
        alert("Invalid Credentials");
      });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FFF8EB]">
      <View className="flex-1 items-center justify-start">
        <Image className="w-full" source={require("../assets/login.png")} />
        <View className="items-center justify-center">
          <View className="items-center justify-center px-10 py-10">
            <TextInput
              className="w-56 p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-2 border-orange-400"
              value={loginData.identifier}
              type="email"
              keyboardType="email-address"
              onChangeText={(identifier) => {
                setLoginData({ ...loginData, identifier: identifier });
              }}
              placeholder="Username or Email"
            />
            <TextInput
              className="w-56 p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-2 border-orange-400"
              value={loginData.password}
              type="password"
              keyboardType="password"
              onChangeText={(password) => {
                setLoginData({ ...loginData, password: password });
              }}
              placeholder="Password"
            />
          </View>
          <Pressable className="w-56 p-2 m-1 margin-left  text-white-400 bg-yellow-300 shadow-lg active:bg-yellow-400 font-light rounded-full" onPress={login}>
            <Text className="text-center text-white font-bold">
              Login
            </Text>
          </Pressable>
          <View className="py-2 mx-1 my-1 text-center items-center justify-center">
            <Text className="" onPress={() => navigation.navigate("SignUp")}>
              Don't have account? Register
            </Text>
            <Text className="">Untuk kerjasama click here</Text>
          </View>
          <View className="flex items-center justify-center">
            <Text className="flex py-10 justify-center items-center text-sm font-light">
              Developed by Mata Air Biru
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
