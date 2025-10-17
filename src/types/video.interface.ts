export interface Video {
    id: string;
    imagenVideo: string;
    imagenCanal: string;
    tituloVideo: string;
    nombreCanal: string;
    vistasVideo: number;
    fechaSubida: string;
    onPress?: () => void;
}