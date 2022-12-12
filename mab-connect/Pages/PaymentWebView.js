import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';

import client from "../Api/Client";

export default function PaymentWebView({ route, navigation }) {
    console.log(route.params.url)
    console.log(route.params.invoiceid)

    const getData = async () => {
        try {
            await client
                .get("/transaksi-datas/current", {
                })
                .then((response) => {
                    let invoiceExist = 0;
                    console.log(route.params.url)
                    console.log(route.params.invoiceid)

                    for (const [, transaksi_datum] of Object.entries(response.data.donatur_datum.transaksi_data)) {
                        if (route.params.invoiceid == transaksi_datum.id) {
                            invoiceExist = 1
                            if (transaksi_datum.status == 'paid') {
                                alert('Paid Successfully')
                                navigation.navigate('Dashboard')

                            } else if (transaksi_datum.status == 'expired') {
                                alert('Invoice Expired')
                                navigation.navigate('Dashboard')
                            }
                        }
                    }
                    if(invoiceExist == 0){
                        alert('No invoice found, contact administrator')
                    }

                })
                .catch((error) => {
                    console.log(error);
                })
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const intervalCall = setInterval(() => {
            getData();
        }, 5000);
        return () => {
            // clean up
            clearInterval(intervalCall);
        };
    }, []);

    return (
        <WebView
            source={{ uri: route.params.url }}
            style={{ marginTop: 20 }}
        />
    );
}


