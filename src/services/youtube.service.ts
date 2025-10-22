import axios from "axios";
import { VideoInterface } from "../types/video.interface";

const API_URL = "https://integracion.test-drive.org/api/youtube";

export const YouTubeService = {
    // Videos mas populares en una locacion
    async obtenerPopulares(lat: number, lon: number): Promise<VideoInterface[]> {
        try {
            const response = await axios.get(`${API_URL}/populares`, {
                params: { lat, lon },
            });

            if (response.data.success && Array.isArray(response.data.data)) {
                return response.data.data.map((video: any): VideoInterface => ({
                    id: video.id,
                    titulo: video.titulo,
                    descripcion: video.descripcion || "",
                    canal: video.canal,
                    miniatura: video.miniatura,
                    vistas: video.vistas || "0",
                    likes: video.likes || "0",
                    duracion: video.duracion || "",
                    canalImagen: video.canalImagen || "https://placehold.co/100x100",
                    publicado: video.publicado || "00-00-00"
                }));
            }

            return [];
        } catch (error) {
            console.error("Error al obtener videos populares:", error);
            return [];
        }
    },
};
