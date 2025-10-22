import React from "react";
/* Librerías para el navigator */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types/navigation";

/* Pantallas */
import LoginScreen from "./src/screens/login.screen";
import RegisterScreen from "./src/screens/register.screen";
import BottomNavigator from "./src/components/bottomNavigator.component";
import SelectedVideoCard from "./src/screens/selectedVideoCard.screen";

/* Contexto global de tema */
import { ThemeProvider } from "./src/contexts/theme.context";
import { AuthProvider } from "./src/contexts/auth.context";
import { RecordProvider } from "./src/contexts/record.context";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <RecordProvider>
      <AuthProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              {/* Pantallas principales */}
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />

              {/* Navegador principal (tabs) */}
              <Stack.Screen name="Home" component={BottomNavigator} />

              {/* Pantalla de video seleccionada */}
              <Stack.Screen name="SelectedVideo" component={SelectedVideoCard} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </AuthProvider>
    </RecordProvider>
  );
}
