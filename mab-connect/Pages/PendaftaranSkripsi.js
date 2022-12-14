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
import UniversalHeader from "../Component/UniversalHeader";
import client from "../Api/Client";

import * as DocumentPicker from 'expo-document-picker';

export default function PendaftaranSkripsi({ navigation }) {


  const [SkripsiData, setSkripsiData] = useState({
    judul: "",
    namapenulis: "",
    namapembimbing: "",
    pengajuanbiaya: "",
  });

  const [doc, setDoc] = useState({
    proposaldoc: "",
    suratpernyataandoc: "",
    cvdoc: "",
  });

  const pickDocument = async (doctype) => {
    console.log('hello')
    await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
      if (response.type == 'success') {
        let { name,  uri } = response;
        let nameParts = name.split('.');
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          uri: uri,
          type: "application/" + fileType
        };
        console.log(fileToUpload, '...............file')

        switch (doctype) {
          case "proposaldoc":
            setDoc({ ...doc, proposaldoc: fileToUpload })
            break;
          case "suratpernyataandoc":
            setDoc({ ...doc, suratpernyataandoc: fileToUpload })
            break;
          case "cvdoc":
            setDoc({ ...doc, cvdoc: fileToUpload })
            break;

        }
      }
    });
    console.log(doc)
  }

  const registerSkripsi = async () => {
    console.log(SkripsiData);
    const dataForm = new global.FormData()
    dataForm.append('data', JSON.stringify(SkripsiData));
    dataForm.append('files.proposaldoc', doc.proposaldoc);
    dataForm.append('files.suratpernyataandoc', doc.suratpernyataandoc);
    dataForm.append('files.cvdoc', doc.cvdoc);



    await client
      .post("/skripsi-datas/current", dataForm)
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
    <SafeAreaView className="flex-1 w-screen bg-white">
      <UniversalHeader lightText="Beasiswa " boldText="Skripsi" />
      <View className="flex-1 items-center justify-center">
        <View className="mt-20 w-3/4 items-center justify-center">
          <View className="w-full items-start justify-center mt-2 pt-5">
            <Text className="ml-4 mt-2 text-blue-600 font-bold">
              Judul Skripsi
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left rounded-full border border-1 border-orange-400"
              value={SkripsiData.judul}
              onChangeText={(input) => {
                setSkripsiData({ ...SkripsiData, judul: input });
              }}
            />
            <Text className="ml-4 mt-2 text-blue-600  font-bold">
              Nama Penulis
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left rounded-full border border-1 border-orange-400"
              value={SkripsiData.namapenulis}
              onChangeText={(input) => {
                setSkripsiData({ ...SkripsiData, namapenulis: input });
              }}
            />
            <Text className="ml-4 mt-2 text-blue-600  font-bold">
              Nama Pembimbing
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left rounded-full border border-1 border-orange-400"
              value={SkripsiData.namapembimbing}
              onChangeText={(input) => {
                setSkripsiData({ ...SkripsiData, namapembimbing: input });
              }}
            />
            <Text className="ml-4 mt-2 text-blue-600  font-bold">
              Pengajuan Biaya
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left rounded-full border border-1 border-orange-400"
              value={SkripsiData.pengajuanbiaya}
              onChangeText={(input) => {
                setSkripsiData({ ...SkripsiData, pengajuanbiaya: input });
              }}
            />
          </View>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">Surat Pernyataan</Text>
          <Pressable className="my-3 w-full rounded-full items-center justify-center px-10 py-2 bg-orange-400 active:bg-orange-500 shadow-md"
            onPress={() => pickDocument('suratpernyataandoc')}
          >
            <Text className="text-white items-center font-bold " numberOfLines={1}>
              {doc.suratpernyataandoc.name ? doc.suratpernyataandoc.name : 'Upload Here'}
            </Text>
          </Pressable>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">Proposal</Text>
          <Pressable className="my-3 w-full rounded-full items-center justify-center px-10 py-2 bg-orange-400 active:bg-orange-500 shadow-md"
            onPress={() => pickDocument('proposaldoc')}
          >
            <Text className="text-white items-center font-bold " numberOfLines={1}>
              {doc.proposaldoc.name ? doc.proposaldoc.name : 'Upload Here'}
            </Text>
          </Pressable>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">
            Curiculum Vitae
          </Text>
          <Pressable className="my-3 w-full rounded-full items-center justify-center px-10 py-2 bg-orange-400 active:bg-orange-500 shadow-md"
            onPress={() => pickDocument('cvdoc')}
          >
            <Text className="text-white items-center font-bold " numberOfLines={1}>
              {doc.cvdoc.name ? doc.cvdoc.name : 'Upload Here'}
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable className="w-full px-6 py-2 mx-1 mt-5 items-center justify-center rounded-full bg-blue-600 active:bg-blue-700 font-bol800 shadow-md" onPress={registerSkripsi}>
            <Text
              selectable={false}
              className="text-white items-center font-bold "
            >
              Lanjut
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView >
  );
}
