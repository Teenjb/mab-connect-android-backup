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

export default function DashboardDonatur({ navigation }) {
  return (
    <SafeAreaView className="flex-1 w-screen bg-white">
      <ProfileHeader name="Fateen" status="Donatur"/>
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
              <Pressable className="w-32 px-1 py-2 mx-1 mb-2 flex-1 items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500" onPress={() => navigation.navigate("SelectDonation")}>
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Donasi
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
            <View className="bg-[#FFF8EB] my-5 rounded-md py-10 px-5">
              <Text className=" font-bold text-xl text-blue-600 mb-2">
                Laporan MAB
              </Text>
              <Pressable className="my-1 w-full flex flex-row rounded-full items-start justify-center py-2 bg-blue-600 active:bg-blue-700 shadow-md">
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Personal Report
                </Text>
              </Pressable>
              <Pressable className="my-1 w-full flex flex-row rounded-full items-center justify-center py-2 bg-blue-600 active:bg-blue-700 shadow-md">
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Monthly Report
                </Text>
              </Pressable>
            </View>
            <View className="bg-[#FFF8EB] rounded-md py-10 px-5">
              <Text className=" font-bold text-xl text-blue-600 mb-2">
                List Profil Awardee
              </Text>
              <Pressable className="my-1 w-full flex flex-row rounded-full items-start justify-center py-2 bg-blue-600 active:bg-blue-700 shadow-md">
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Fateen
                </Text>
              </Pressable>
              <Pressable className="my-1 w-full flex flex-row rounded-full items-center justify-center py-2 bg-blue-600 active:bg-blue-700 shadow-md">
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Raihan
                </Text>
              </Pressable>
              <Pressable className="my-1 w-full flex flex-row rounded-full items-center justify-center py-2 bg-blue-600 active:bg-blue-700 shadow-md">
                <Text
                  selectable={false}
                  className="text-white items-center  font-bold "
                >
                  Natthan
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
