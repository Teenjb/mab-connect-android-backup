import {
    TextInput,
    SafeAreaView,
    Pressable,
    Text,
    View,
    FlatList
} from "react-native";
import React, { useState, useEffect } from "react";
import client from "../Api/Client";
import UniversalHeader from "../Component/UniversalHeader";
import { isUndefined } from "util";
//import { navigate } from "@react-navigation/routers/lib/typescript/src/CommonActions";


export default function SelectDonationSkripsi({ navigation }) {





    const [skripsi, setskripsi] = useState([])
    const [isLoading, setLoading] = useState(true);




    const initiatePay = async (id) => {
        try {
            let invoice;
            console.log(id)
            await client
                .post("/skripsi-datas/" + id + "/pay", {
                })
                .then(async (response) => {
                    console.log(response.data)
                    //navigation.navigate("PaymentWebView", { url: invoice2 })
                    invoice = response

                })
                .catch((error) => {
                    console.log()
                    alert('Skripsi already have an invoice (' + error.response.data.error.message + ')')
                    if(error.response.data.error.details.status == 'pending')
                        navigation.navigate("PaymentWebView", { url: error.response.data.error.details.invoiceurl , invoiceid : error.response.data.error.details.id})
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

                    navigation.navigate("PaymentWebView", { url: invoice.data.invoiceurl, invoiceid : invoice.data.id })
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
            .get("/skripsi-datas?populate=*", {
            })
            .then((response) => {

                let donaturDatumFormatted = []
                for (const [, skripsi_datum] of Object.entries(response.data)) {
                    console.log(skripsi_datum)
                    donaturDatumFormatted = [...donaturDatumFormatted, {
                        namapenulis: skripsi_datum.namapenulis,
                        judul: skripsi_datum.judul,
                        pengajuanbiaya: skripsi_datum.pengajuanbiaya,
                        skripsiid: skripsi_datum.id,
                        paidstatus: skripsi_datum.transaksi_datum ? skripsi_datum.transaksi_datum.status : null
                    }]

                }
                console.log(donaturDatumFormatted)
                setskripsi(donaturDatumFormatted);

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));;


    }, [])


    return (
        <SafeAreaView className="flex-1 bg-white">
        <UniversalHeader lightText="Daftar " boldText="Skripsi"/>

      <View className="flex-1 mt-28 p-8">
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <FlatList
              data={skripsi}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => initiatePay(item.skripsiid)}
                  className="my-2 p-2 rounded-3xl  bg-orange-400 active:bg-orange-600 shadow-md"
                >
                  <View>
                      <Text
                        selectable={false}
                        className="text-white px-4 font-bold text-xl"
                      >
                        {item.judul}
                      </Text>
                      <Text
                        selectable={false}
                        className="text-white text-base px-4 py-2 "
                      >
                        by {item.namapenulis}
                      </Text>
                    <View className={`${item.paidstatus === "paid"?"bg-green-400":"bg-red-400"} rounded-3xl shadow-md p-2 m-2 items-center`}>
                      <Text
                        selectable={false}
                        className="text-white text-base font-bold"
                      >
                        {item.paidstatus == "paid"
                          ? "Paid"
                          : "Rp" + item.pengajuanbiaya}
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


