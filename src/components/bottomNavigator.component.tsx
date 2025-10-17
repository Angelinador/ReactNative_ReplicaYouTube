import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"; // si usamos expo necesitamos esta libreria para los iconos
import HomeScreen from "../screens/home.screen";
import RecordScreen from "../screens/record.screen";
import SettingsScreen from "../screens/settings.screen";

import { useTheme } from "../contexts/theme.context";

const Tab = createBottomTabNavigator();
/* 
  > A pesar de que "Principal", "Historial", "Suscripciones" y "Locacion" son vistas, estas se 
    comportan como componentes dentro del BottomNavigationBar, ya que estas "vistas" no contienen 
    el componente BottomNavigationBar, sino que BottomNavigationBar los contiene a ellos.

  > Esto difiere de Flutter ya que en Flutter el BottomNavigationBar vive dentro de un screen. 
    En React Native vive como una estructura externa que define el flujo de navegación.
*/

export default function BottomNavigator() {
  const EmptyScreen = () => (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla vacía</Text>
    </View>
  );
  const { isDark } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: isDark ? "#ffffffff" : "#000",
        tabBarInactiveTintColor: isDark ? "#979797ff" : "#5c5c5cff",
        tabBarStyle: {
          height: 60,
          backgroundColor: isDark ? "#434343ff" : "#fff",
        },
        tabBarIcon: ({ color, size = 30 }) => {
          let iconName = "circle";

          if (route.name === "Principal") iconName = "home";
          else if (route.name === "Historial") iconName = "history";
          else if (route.name === "Ubicacion") iconName = "location-pin";
          else if (route.name === "Configuracion") iconName = "settings";

          return (
            <MaterialIcons name={iconName} size={size} color={color} />
          );
        },
      })
      }
    >
      <Tab.Screen name="Principal" component={HomeScreen} />
      <Tab.Screen name="Historial" component={RecordScreen} />
      <Tab.Screen name="Ubicacion" component={EmptyScreen} />
      <Tab.Screen name="Configuracion" component={SettingsScreen} />
    </Tab.Navigator >
  );
}