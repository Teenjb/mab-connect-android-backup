import {
  TextInput,
  SafeAreaView,
  Pressable,
  Text,
  View,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import client from "../Api/Client";
import UniversalHeader from "../Component/UniversalHeader";

export default function SelectDonationProposal({ navigation }) {
  const [proposal, setProposal] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    client
      .get("/proposal-datas?populate=*", {})
      .then((response) => {
        let donaturDatumFormatted = [];
        for (const [, proposal_datum] of Object.entries(response.data)) {
          console.log(proposal_datum);
          donaturDatumFormatted = [
            ...donaturDatumFormatted,
            {
              namapenulis: proposal_datum.namapenulis,
              judul: proposal_datum.judul,
              pengajuanbiaya: proposal_datum.pengajuanbiaya,
              proposalid: proposal_datum.id,
              cvdoc :proposal_datum.cvdoc.url,
              proposaldoc:proposal_datum.proposaldoc.url,
              suratpernyataandoc:proposal_datum.suratpernyataandoc.url,
              paidstatus: proposal_datum.transaksi_datum
                ? proposal_datum.transaksi_datum.status
                : null,
            },
          ];
        }
        console.log(donaturDatumFormatted);
        setProposal(donaturDatumFormatted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <UniversalHeader lightText="Daftar " boldText="Proposal" />

      <View className="flex-1 mt-28 p-8">
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <FlatList
              data={proposal}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => navigation.navigate("SingleDonationProposal", {
                    proposal: item
                  })}
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
