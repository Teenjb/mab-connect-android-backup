import {
  SafeAreaView,
  Pressable,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import client from "../Api/Client";
import UniversalHeader from "../Component/UniversalHeader";

export default function SingleDonationProposal({ route, navigation }) {

  const initiatePay = async (id) => {
    try {
      let invoice;
      console.log(id);
      await client
        .post("/proposal-datas/" + id + "/pay", {})
        .then(async (response) => {
          console.log(response.data);
          //navigation.navigate("PaymentWebView", { url: invoice2 })
          invoice = response;
        })
        .catch((error) => {
          console.log();
          alert(
            "Proposal already have an invoice (" +
              error.response.data.error.message +
              ")"
          );
          if (error.response.data.error.details.status == "pending")
            navigation.navigate("PaymentWebView", {
              url: error.response.data.error.details.invoiceurl,
              invoiceid: error.response.data.error.details.id,
            });
        });

      if (typeof invoice !== "undefined") {
        if (invoice.status == 200) {
          await client
            .post("/transaksi-datas/" + invoice.data.id + "/pay", {})
            .then(function (response) {
              invoice = response;
              //navigation.navigate("PaymentWebView", { url: invoice2 })
            })
            .catch((error) => {
              alert("Internal Error, try again later");
            });

          navigation.navigate("PaymentWebView", {
            url: invoice.data.invoiceurl,
            invoiceid: invoice.data.id,
          });
        } else {
          alert("already have data");
        }
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };


  useEffect(() => {
    console.log(route)
  }, []);




  return (
    <SafeAreaView className=" flex-1 bg-white" >

      <UniversalHeader lightText="Detail " boldText="Proposal" />

      <View className='flex-1 justify-end ' >
        <View>
          <View className=" bg-blue-100 m-6 py-10 rounded-2xl">
            <Text className=" text-base text-xl p-3 text-center font-bold" >
              {route.params.proposal.judul}
            </Text>
            <Text className=" text-base text-center font-bold" >
              by {route.params.proposal.namapenulis}
            </Text>
          </View>
          <View className="mb-20 p-4 py-1 ">
            <Pressable
              className=" m-2 py-3 bg-orange-400 active:bg-orange-600 rounded-3xl shadow-md  items-center"
              onPress={
                () => {
                  navigation.navigate("PDFView", {
                    pdfUrl: route.params.proposal.cvdoc
                  })
                }
              }
            >
              <Text
                selectable={false}
                className="text-white text-base font-bold"
              >
                Curriculum Vitae
              </Text>
            </Pressable>

            <Pressable className=" m-2 py-3 bg-orange-400 active:bg-orange-600 rounded-3xl shadow-md  items-center"
              onPress={
                () => {
                  navigation.navigate("PDFView", {
                    pdfUrl: route.params.proposal.proposaldoc
                  })
                }
              }>
              <Text
                selectable={false}
                className="text-white text-base font-bold"
              >
                Proposal
              </Text>
            </Pressable>

            <Pressable className=" m-2 py-3 bg-orange-400 active:bg-orange-600 rounded-3xl shadow-md  items-center"
              onPress={
                () => {
                  navigation.navigate("PDFView", {
                    pdfUrl: route.params.proposal.suratpernyataandoc
                  })
                }
              }>
              <Text
                selectable={false}
                className="text-white text-base font-bold"
              >
                Surat Pernyataan
              </Text>
            </Pressable>

          </View>

          <View className="my-3">

            <Pressable className="m-2 py-5 bg-green-400 active:bg-green-600 rounded-3xl shadow-md  items-center"
              onPress={() => initiatePay(route.params.proposal.proposalid)}
              >
              <Text
                selectable={false}
                className="text-white text-base font-bold"
              >
                {route.params.proposal.paidstatus == "paid"
                  ? "Paid"
                  : "Rp" + route.params.proposal.pengajuanbiaya}
              </Text>
            </Pressable>

          </View>


        </View>

      </View>

    </SafeAreaView>
  );
}
