import {
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import UniversalHeader from "../Component/UniversalHeader";

export default function PendaftaranPenelitian({ navigation }) {
  return (
    <SafeAreaView className="flex-1 w-screen bg-white">
      <UniversalHeader lightText="Bantuan " boldText = "Penelitian" />
      <View className="flex-1 items-center justify-center">
        <View className="mt-20 w-3/4 items-center justify-center">
          <View className=" w-full items-start justify-center mt-2 pt-5">
            <Text className="ml-4 mt-2 text-blue-600 font-bold">
              Judul Penelitian
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left rounded-full border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-600  font-bold">
              Potensi Manfaat
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left rounded-full border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-600  font-bold">
              Pengajuan Biaya
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left rounded-full border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-600  font-bold">
              Nama Penulis
            </Text>
            <TextInput className="w-full p-2 m-1 margin-left rounded-full border border-1 border-orange-400" />
          </View>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">Surat Pernyataan</Text>
          <Pressable className="my-3 w-full rounded-full items-center justify-center px-20 py-2 bg-orange-400 active:bg-orange-500 shadow-md">
            <Text className="text-white items-center font-bold ">
              Upload Here
            </Text>
          </Pressable>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">Proposal</Text>
          <Pressable className="my-3 w-full rounded-full items-center justify-center px-20 py-2 bg-orange-400 active:bg-orange-500 shadow-md">
            <Text className="text-white items-center font-bold ">
              Upload Here
            </Text>
          </Pressable>
          <Text className="w-full items-start ml-4 mt-2 text-blue-600  font-bold">
            Curiculum Vitae
          </Text>
          <Pressable className="my-3 w-full rounded-full items-center justify-center px-20 py-2 bg-orange-400 active:bg-orange-500 shadow-md">
            <Text className="text-white items-center font-bold ">
              Upload Here
            </Text>
          </Pressable>
        </View>
        <View>
            <Pressable className="w-full px-6 py-2 mx-1 mt-5 items-center justify-center rounded-full bg-blue-600 active:bg-blue-700 font-bol800 shadow-md">
              <Text
                selectable={false}
                className="text-white items-center font-bold "
              >
                Lanjut
              </Text>
            </Pressable>
          </View>
      </View>
    </SafeAreaView>
  );
}
