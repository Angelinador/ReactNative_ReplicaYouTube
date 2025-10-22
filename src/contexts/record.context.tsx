import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface RecordContextProps {
    idHistorial: string | null;
    generarId: (latitud: number, longitud: number) => Promise<void>;
}

const RecordContext = createContext<RecordContextProps | undefined>(undefined);

interface RecordProviderProps {
    children: ReactNode;
}

export const RecordProvider = ({ children }: RecordProviderProps) => {
    const [idHistorial, setIdHistorial] = useState<string | null>(null);

    // Generar el idHistorial
    const generarId = async (latitud: number, longitud: number) => {
        try {
            const storedUserId = await AsyncStorage.getItem("idUsuario");
            if (!storedUserId) throw new Error("No se encontró el idUsuario");

            const nuevoId = `${storedUserId}_${latitud}_${longitud}`;
            setIdHistorial(nuevoId);

            // Guardarlo en el almacenamiento local
            await AsyncStorage.setItem("idHistorial", nuevoId);

            console.log("idHistorial generado:", nuevoId);
        } catch (error) {
            console.error("Error al generar idHistorial:", error);
        }
    };
    return (
        <RecordContext.Provider value={{ idHistorial, generarId }}>
            {children}
        </RecordContext.Provider>
    );
};

export const useRecord = () => {
    const context = useContext(RecordContext);
    if (!context) {
        throw new Error("useRecord debe usarse dentro de un RecordProvider");
    }
    return context;
};
