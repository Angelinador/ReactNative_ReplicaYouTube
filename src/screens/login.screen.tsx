import React, { useState } from "react";
import { loginScreenStyles as styles } from "../styles/login.styles";
import { validateLogin } from "../utils/validators.util";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../contexts/theme.context";
import { useAuth } from "../contexts/auth.context";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { theme } = useTheme()
  const { loading, login } = useAuth()

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginPress = async () => {
    const error = validateLogin(email, password);
    if (!error) {
      try {
        await login(email, password);
        navigation.navigate("Home");
      } catch (e: any) {
        setErrorMessage(e.message);
      }
    } else {
      setErrorMessage(error);
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
        placeholderTextColor={theme.subtitle}
        style={[styles.input, { color: theme.text }]}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* contraseña */}
      <Text style={[styles.label, { color: theme.text }]}>Contraseña</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Ingresa tu contraseña"
          placeholderTextColor={theme.subtitle}
          secureTextEntry={!passwordVisible}
          style={[styles.passwordInput, { color: theme.text }]}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          onPress={() => {
            setPasswordVisible((prev) => !prev);
          }}
        >
          <Text style={{ color: theme.text, fontSize: 18 }}>
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
        <Text style={[styles.forgotText, { color: theme.primary }]}>
          ¿Olvidaste tu contraseña?
        </Text>
      </TouchableOpacity>

      {/* boton para iniciar */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={handleLoginPress}
      >
        <Text style={styles.buttonText}>
          {loading ? "Cargando..." : "Iniciar sesión"}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 40,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: theme.text }} />
        <Text style={{ marginHorizontal: 10, color: "#000" }}>o</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: theme.text }} />
      </View>

      {/* boton de google */}
      <Pressable style={styles.buttonGoogle}>
        <Text style={styles.buttonText}>Continuar con Google</Text>
      </Pressable>

      {/* registro */}
      <View style={styles.footerContainer}>
        <Text style={{ color: theme.text }}>Nuevo en la app?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={{ color: theme.primary }}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
