import {
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import ListAwardeeComponent from "../Component/ListAwardeeComponent";
import UniversalHeader from "../Component/UniversalHeader";

export default function ListAwardee({ navigation }) {
  return (
    <SafeAreaView className="flex-1 w-screen bg-white">
      <UniversalHeader lightText="List " boldText="Awardee" />
      <View className="mt-20 flex-1 items-center justify-center">
        <View className="w-3/4 justify-center items-center mx-10">
          <Pressable className="my-3 w-full rounded-xl items-center justify-center px-20 py-2 bg-yellow-300 active:bg-yellow-500 shadow-md">
            <Text className="text-white items-center font-bold ">
              Filter
            </Text>
          </Pressable>
          <ScrollView className="w-full h-2/3">
          <ListAwardeeComponent name="Fateen" jurusanTahun="Teknik Komputer-2022" />
          <ListAwardeeComponent name="Natthan" jurusanTahun="Teknik Komputer-2022" />
          <ListAwardeeComponent name="Jaya" jurusanTahun="Teknik Komputer-2022" />
          <ListAwardeeComponent name="Ghulam" jurusanTahun="Teknik Komputer-2022" />
          <ListAwardeeComponent name="Raihan" jurusanTahun="Teknik Komputer-2022" />
          <ListAwardeeComponent name="Shaniya" jurusanTahun="Teknik Komputer-2022" />
          <ListAwardeeComponent name="Emir" jurusanTahun="Teknik Komputer-2022" />
          <ListAwardeeComponent name="Andin" jurusanTahun="Teknik Komputer-2022" />
          <ListAwardeeComponent name="Udin" jurusanTahun="Teknik Komputer-2022" />
          <ListAwardeeComponent name="Joshevan" jurusanTahun="Teknik Komputer-2022" />
          <ListAwardeeComponent name="Kemas" jurusanTahun="Teknik Komputer-2022" />
          </ScrollView>
          <Pressable className="my-3 flex flex-row rounded-xl items-center justify-center px-10 py-2 bg-blue-500 active:bg-blue-600 shadow-md">
            <Text className="text-white items-center font-bold">
              Kembali ke Menu
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
