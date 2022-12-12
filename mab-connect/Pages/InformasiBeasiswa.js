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

export default function InformasBeasiswa({ navigation }) {
  return (
    <SafeAreaView className="flex-1 w-screen bg-white">
      <UniversalHeader lightText="Beasiswa " boldText="MAB" />
      <View className="flex-1 items-center justify-center">
        <View className="mx-10">
          <View className="bg-[#FFF8EB] m-1 mt-3 rounded-md py-10 px-5">
            <Text className="font-medium text-blue-600">
              Beasiswa MAB diperuntukan bagi mahasiswa yang kurang mampu di
              kalangan Fakultas Teknik Universitas Indonesia
            </Text>
          </View>
          <Text className="font-bold text-xl m-1 text-blue-600 mb-2">
            Persyaratan
          </Text>
          <View className="bg-[#FFF8EB] m-1 rounded-md py-10 px-5">
            <Text className="font-medium text-blue-600">
              Mahasiswa S1 Program Regular IPK terakhir minimal 3.0 Maksimal
              semester 4 pada tahun pengajuan Membutuhkan secara finansial
              Memiliki prestasi/keaktifan organisasi di luar akademik (nilai
              tambah) Bersedia mengikuti seluruh program MAB secara penuh
            </Text>
          </View>
          <View>
            <Pressable className="w-full px-6 py-2 mx-1 mt-5 items-center justify-center rounded-full bg-blue-600 active:bg-blue-700 font-bol800 shadow-md" onPress={() => navigation.navigate("PendaftaranBeasiswa")}>
              <Text
                selectable={false}
                className="text-white items-center font-bold "
              >
                Lanjut
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
