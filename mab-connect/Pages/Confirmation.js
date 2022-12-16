import {
    TextInput,
    SafeAreaView,
    Pressable,
    Image,
    Text,
    View,
  } from "react-native";
  
  export default function Confirmation({ navigation }) {
    return (
      <SafeAreaView className="flex-1 items-center justify-end py-5 px-10 bg-white">
        <Image
        className="w-screen absolute top-0 z-50 bg-transparent"
        source={require("../assets/Confirmation.png")}
      />
      <View className='w-full'>
        <Pressable className="fixed w-full px-1 py-2 items-center justify-center rounded-full bg-blue-600 active:bg-blue-700 shadow-md" onPress={()=> navigation.navigate("DashboardAwardee")}>
          <Text selectable={false} className="text-white items-center font-bold ">
            Kembali ke Menu
          </Text>
        </Pressable>
      </View>
      </SafeAreaView>
    );
  }
  