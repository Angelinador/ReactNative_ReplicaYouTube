import React, { useState } from "react";
import { useTheme } from "../contexts/theme.context";
import { validateRegister } from "../utils/validators.util";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

import { registerStyles } from "../styles/register.styles";

import { crearUsuario } from "../services/user.service";

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "Register">;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const { theme } = useTheme();

  const [apellidos, setApellidos] = useState("");
  const [nombres, setNombres] = useState("");
  const [correoElectronico, setcorreoElectronico] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contraseña, setcontraseña] = useState("");

  const [confirm, setConfirm] = useState("");
  const [contraseñaVisible, setcontraseñaVisible] = useState(false);
  const [recontraseñaVisible, setRecontraseñaVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    const error = validateRegister(nombres, correoElectronico, contraseña, confirm);
    if (error) {
      setErrorMessage(error);
      return;
    }
    const result = await crearUsuario({ nombres, apellidos, correoElectronico, telefono, contraseña });

    if (result.success) {
      Alert.alert("Éxito", result.message);
    } else {
      Alert.alert("Error", result.message);
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
        value={correoElectronico}
        onChangeText={setcorreoElectronico}
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
          value={contraseña}
          onChangeText={setcontraseña}
          secureTextEntry={!contraseñaVisible}
        />
        <TouchableOpacity onPress={() => setcontraseñaVisible(!contraseñaVisible)}>
          <Text style={{ color: theme.primary }}>
            {contraseñaVisible ? "🙈" : "👁️"}
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
          secureTextEntry={!recontraseñaVisible}
        />
        <TouchableOpacity onPress={() => setRecontraseñaVisible(!recontraseñaVisible)}>
          <Text style={{ color: theme.primary }}>
            {recontraseñaVisible ? "🙈" : "👁️"}
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
