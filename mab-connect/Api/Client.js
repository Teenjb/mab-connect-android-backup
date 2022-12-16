import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({ baseURL: "http://10.0.2.2:1337/api" });



// Add a request interceptor
instance.interceptors.request.use(
  async config => {
    console.log('gegege')
    const token = JSON.parse( await AsyncStorage.getItem('login'))
    if (token.jwt && config.url !='/auth/local' && config.url !='/auth/local/register') {
      config.headers['Authorization'] = 'Bearer ' + token.jwt
    }
    // config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
)

export default instance
