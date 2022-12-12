import {
    TextInput,
    SafeAreaView,
    Pressable,
    Text,
    View,
    FlatList
} from "react-native";
import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import client from "../Api/Client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DocumentPicker from 'expo-document-picker';
//import { navigate } from "@react-navigation/routers/lib/typescript/src/CommonActions";


export default function SelectDonationProposal({ navigation }) {





    const [proposal, setProposal] = useState([])
    const [isLoading, setLoading] = useState(true);




    const initiatePay = async (id) => {
        try {
            let invoice;
            console.log(id)
            await client
                .post("/proposal-datas/" + id + "/pay", {
                })
                .then(async (response) => {
                    console.log(response.data)
                    //navigation.navigate("PaymentWebView", { url: invoice2 })
                    invoice = response

                })
                .catch((error) => {
                    console.log()
                    alert('Proposal already have an invoice (' + error.response.data.error.message + ')')
                    if(error.response.data.error.details.status == 'pending')
                        navigation.navigate("PaymentWebView", { url: error.response.data.error.details.invoiceurl })
                })

            if (typeof invoice !== 'undefined') {
                if (invoice.status == 200) {
                    await client
                        .post("/transaksi-datas/" + invoice.data.id + "/pay", {
                        })
                        .then(function (response) {
                            invoice = response
                            //navigation.navigate("PaymentWebView", { url: invoice2 })

                        })
                        .catch((error) => {
                            alert('Internal Error, try again later')
                        })

                    navigation.navigate("PaymentWebView", { url: invoice.data.invoiceurl })
                } else {
                    alert('already have data')
                }
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    useEffect(() => {
        client
            .get("/proposal-datas?populate=*", {
            })
            .then((response) => {

                let donaturDatumFormatted = []
                for (const [, proposal_datum] of Object.entries(response.data)) {
                    console.log(proposal_datum)
                    donaturDatumFormatted = [...donaturDatumFormatted, {
                        namapenulis: proposal_datum.namapenulis,
                        judul: proposal_datum.judul,
                        pengajuanbiaya: proposal_datum.pengajuanbiaya,
                        proposalid: proposal_datum.id,
                        paidstatus: proposal_datum.transaksi_datum ? proposal_datum.transaksi_datum.status : null
                    }]

                }
                console.log(donaturDatumFormatted)
                setProposal(donaturDatumFormatted);

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));;


    }, [])


    return (
        <SafeAreaView className="flex-1 bg-[#FFF8EB]">
            <View className="items-center justify-center px-10 py-5  top-10 my-6">
                <Text className=" font-medium text-4xl">Daftar Proposal</Text>
            </View>

            <View style={{ flex: 1, padding: 24 }}>
                {isLoading ? <Text>Loading...</Text> :
                    (<View style={{
                        flex: 1, flexDirection: 'column', justifyContent:
                            'space-between'
                    }}>
                        <FlatList

                            data={proposal}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (

                                <Pressable onPress={() => initiatePay(item.proposalid)} className=" p-5   rounded-3xl  bg-orange-400 active:bg-orange-600 shadow-md">
                                    <View >
                                        <View className='bg-green-100 rounded-3xl shadow-md p-2 m-2  items-center'>
                                            <Text selectable={false} className="text-black font-bold text-xl">
                                                {item.judul}
                                            </Text>
                                            <Text selectable={false} className="text-black text-base bg-green-400 px-20 py-2 rounded-3xl">
                                                {item.namapenulis}
                                            </Text>
                                        </View>
                                        <View className='bg-blue-100 rounded-3xl shadow-md p-2 m-2 items-center'>
                                            <Text selectable={false} className="text-black text-base font-bold ">
                                                {item.paidstatus == 'paid' ? 'Paid' : item.pengajuanbiaya}
                                            </Text>
                                        </View>
                                    </View>
                                </Pressable>

                            )}

                        />
                    </View>
                    )}
            </View>
        </SafeAreaView>
    );



}

