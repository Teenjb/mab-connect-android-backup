import {
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import ProfileHeader from "../Component/ProfileHeader";

export default function DashboardAwardee({ navigation }) {
  return (
    <SafeAreaView className="flex-1 w-screen bg-white">
      <ProfileHeader name="Fateen" status="Awardee"/>
      <ScrollView className="">
        <View className="mt-40 mb-12 tems-center justify-center">
          <View className="mx-10">
            <View className="mt-2 flex items-center justify-center flex-row">
              <Pressable className="w-32 px-1 py-2 mx-1 mb-2 flex-1 items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500">
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  History
                </Text>
              </Pressable>
              <Pressable className="w-32 px-1 py-2 mx-1 mb-2 flex-1 items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500">
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Request
                </Text>
              </Pressable>
            </View>
            <View className="bg-[#FFF8EB] mt-6 rounded-md py-5 px-5 flex items-center justify-end flex-row">
              <Image
                className="w-28 h-28 m-5"
                source={require("../assets/Graph.png")}
              />
              <View className="flex flex-column">
                <Text className="font-bold text-xl text-blue-600">
                  Pondokan
                </Text>
                <Text className="font-reguler text-xl text-blue-600">
                  500 Awardee
                </Text>
                <Text className="font-bold text-xl text-blue-600">
                  Non-pondokan
                </Text>
                <Text className="font-reguler text-xl text-blue-600">
                  500 Awardee
                </Text>
                <Text className="font-bold text-xl text-blue-600">
                  Available
                </Text>
                <Text className="font-reguler text-xl text-blue-600">
                  500 Awardee
                </Text>
              </View>
            </View>
            <View className="bg-[#FFF8EB] my-5 rounded-md py-5 px-5">
              <Text className=" font-bold text-xl text-blue-600 mb-2">
                Program MAB
              </Text>
              <Pressable className="my-1 w-full flex flex-row rounded-full items-start justify-center py-2 bg-blue-600 active:bg-blue-700 shadow-md" onPress={() => navigation.navigate("InformasiBeasiswa")}>
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Beasiswa MAB
                </Text>
              </Pressable>
              <Pressable className="my-1 w-full flex flex-row rounded-full items-center justify-center py-2 bg-blue-600 active:bg-blue-700 shadow-md">
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Anak Karyawan
                </Text>
              </Pressable>
              <Pressable className="my-1 w-full flex flex-row rounded-full items-start justify-center py-2 bg-blue-600 active:bg-blue-700 shadow-md" onPress={() => navigation.navigate("PendaftaranSkripsi")}>
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Skripsi
                </Text>
              </Pressable>
              <Pressable className="my-1 w-full flex flex-row rounded-full items-start justify-center py-2 bg-blue-600 active:bg-blue-700 shadow-md" onPress={() => navigation.navigate("PendaftaranPenelitian")}>
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Penelitian
                </Text>
              </Pressable>
            </View>
            <View className="bg-[#FFF8EB] rounded-md py-5 px-5">
              <Text className="font-bold text-xl text-blue-600 mb-2">
                Status Proses Seleksi
              </Text>
              <Text className="font-medium text-md text-blue-600">Current</Text>
              <Text className="my-1 w-full flex flex-row rounded-full items-start justify-center p-2 bg-blue-600 font-medium text-md text-white shadow-md ">
                Berkas
              </Text>
              <Text className="font-medium text-md text-blue-600">Next</Text>
              <Text className="my-1 w-full flex flex-row rounded-full items-start justify-center p-2 bg-blue-600 font-medium text-md text-white shadow-md">
                Wawancara
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
