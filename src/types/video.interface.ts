export interface VideoInterface {
    id: string;
    titulo: string;
    descripcion: string;
    canal: string;
    miniatura: string;
    vistas: string;
    likes: string;
    duracion: string;
    canalImagen: string,
    publicado: string,
    onPress?: () => void;
}