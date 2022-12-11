import {
  TextInput,
  SafeAreaView,
  Pressable,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import client from "../Api/Client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DocumentPicker from 'expo-document-picker';



export default function SignUpBeasiswaMAB({ navigation }) {
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

    const body = {
      "data": BeasiswaMABData,
      "files.essaydoc": doc.essaydoc,
      "files.wali_slipgaji": doc.wali_slipgaji,
      "files.cvdoc": doc.cvdoc,
      "files.transkripnilaidoc": doc.transkripnilaidoc
    };

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
          alert("Successfully uploaded, Check the status at your dashboard");
          navigation.navigate("Dashboard")
        }
      })
      .catch((error) => {
        console.log(error.response.data.error.message);
        alert(error.response.data.error.message);
      });



  }



  return (
    <SafeAreaView className="flex-1 bg-[#FFF8EB]">
      <View className="items-center justify-center px-10 py-5  top-10 my-6">
        <Text className=" font-medium text-4xl">Beasiswa MAB</Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <View className="items-center justify-center">
          <View className="w-screen justify-center px-20 ">
            <View>
              <Text className="justify-start w-full p-1 margin-left">Slip Gaji</Text>
              <Pressable onPress={() => pickDocument('wali_slipgaji')} className="w-full p-2 m-1 items-center justify-center rounded-full  bg-orange-400 active:bg-orange-600 shadow-md">
                <Text
                  selectable={false}
                  className="text-white font-bold "
                >
                  {doc.wali_slipgaji.name ? doc.wali_slipgaji.name : 'Upload Here'}

                </Text>
              </Pressable>
            </View>
            <View>
              <Text className="justify-start w-full p-1 margin-left">Essay</Text>
              <Pressable onPress={() => pickDocument('essaydoc')} className="w-full p-2 m-1 items-center justify-center rounded-full  bg-orange-400 active:bg-orange-600 shadow-md">
                <Text
                  selectable={false}
                  className="text-white font-bold "
                >
                  {doc.essaydoc.name ? doc.essaydoc.name : 'Upload Here'}
                </Text>
              </Pressable>
            </View>
            <View>
              <Text className="justify-start w-full p-1 margin-left">Transkrip Nilai</Text>
              <Pressable onPress={() => pickDocument('transkripnilaidoc')} className="w-full p-2 m-1 items-center justify-center rounded-full  bg-orange-400 active:bg-orange-600 shadow-md">
                <Text
                  selectable={false}
                  className="text-white font-bold "
                >
                  {doc.transkripnilaidoc.name ? doc.transkripnilaidoc.name : 'Upload Here'}
                </Text>
              </Pressable>
            </View>
            <View>
              <Text className="justify-start w-full p-1 margin-left">CV</Text>
              <Pressable onPress={() => pickDocument('cvdoc')} className="w-full p-2 m-1 items-center justify-center rounded-full  bg-orange-400 active:bg-orange-600 shadow-md">
                <Text
                  selectable={false}
                  className="text-white font-bold "
                >
                  {doc.cvdoc.name ? doc.cvdoc.name : 'Upload Here'}
                </Text>
              </Pressable>
            </View>


            <View>
              <Text className="justify-start w-full p-1 margin-left">Pondokan</Text>
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
          </View>
          <Pressable onPress={registerBeasiswaMAB} className="w-32 px-1 py-2 mx-1 mb-2 items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500 shadow-md">
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
