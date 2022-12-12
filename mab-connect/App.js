import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import DashboardAwardee from "./Pages/DashboardAwardee";
import DashboardDonatur from "./Pages/DashboardDonatur";
import InformasBeasiswa from "./Pages/InformasiBeasiswa";
import ListAwardee from "./Pages/ListAwardee";
import PendaftaranBeasiswa from "./Pages/PendaftaranBeasiswa";
import PendaftaranPenelitian from "./Pages/PendaftaranPenelitian";
import PendaftaranSkripsi from "./Pages/PendaftaranSkripsi";
import ProfileAwardee from "./Pages/ProfileAwardee";
import ProfileAwardeeDonatur from "./Pages/ProfileAwardeeDonatur";
import ProfileDonatur from "./Pages/ProfileDonatur";
import ProfileHeader from "./Component/ProfileHeader";
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
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DashboardAwardee" component={DashboardAwardee} />
        <Stack.Screen name="DashboardDonatur" component={DashboardDonatur} />
        <Stack.Screen name="InformasiBeasiswa" component={InformasBeasiswa} />
        <Stack.Screen name="ListAwardee" component={ListAwardee} />
        <Stack.Screen
          name="PendaftaranBeasiswa"
          component={PendaftaranBeasiswa}
        />
        <Stack.Screen
          name="PendaftaranPenelitian"
          component={PendaftaranPenelitian}
        />
        <Stack.Screen
          name="PendaftaranSkripsi"
          component={PendaftaranSkripsi}
        />
        <Stack.Screen name="ProfileAwardee" component={ProfileAwardee} />
        <Stack.Screen
          name="ProfileAwardeeDonatur"
          component={ProfileAwardeeDonatur}
        />
        <Stack.Screen name="ProfileDonatur" component={ProfileDonatur} />
        <Stack.Screen name="ProfileHeader" component={ProfileHeader} />
        <Stack.Screen name="SelectDonation" component={SelectDonation} />
        <Stack.Screen
          name="SelectDonationProposal"
          component={SelectDonationProposal}
        />
        <Stack.Screen
          name="SelectDonationSkripsi"
          component={SelectDonationSkripsi}
        />
        <Stack.Screen name="PaymentWebView" component={PaymentWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
