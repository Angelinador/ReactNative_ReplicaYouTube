import axios from "axios";

const API_URL = "http://192.168.0.2:3000/api";

interface LoginResponse {
    token: string;
}

export const loginRequest = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
        correoElectronico: email,
        contraseña: password,
    });
    return response.data;
};