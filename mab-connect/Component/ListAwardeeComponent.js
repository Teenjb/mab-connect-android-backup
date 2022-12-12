import {
    TextInput,
    SafeAreaView,
    Pressable,
    Image,
    Text,
    View,
    ScrollView,
  } from "react-native";
export default function ListAwardeeComponent(props) {
  return (
    <View className="px-2 py-2 my-1 w-72 rounded-md border border-1 border-orange-400">
      <Text className="text-blue-600 font-medium">{props.name}</Text>
      <Text className="text-blue-600 font-medium">{props.jurusanTahun}</Text>
    </View>
  );
}
