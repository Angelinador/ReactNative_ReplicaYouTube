import axios from "axios"

const API_URL = "https://integracion.test-drive.org/api/usuarios"

export interface UsuarioProps {
    nombres: string
    apellidos?: string
    correoElectronico: string
    telefono?: string
    contraseña: string
}

export interface UsuarioResponse {
    success: boolean
    message: string
    data?: {
        idUsuario: number
        nombres: string
        correoElectronico: string
    }
}

export const crearUsuario = async (
    data: UsuarioProps
): Promise<UsuarioResponse> => {
    try {
        const response = await axios.post<UsuarioResponse>(API_URL, data, {
            headers: {
                "Content-Type": "application/json",
            },
        })

        return response.data
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
            return error.response.data as UsuarioResponse
        }
        return {
            success: false,
            message: "Error de red o servidor no disponible.",
        }
    }
}
