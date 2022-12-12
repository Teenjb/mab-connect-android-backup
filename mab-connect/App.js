import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import SignUpBeasiswaMAB from "./Pages/SignUpBeasiswaMAB"
import SelectDonation from "./Pages/SelectDonation";
import PaymentWebView from "./Pages/PaymentWebView";

import SelectDonationProposal from "./Pages/SelectDonationProposal";
import SelectDonationSkripsi from "./Pages/SelectDonationSkripsi";


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignUpBeasiswaMAB" component={SignUpBeasiswaMAB} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="SelectDonation" component={SelectDonation} />
          <Stack.Screen name="SelectDonationProposal" component={SelectDonationProposal} />
          <Stack.Screen name="SelectDonationSkripsi" component={SelectDonationSkripsi} />
          <Stack.Screen name="PaymentWebView" component={PaymentWebView} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
