import {
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
export default function UniversalHeader(props) {
  return (
    <View className="w-screen flex items-center absolute top-0 z-50 bg-transparent">
      <Image
        className="w-screen"
        source={require("../assets/UniversalHeader.png")}
      />
      <View className="flex flex-row z-50">
        <Text className="relative bottom-20 text-blue-600 text-2xl">
          {props.lightText}
        </Text>
        <Text className="relative bottom-20 text-blue-600 font-bold text-2xl">
          {props.boldText}
        </Text>
      </View>
    </View>
  );
}
