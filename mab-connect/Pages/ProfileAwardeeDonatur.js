import {
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function ProfilAwardeeDonatur({ navigation }) {
  return (
    <SafeAreaView className="flex-1 w-screen bg-white">
      <View className="flex-1 items-center justify-center mx-10">
        <View className="w-full">
          <Text
            selectable={false}
            className="text-white items-center text-center font-bold w-full px-10 py-2 mx-1 mb-2 shadow-md justify-center rounded-full bg-orange-400 mt-2 "
          >
            Awardee
          </Text>
          <View className="items-start justify-center mt-3">
            <Text className="ml-4 mt-2 text-blue-800  font-bold">Nama</Text>
            <Text className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400">
              Lorem Upsum
            </Text>
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Tanggal Lahir
            </Text>
            <Text className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400">
              Lorem Upsum
            </Text>
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Jenis Kelamin
            </Text>
            <Text className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400">
              Lorem Upsum
            </Text>
            <Text className="ml-4 mt-2 text-blue-800  font-bold">
              Nomor Handphone
            </Text>
            <Text className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400">
              Lorem Upsum
            </Text>
            <Text className="ml-4 mt-2 text-blue-800  font-bold">Fakultas</Text>
            <Text className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400">
              Lorem Upsum
            </Text>
            <Text className="ml-4 mt-2 text-blue-800  font-bold">Jurusan</Text>
            <Text className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400">
              Lorem Upsum
            </Text>
            <Text className="ml-4 mt-2 text-blue-800  font-bold">Angkatan</Text>
            <Text className="w-full p-2 m-1 margin-left  rounded-xl border border-1 border-orange-400">
              Lorem Upsum
            </Text>
            <Text className="ml-4 mt-2 text-blue-800  font-bold">Provinsi</Text>
          </View>
          <View className="flex flex-row">
            <Pressable className="fixed w-full px-1 py-2 mx-1 mt-5 flex-1 items-center justify-center rounded-full bg-blue-500 active:bg-blue-700  font-bol800 shadow-md">
              <Text
                selectable={false}
                className="text-white items-center  font-bold "
              >
                Kembali
              </Text>
            </Pressable>
            <Pressable className="fixed w-full px-1 py-2 mx-1 mt-5 flex-1 items-center justify-center rounded-full bg-yellow-300 active:bg-yellow-500  font-bol800 shadow-md">
              <Text
                selectable={false}
                className="text-white items-center  font-bold "
              >
                +
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
