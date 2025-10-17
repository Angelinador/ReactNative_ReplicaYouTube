import React, { useState } from "react";
import { useTheme } from "../contexts/theme.context";
import { validateRegister } from "../utils/validators.util";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

import { registerStyles } from "../styles/register.styles";

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "Register">;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const { theme } = useTheme();

  const [apellidos, setApellidos] = useState("");
  const [nombres, setNombres] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  const [confirm, setConfirm] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    const error = validateRegister(apellidos, nombres, email, telefono, password, confirm);
    if (error) {
      setErrorMessage(error);
      return;
    }
  };

  return (
    <View style={[registerStyles.container, { backgroundColor: theme.background }]}>
      <Text style={[registerStyles.title, { color: theme.text }]}>Regístrate!</Text>
      <Text style={[registerStyles.subtitle, { color: theme.text }]}>
        Crear una cuenta y continua!
      </Text>

      <TextInput
        style={[registerStyles.input, { color: theme.textInverse }]}
        placeholder="Apellidos"
        placeholderTextColor="#999"
        value={apellidos}
        onChangeText={setApellidos}
      />
      <TextInput
        style={[registerStyles.input, { color: theme.textInverse }]}
        placeholder="Nombres"
        placeholderTextColor="#999"
        value={nombres}
        onChangeText={setNombres}
      />
      <TextInput
        style={[registerStyles.input, { color: theme.textInverse }]}
        placeholder="Correo electrónico"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[registerStyles.input, { color: theme.textInverse }]}
        placeholder="Número telefónico"
        placeholderTextColor="#999"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />

      <View style={registerStyles.passwordContainer}>
        <TextInput
          style={[registerStyles.passwordInput, { color: theme.textInverse }]}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={{ color: theme.primary }}>
            {passwordVisible ? "🙈" : "👁️"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={registerStyles.passwordContainer}>
        <TextInput
          style={[registerStyles.passwordInput, { color: theme.textInverse }]}
          placeholder="Ingresa tu confirmación"
          placeholderTextColor="#999"
          value={confirm}
          onChangeText={setConfirm}
          secureTextEntry={!rePasswordVisible}
        />
        <TouchableOpacity onPress={() => setRePasswordVisible(!rePasswordVisible)}>
          <Text style={{ color: theme.primary }}>
            {rePasswordVisible ? "🙈" : "👁️"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[registerStyles.button, { backgroundColor: theme.primary }]}
        onPress={handleRegister}>
        <Text style={registerStyles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      {errorMessage ? (
        <Text style={{ color: "red", marginVertical: 10 }}>{errorMessage}</Text>
      ) : null}


      <View style={registerStyles.footerContainer}>
        <Text style={{ color: theme.text }}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: theme.primary, fontWeight: "bold" }}>
            Ingresa
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
