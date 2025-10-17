import React, { useContext, useState } from "react";
import { useTheme } from "../contexts/theme.context";
import { loginScreenStyles as styles } from "../styles/login.styles";
import { validateLogin } from "../utils/validators.util";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
/* contiene los hooks useNavigation & useRoute, crea el stack y el historial de pantallas */
import { StackNavigationProp } from "@react-navigation/stack";
/* 
  Libreria para crear los Stack Navigators las cuales funcionan como "un monton de pantallas apiladas" 
  > Define las pantallas como rutas ("Login", "Profile", etc.)
  > Cuando navegamos a una nueva pantalla se apila arriba de la anterior
  > Tambien se encarga de las animaciones de transicion entre pantallas
*/
import { RootStackParamList } from "../types/navigation";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { theme } = useTheme();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginPress = async () => {
    const error = validateLogin(email, password);
    if (!error) {
      navigation.navigate("Home");
    } else {
      setErrorMessage(error);
      return;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* mensaje de bienvenida */}
      <Text style={[styles.title, { color: theme.text }]}>
        Bienvenido de vuelta!
      </Text>
      <Text style={[styles.subtitle, { color: theme.subtitle }]}>
        Ingresa tus credenciales para continuar
      </Text>

      {/* correo */}
      <Text style={[styles.label, { color: theme.text }]}>
        Correo electrónico
      </Text>
      <TextInput
        placeholder="nombre@email.com"
        placeholderTextColor="#999"
        style={[styles.input, { color: theme.textInverse }]}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* contraseña */}
      <Text style={[styles.label, { color: theme.text }]}>
        Contraseña
      </Text>
      <View style={styles.passwordContainer}>

        <TextInput
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#999"
          secureTextEntry={!passwordVisible}
          style={[styles.passwordInput, { color: theme.textInverse }]}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          onPress={() => {
            console.log("toggle pressed - current:", passwordVisible);
            setPasswordVisible(prev => !prev);
          }}
        >
          <Text style={{ color: theme.primary }}>
            {passwordVisible ? "🙈" : "👁️"}
          </Text>
        </TouchableOpacity>
      </View>


      {/* posible mensaje de error */}
      {errorMessage ? (
        <Text style={[styles.error, { marginTop: 10 }]}>{errorMessage}</Text>
      ) : null}

      {/* contraseña olvidada */}
      <TouchableOpacity>
        <Text style={[styles.forgotText, { color: theme.primary }]}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      {/* boton para iniciar */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={() => { }}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 40,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
        <Text style={{ marginHorizontal: 10, color: theme.text }}>o</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
      </View>

      {/* boton de google */}
      <Pressable style={styles.buttonGoogle}>
        <Text style={styles.buttonText}>Continuar con Google</Text>
      </Pressable>

      {/* registro */}
      <View style={styles.footerContainer}>
        <Text style={{ color: theme.text }}>Nuevo en la app?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: theme.primary }}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
