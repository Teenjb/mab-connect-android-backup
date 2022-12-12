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

export default function ProfilDonatur({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ProfileHeader name="Fateen" status="Donatur" />
      <View className="flex-1 mt-24 w-screen items-center justify-center">
        <View className="w-3/4 flex flex-row">
        <Text selectable={false} className="text-white items-center text-center font-bold w-full px-10 py-2 mx-1 mb-2 shadow-md justify-center rounded-full bg-orange-400 mt-2 ">
          Donatur
        </Text>
        </View>
        <View className="w-3/4 items-start justify-center">
          <ScrollView className="w-full h-2/3 py-2">
            <Text className="ml-4 mt-2 text-blue-800  font-bold">Nama</Text>
            <TextInput className="w-full p-2 mt-1 rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Tanggal Lahir
            </Text>
            <TextInput className="w-full p-2 mt-1 rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Jenis Kelamin
            </Text>
            <TextInput className="w-full p-2 mt-1 rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">Alamat</Text>
            <TextInput className="w-full p-2 mt-1 rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">Kota</Text>
            <TextInput className="w-full p-2 mt-1 rounded-xl border border-1 border-orange-400" />
            <Text className="ml-4 mt-2 text-blue-800  font-bold">Provinsi</Text>
            <TextInput className="w-full p-2 mt-1 mb-5 rounded-xl border border-1 border-orange-400" />
          </ScrollView>
        </View>
        <Pressable className="fixed w-3/4 px-1 py-2 mx-1 mt-5 items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500  font-bol800 shadow-md" onPress={() => navigation.navigate("DashboardDonatur")}>
          <Text
            selectable={false}
            className="text-white items-center  font-bold "
          >
            Simpan
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
