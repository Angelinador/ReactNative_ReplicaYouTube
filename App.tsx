import React from "react";
/* librerias para el navigator */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types/navigation";

import LoginScreen from "./src/screens/login.screen";
import RegisterScreen from "./src/screens/register.screen";
import BottomNavigator from "./src/components/bottomNavigator.component";
import SelectedVideoCard from "./src/screens/selectedVideoCard.screen";

import { ThemeProvider } from "./src/contexts/theme.context";

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={BottomNavigator} />
            <Stack.Screen name="SelectedVideo" component={SelectedVideoCard} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
  );
}