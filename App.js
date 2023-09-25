import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./components/Home";
import AddEntry from "./components/AddEntry";
import ViewEntries from "./components/ViewEntries";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "rgb(61, 109, 213)",
          tabBarStyle: {
            display: "flex",
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let customStyle = {};

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Add Entry") {
              iconName = "add-circle";
              size = 50;
              customStyle = { marginTop: -15 };
            } else if (route.name === "History") {
              iconName = "list";
            }

            return (
              <View style={{ alignItems: "center" }}>
                <Ionicons
                  name={iconName}
                  color={color}
                  size={size}
                  style={customStyle}
                />
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Add Entry" component={AddEntry} />
        <Tab.Screen name="History" component={ViewEntries} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
