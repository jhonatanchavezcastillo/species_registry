import { useState } from 'react';
import axios from 'axios';

const useSubmitRegistro = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Función para enviar datos del registro
    const submitRegistro = async (data) => {
        setLoading(true);
        setError(null);

        try {
            // Cambia la URL a la de tu servicio de catálogos
            const response = await axios.post('http://localhost:3000/api/mushrooms/create', data);
            return response.data;
        } catch (err) {
            setError(err);
            console.error("Error al enviar los datos:", err);
        } finally {
            setLoading(false);
        }
    };

    return { submitRegistro, loading, error };
};

export default useSubmitRegistro;
