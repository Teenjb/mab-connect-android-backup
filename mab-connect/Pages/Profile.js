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

export default function Profile({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#FFF8EB]">
      <View className="flex-1 items-center justify-center">
        <View className="mx-10">
          <View className="flex flex-row">
            <Pressable className="w-32 px-1 py-2 mx-1 mb-2 flex-1 items-center justify-center rounded-full bg-blue-800 active:bg-orange-4 mt-2 active:bg-orange-400 hover: font-bold shadow-md">
              <Text
                selectable={false}
                className="text-white items-center  font-bold "
              >
                Donatur
              </Text>
            </Pressable>
            <Pressable className="w-32 px-1 py-2 mx-1 mb-2 flex-1 items-center justify-center rounded-full bg-blue-800 active:bg-orange-4 mt-2 active:bg-orange-400  font-bold shadow-md">
              <Text
                selectable={false}
                className="text-white items-center  font-bold "
              >
                Awardee
              </Text>
            </Pressable>
          </View>
          <View className="items-start justify-center mt-5">
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Nama
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Tanggal Lahir
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Jenis Kelamin
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Jurusan
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Fakultas
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Alamat
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Kota
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Provinsi
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400" />
          </View>
          <Pressable className="fixed w-full px-1 py-2 mx-1 mt-5 flex-1 items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500  font-bol800 shadow-md">
            <Text
              selectable={false}
              className="text-white items-center  font-bold "
            >
              Simpan
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
