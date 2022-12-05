import {
  TextInput,
  SafeAreaView,
  Pressable,
  Text,
  View,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import client from "../Api/Client";

export default function SignUp({ navigation }) {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    date: new Date(),
  });
  const [dateOpen, setDateOpen] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-[#FFF8EB]">
      <View className="flex-1 items-center justify-center">
        <View className="items-center justify-center px-10 py-5">
          <Text className=" font-medium text-2xl">Get Started with MAB</Text>
          <Text className=" text-gray-600">Geting started is easy</Text>
          <View className="mt-2 flex-row items-center justify-center">
            <Pressable className="w-32 px-1 py-2 mx-1 mb-2  items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500">
              <Text
                selectable={false}
                className="text-white items-center  font-bold "
              >
                Google
              </Text>
            </Pressable>
            <Pressable className="w-32 px-1 py-2 mx-1 mb-2  items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500">
              <Text
                selectable={false}
                className="text-white items-center  font-bold "
              >
                Facebook
              </Text>
            </Pressable>
          </View>
        </View>
        <Text className="">Or continue with:</Text>
        <View className="items-center justify-center">
          <View className="items-center justify-center px-10 py-2">
            <TextInput
              className="w-56 p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="Username"
            />
            <TextInput
              className="w-56 p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="Email"
            />
            <TextInput
              className="w-56 p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="name"
            />
            <TextInput
              className="w-56 p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="Address"
            />
            <TextInput
              className="w-56 p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="Phone Number"
            />
            <TextInput
              className="w-56 p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="Password"
            />
            <View className="w-56 p-2 m-1 items-center justify-center">
              <Button
                className=""
                title="open"
                onPress={() => setDateOpen(true)}
              />
            </View>
          </View>
          <Pressable className="w-32 px-1 py-2 mx-1 mb-2 items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500 shadow-md">
            <Text
              selectable={false}
              className="text-white items-center font-bold "
            >
              Register
            </Text>
          </Pressable>
          <View className="py-2 mx-1 my-1 text-center justify-center">
            <Text className="" onPress={() => navigation.navigate("Login")}>
              Already have account? Login
            </Text>
          </View>
          <View className="flex items-center justify-center">
            <Text className=" flex py-5 justify-center items-center  text-sm font-light">
              Developed by Mata Air Biru
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
