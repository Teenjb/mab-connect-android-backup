import {
  TextInput,
  SafeAreaView,
  Pressable,
  Text,
  View,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import client from "../Api/Client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp({ navigation }) {
  const [value, setValue] = useState(null);
  const [signUpData, setSignUpData] = useState({
    nama: "",
    email: "",
    password: "",
    tanggallahir: new Date(),
    jeniskelamin: value,
    username: "",
    alamat: "",
    nomorhp: "",
  });
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Laki-laki", value: "laki" },
    { label: "Perempuan", value: "perempuan" },
  ]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setSignUpData({ ...signUpData, tanggallahir: currentDate });
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: signUpData.tanggallahir,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const register = async () => {
    setSignUpData({...signUpData, jeniskelamin: value})
    await client
      .post("/auth/local/register", signUpData)
      .then((response) => {
        if (response.status === 200) {
          AsyncStorage.setItem("login", JSON.stringify(response.data));
          navigation.navigate("Dashboard");
        } else {
          alert("Invalid Input");
        }
      })
      .catch((error,response) => {
        console.log(response);
        alert("Invalid Input");
      });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FFF8EB]">
      <View className="flex-1 items-center justify-center">
        <View className="items-center justify-center px-10 py-5">
          <Text className=" font-medium text-2xl">Get Started with MAB</Text>
          <Text className=" text-gray-600">Geting started is easy</Text>
        </View>
        <View className="items-center justify-center">
          <View className="w-screen items-center justify-center px-20 py-2">
            <TextInput
              className="w-full p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="Username"
              value={signUpData.username}
              type="password"
              keyboardType="password"
              onChangeText={(username) => {
                setSignUpData({ ...signUpData, username: username });
              }}
            />
            <TextInput
              className="w-full p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="Email"
              value={signUpData.email}
              type="email"
              keyboardType="email"
              onChangeText={(email) => {
                setSignUpData({ ...signUpData, email: email });
              }}
            />
            <TextInput
              className="w-full p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="name"
              value={signUpData.nama}
              type="name"
              keyboardType="text"
              onChangeText={(nama) => {
                setSignUpData({ ...signUpData, nama: nama});
              }}
            />
            <TextInput
              className="w-full p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="Address"
              value={signUpData.alamat}
              type="name"
              keyboardType="text"
              onChangeText={(alamat) => {
                setSignUpData({ ...signUpData, alamat: alamat});
              }}
            />
            <TextInput
              className="w-full p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="Phone Number"
              value={signUpData.nomorhp}
              type="number"
              keyboardType="number"
              onChangeText={(nomorhp) => {
                setSignUpData({ ...signUpData, nomorhp: nomorhp});
              }}
            />
            <TextInput
              className="w-full p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
              placeholder="Password"
              value={signUpData.password}
              type="password"
              keyboardType="password"
              onChangeText={(password) => {
                setSignUpData({ ...signUpData, password: password });
              }}
            />
            <View className="w-full flex p-2 m-1 items-center justify-center">
            <Text
                  selectable={false}
                  className="w-full items-start justify-center"
                >
                  Date of Birth
                </Text>
              <Pressable
                className="w-full p-2 m-1 justify-center items-center text-orange-400 font-light rounded-xl border border-1 border-orange-400"
                onPress={showDatepicker}
              >
                <Text
                  selectable={false}
                  className="text-orange-400 items-center justify-center font-bold "
                >
                  {signUpData.tanggallahir.toLocaleDateString()}
                </Text>
              </Pressable>
              <DropDownPicker
              className="w-full"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#FFA726",
                  Color: "#FFA726",
                }}
                arrowIconStyle={{
                  color: "#FB923C",
                }}
                placeholderStyle={{
                  color: "#FB923C",
                  fontWeight: "bold"
                }}
                labelStyle={{
                  color: "#FB923C",
                  fontWeight: "bold"
                }}
                iconContainerStyle={{
                  color: "#FB923C",
                }}
                containerStyle={{
                  backgroundColor: "transparent",
                  borderColor: "#FB923C",
                }}
                dropDownContainerStyle={{
                  backgroundColor: "#FFF8EB",
                  borderColor: "#FB923C",
                  itemsAlign: "center",
                }}
                dropDownDirection="TOP"
                placeholder="Gender"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeSearchText={(text) => {
                  setSignUpData({ ...signUpData, jeniskelamin: text });
                }}
              />
            </View>
          </View>
          <Pressable className="w-32 px-1 py-2 mx-1 mb-2 items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500 shadow-md" onPress={register}>
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
