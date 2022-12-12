import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


export default function PaymentWebView({ route, navigation }) {
    console.log(route.params.url)

    // const getData = async () => {
    //     try {
    //         client
    //             .get("/skripsi-datas?populate=*", {
    //             })
    //             .then((response) => {

    //                 let donaturDatumFormatted = []
    //                 for (const [, skripsi_datum] of Object.entries(response.data)) {
    //                     console.log(skripsi_datum)
    //                     donaturDatumFormatted = [...donaturDatumFormatted, {
    //                         namapenulis: skripsi_datum.namapenulis,
    //                         judul: skripsi_datum.judul,
    //                         pengajuanbiaya: skripsi_datum.pengajuanbiaya,
    //                         skripsiid: skripsi_datum.id,
    //                         paidstatus: skripsi_datum.transaksi_datum ? skripsi_datum.transaksi_datum.status : null
    //                     }]

    //                 }
    //                 console.log(donaturDatumFormatted)
    //                 setskripsi(donaturDatumFormatted);

    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             })
    //             .finally(() => setLoading(false));;
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    // useEffect(() => {
    //     const intervalCall = setInterval(() => {
    //         getData();
    //     }, 5000);
    //     return () => {
    //         // clean up
    //         clearInterval(intervalCall);
    //     };
    // }, []);

    return (
        <WebView
            source={{ uri: route.params.url }}
            style={{ marginTop: 20 }}
        />
    );
}


