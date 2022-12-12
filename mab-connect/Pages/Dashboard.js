import {
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
} from "react-native";

export default function Dashboard({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#FFF8EB]">
      <View className="flex-1 items-center justify-center bg-[#FFF8EB]">
        <View className="mx-10">
          <View className="flex flex-row bg-blue-600 rounded-xl items-center justify-center px-6 py-2">
            <Text className=" font-medium text-white">
              Complete your data!
            </Text>
            <Pressable onPress={() => navigation.navigate('SelectDonation')} className="w-full px-6 py-1 mx-4 flex-1 items-center justify-center rounded-full left-3 bg-yellow-300 active:bg-yellow-500 shadow-md">
              <Text
                selectable={false}
                className="text-white items-center  font-bold "
              >
                GO
              </Text>
            </Pressable>
          </View>
          <View className="bg-orange-200 mt-10 rounded-md py-10 px-5">
            <Text className=" font-medium text-blue-600">
              Beasiswa MAB ditujukan untuk seluruh mahasiswa Fakultas Teknik
              Universitas Indonesia
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
