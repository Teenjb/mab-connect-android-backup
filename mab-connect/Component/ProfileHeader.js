import {
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ProfileHeader(props) {
  const navigation = useNavigation();
  return (
    <View className="w-screen absolute top-0 z-50 bg-transparent">
      <Image
        className="w-screen"
        source={require("../assets/headerdashboard.png")}
      />
      <Pressable className="  absolute top-11 left-64" onPress={()=>(props.status === "Awardee")?navigation.navigate("ProfileAwardee"):navigation.navigate("ProfileDonatur")}>  
      <Image
        className="w-24 h-24"
        source={require("../assets/PhotoProfile1.png")}
      />
      </Pressable>
      <View>
        <View className="absolute flex flex-row -top-28 left-16">
        <Text className="font-bold text-2xl text-orange-400">
          Hi!{" "}
        </Text>
        <Text className="font-bold text-2xl text-blue-600">
          {props.name}
        </Text>
        </View>
        <Text className="absolute text-md text-blue-600 -top-20 left-16">
          {props.status}
        </Text>
      </View>
    </View>
  );
}
