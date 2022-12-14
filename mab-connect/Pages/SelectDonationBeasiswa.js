import {
  SafeAreaView,
  Pressable,
  Text,
  View,
  FlatList,

} from "react-native";
import React, { useState, useEffect } from "react";
import client from "../Api/Client";
import UniversalHeader from "../Component/UniversalHeader";

export default function SelectDonationBeasiswa({ navigation }) {
  const [beasiswa, setBeasiswa] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {

    client
      .get("/beasiswa-datas?populate=*", {})
      .then((response) => {
        let donaturDatumFormatted = [];
        for (const [, beasiswa_datum] of Object.entries(response.data)) {
          console.log(beasiswa_datum);
          donaturDatumFormatted = [
            ...donaturDatumFormatted,
            {
              nama: beasiswa_datum.awardee_datum.user.nama,
              pondokan: beasiswa_datum.pondokan,
              pengajuanbiaya: 5000000,
              cvdoc: beasiswa_datum.cvdoc.url,
              essaydoc: beasiswa_datum.essaydoc.url,
              transkripnilaidoc: beasiswa_datum.transkripnilaidoc.url,
              wali_slipgaji: beasiswa_datum.wali_slipgaji.url,
              beasiswaid: beasiswa_datum.id,
              paidstatus: beasiswa_datum.transaksi_datum
                ? beasiswa_datum.transaksi_datum.status
                : null,
            },
          ];
        }
        console.log(donaturDatumFormatted);
        setBeasiswa(donaturDatumFormatted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);





  return (
    <SafeAreaView className="flex-1 bg-white " >

      <UniversalHeader lightText="Daftar " boldText="Beasiswa" />
      <View className="flex-1 mt-28 p-8">
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <FlatList
              data={beasiswa}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Pressable
                  //onPress={() => initiatePay(item.beasiswaid)}
                  onPress={() => navigation.navigate("SingleDonationBeasiswa", {
                    beasiswa : item
                  })}
                  className="my-2 p-2 rounded-3xl  bg-orange-400 active:bg-orange-600 shadow-md"
                >
                  <View>
                    <Text
                      selectable={false}
                      className="text-white px-4 font-bold text-xl"
                    >
                      {item.pondokan}
                    </Text>
                    <Text
                      selectable={false}
                      className="text-white text-base px-4 py-2 "
                    >
                      {item.nama}
                    </Text>
                    <View className={`${item.paidstatus === "paid" ? "bg-green-400" : "bg-red-400"} rounded-3xl shadow-md p-2 m-2 items-center`}>
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
