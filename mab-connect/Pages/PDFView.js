import React, { useEffect, useRef, useState } from "react";
import {
  Platform,StatusBar
} from "react-native";
import WebView from 'react-native-webview';
const retries = 10


export default function PDFView({ route, navigation }) {
  const { pdfUrl} = route.params || {}
  const webview = useRef(null)
  const [tries, setTries] = useState(1)
  const [reset, setReset] = useState(Date.now())

  const isAndroid = Platform.OS === 'android'
  const base = !isAndroid
    ? ''
    : 'https://docs.google.com/gview?embedded=true&url='

  // Use date as reset to be able to 
  // reload the webview
  const uri = `${base}${pdfUrl}?t=${reset}`

  // Js code to get baseURI when 
  // webview is loaded. docs.google.com has a bug
  // where no content is returned.
  const myInjectedJs = `    
    (function(){ 
      window.ReactNativeWebView.postMessage(window.document.baseURI);
    })();`

  const onMessage = (event) => {
    // Issue does not occur in iOS
    if (!isAndroid) return

    const baseURI = event.nativeEvent.data
    if (tries === retries) navigation.goBack()

    if (baseURI !== uri) {
      setReset(Date.now())
      setTries(tries + 1)
    }
  }


  useEffect(() => {
    console.log( { marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 })

  }, []);

  return (
      <WebView
        ref={webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        style={{ marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
        injectedJavaScript={myInjectedJs}
        source={{ uri }}
        onMessage={onMessage}
      />
      

  )
}
