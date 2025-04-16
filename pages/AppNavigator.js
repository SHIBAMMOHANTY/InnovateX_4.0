import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./Tabbar"; // Make sure file name matches

// Screens
import Home from "./Home";
import Reports from "./Reports";
import FaceScane from "./FaceScane";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="FaceScane" component={FaceScane} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
