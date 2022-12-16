import {
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import client from "../Api/Client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DocumentPicker from 'expo-document-picker';

import UniversalHeader from "../Component/UniversalHeader";

export default function PendaftaranBeasiswa({ navigation }) {
  const [pondokanResult, setPondokanResult] = useState(null);
  const [BeasiswaMABData, setBeasiswaMABData] = useState({
    pondokan: "",
  });

  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    { label: "iya", value: "iya" },
    { label: "tidak", value: "tidak" },
  ]);

  const [doc, setDoc] = useState({
    wali_slipgaji: "",
    essaydoc: "",
    transkripnilaidoc: "",
    cvdoc: "",
  });

  const pickDocument = async (doctype) => {
    console.log('hello')
    await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
      if (response.type == 'success') {
        let { name, size, uri } = response;
        let nameParts = name.split('.');
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          uri: uri,
          type: "application/" + fileType
        };
        console.log(fileToUpload, '...............file')

        switch (doctype) {
          case "wali_slipgaji":
            setDoc({ ...doc, wali_slipgaji: fileToUpload })
            break;
          case "essaydoc":
            setDoc({ ...doc, essaydoc: fileToUpload })
            break;
          case "transkripnilaidoc":
            setDoc({ ...doc, transkripnilaidoc: fileToUpload })
            break;
          case "cvdoc":
            setDoc({ ...doc, cvdoc: fileToUpload })
            break;

        }
        // setSingleDoc(fileToUpload);
      }
    });
    // console.log(result);
    console.log(doc)
  }

  const registerBeasiswaMAB = async () => {
    console.log(BeasiswaMABData);
    const dataForm = new global.FormData()
    dataForm.append('data', JSON.stringify(BeasiswaMABData));
    dataForm.append('files.essaydoc', doc.essaydoc);
    dataForm.append('files.wali_slipgaji', doc.wali_slipgaji);
    dataForm.append('files.cvdoc', doc.cvdoc);
    dataForm.append('files.transkripnilaidoc', doc.transkripnilaidoc);

    let loginData;
    try {
      loginData = JSON.parse(await AsyncStorage.getItem('login'));
      if (loginData !== null) {
        // We have data!!
        console.log(loginData);
      }
    } catch (error) {
      console.log('error')
    }

    await client
      .post("/beasiswa-datas/current", dataForm, {
        headers: {
          "Authorization": "Bearer " + loginData.jwt,
        }
      })
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate("Confirmation")
        }
      })
      .catch((error) => {
        console.log(error.response.data.error.message);
        alert(error.response.data.error.message);
      });
  }

  return (
    <SafeAreaView className="flex-1 w-screen bg-white">
      <UniversalHeader lightText="Beasiswa " boldText = "MAB" />
      <View className="flex-1 items-center justify-center">
        <View className="mt-20 w-3/4 items-center justify-center">
          <View className="w-full items-start justify-center mt-2 pt-5">
            <Text className="ml-4 mt-2 text-blue-600 font-bold">
              Penghasilan Orang Tua
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left rounded-full border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-600  font-bold">
              Daya Listrik
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left rounded-full border border-1 border-orange-400" />
          </View>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">Slip Gaji</Text>
          <Pressable className="my-3 w-full rounded-full items-center justify-center px-10 py-2 bg-orange-400 active:bg-orange-500 shadow-md" onPress={() => pickDocument('wali_slipgaji')}>
            <Text className="text-white items-center font-bold " numberOfLines={1}>
            {doc.wali_slipgaji.name ? doc.wali_slipgaji.name : 'Upload Here'}
            </Text>
          </Pressable>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">Essay</Text>
          <Pressable className="my-3 w-full rounded-full items-center justify-center px-10 py-2 bg-orange-400 active:bg-orange-500 shadow-md" onPress={() => pickDocument('essaydoc')}>
            <Text className="text-white items-center font-bold " numberOfLines={1}>
            {doc.essaydoc.name ? doc.essaydoc.name : 'Upload Here'}
            </Text>
          </Pressable>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">
            Transkrip Nilai
          </Text>
          <Pressable className="my-3 w-full rounded-full items-center justify-center px-10 py-2 bg-orange-400 active:bg-orange-500 shadow-md" onPress={() => pickDocument('transkripnilaidoc')}>
            <Text className="text-white items-center font-bold " numberOfLines={1}>
            {doc.transkripnilaidoc.name ? doc.transkripnilaidoc.name : 'Upload Here'}
            </Text>
          </Pressable>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">CV</Text>
          <Pressable className="my-3 w-full rounded-full items-center justify-center px-10 py-2 bg-orange-400 active:bg-orange-500 shadow-md" onPress={() => pickDocument('cvdoc')}>
            <Text className="text-white items-center font-bold" numberOfLines={1}>
            {doc.cvdoc.name ? doc.cvdoc.name : 'Upload Here'}
            </Text>
          </Pressable>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">
            Pondokan
          </Text>
          <DropDownPicker
                className="w-full p-2 m-1 margin-left  text-orange-400 font-light rounded-xl border border-1 border-orange-400"
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
                placeholder="..."
                open={open}
                value={pondokanResult}
                items={items}
                setOpen={setOpen}
                setValue={setPondokanResult}
                setItems={setItems}
                onChangeSearchText={(text) => {
                  setBeasiswaMABData({ ...BeasiswaMABData, pondokan: text });
                }}
              />
        </View>
        <View>
            <Pressable className="w-full px-6 py-2 mx-1 mt-5 items-center justify-center rounded-full bg-blue-600 active:bg-blue-700 font-bol800 shadow-md" onPress={registerBeasiswaMAB}>
              <Text
                selectable={false}
                className="text-white items-center font-bold "
              >
                Daftar
              </Text>
            </Pressable>
          </View>
      </View>
    </SafeAreaView>
  );
}
