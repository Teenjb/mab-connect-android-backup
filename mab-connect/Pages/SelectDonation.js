import {
    TextInput,
    SafeAreaView,
    Pressable,
    Text,
    View,
    FlatList
} from "react-native";

export default function SelectDonation({ navigation }) {

    return (
        <SafeAreaView className="flex-1 bg-[#FFF8EB]">
            <View className="items-center justify-center px-10 py-5  top-10 my-6">
                <Text className=" font-medium text-4xl">Pilih Donasi</Text>
            </View>
            <View className="flex-1 items-center justify-center">
                <View className="items-center justify-center">
                    <View className="w-screen justify-center px-20 ">

                        <Pressable  className="w-full p-10 m-1 items-center justify-center rounded-3xl  bg-orange-400 active:bg-orange-600 shadow-md">
                            <Text selectable={false} className="text-white font-bold text-3xl ">
                                Beasiswa
                            </Text>
                        </Pressable>

                        <Pressable onPress={()=>{navigation.navigate('SelectDonationProposal')}} className="w-full p-10 m-1 items-center justify-center rounded-3xl  bg-orange-400 active:bg-orange-600 shadow-md">
                            <Text selectable={false} className="text-white font-bold text-3xl">
                                Proposal
                            </Text>
                        </Pressable>

                        <Pressable onPress={()=>{navigation.navigate('SelectDonationSkripsi')}} className="w-full p-10 m-1 items-center justify-center rounded-3xl  bg-orange-400 active:bg-orange-600 shadow-md">
                            <Text selectable={false} className="text-white font-bold text-3xl">
                                Skripsi
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


