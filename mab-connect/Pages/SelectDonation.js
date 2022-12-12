import {
    TextInput,
    SafeAreaView,
    Pressable,
    Text,
    View,
    FlatList
} from "react-native";
import UniversalHeader from "../Component/UniversalHeader";

export default function SelectDonation({ navigation }) {

    return (
        <SafeAreaView className="flex-1 bg-white">
            <UniversalHeader lightText="Pilih " boldText="Donasi" />
            <View className="mt-20 flex-1 items-center justify-center">
                <View className="items-center justify-center">
                    <View className="w-screen justify-center px-20 ">

                        <Pressable  className="w-full p-5 m-1 items-start justify-start rounded-3xl  bg-orange-400 active:bg-orange-600 shadow-md">
                            <Text selectable={false} className="text-white font-bold text-xl ">
                                Beasiswa
                            </Text>
                            <Text selectable={false} className="text-white text-md ">
                                Beasiswa membantu mahasiswa dalam memberikan biaya pendidikan berupa bantuan uang kuliah tunggal pada setiap semester
                            </Text>
                        </Pressable>

                        <Pressable onPress={()=>{navigation.navigate('SelectDonationProposal')}} className="w-full p-5 m-1 items-start justify-start rounded-3xl  bg-orange-400 active:bg-orange-600 shadow-md">
                            <Text selectable={false} className="text-white font-bold text-xl ">
                                Proposal
                            </Text>
                            <Text selectable={false} className="text-white text-md ">
                                Beasiswa membantu mahasiswa dalam memberikan biaya pendidikan berupa bantuan uang kuliah tunggal pada setiap semester
                            </Text>
                        </Pressable>

                        <Pressable onPress={()=>{navigation.navigate('SelectDonationSkripsi')}} className="w-full p-5 m-1 items-start justify-start rounded-3xl  bg-orange-400 active:bg-orange-600 shadow-md">
                        <Text selectable={false} className="text-white font-bold text-xl ">
                                Skripsi
                            </Text>
                            <Text selectable={false} className="text-white text-md ">
                                Beasiswa membantu mahasiswa dalam memberikan biaya pendidikan berupa bantuan uang kuliah tunggal pada setiap semester
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


