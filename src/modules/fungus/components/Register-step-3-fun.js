import React, { useState } from 'react';
import '../style/Register-step-1-fun.css';
import useSubmitRegistro from '../hooks/useSubmitRegistro';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../components/FormContext'; 


const Paso3 = ({ taxonSeleccionado }) => {
    const navigate = useNavigate();
    const goToStep2 = () => {
        navigate('/register-step-2-fun');
    };
    const { formData } = useForm(); // Accede al formulario y al manejador de cambios
    const { submitRegistro, error } = useSubmitRegistro();


    const [restriccionUso, setRestriccionUso] = useState("");
    const [preparacion, setPreparacion] = useState("");
    const [observacionesCuracion, setObservacionesCuracion] = useState("");
    const [familia, setFamilia] = useState("");
    const [genero, setGenero] = useState("");
    const [especie, setEspecie] = useState("");
    const [observacionesTaxones, setObservacionesTaxones] = useState("");
    const [condicionMaterial, setCondicionMaterial] = useState("");
    const [estadoEjemplar, setEstadoEjemplar] = useState("");
    const [nombreComun, setNombreComun] = useState("");
    const [observacionesCuratoria, setObservacionesCuratoria] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica de envío de formulario
    };
    
    const handleFileUpload = (event) => {
        // Lógica para cargar archivo
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h3>Registro de Hongos - Paso 3</h3>
                <p><strong>Nombre de la especie seleccionada:</strong> {taxonSeleccionado}</p>

                <div className="form-grid-3">
                    <div></div>
                    <div>
                        <label htmlFor="restriccion-uso">Restricción de uso</label>
                        <select
                            id="restriccion-uso"
                            value={restriccionUso}
                            onChange={(e) => setRestriccionUso(e.target.value)}
                        >
                            <option value="">Selecciona una restricción</option>
                            {/* Opciones adicionales */}
                        </select>
                    </div>
                </div>

                <div className="form-grid-3">
                    <div></div>
                    <div>
                        <h4>Curación (Tentativo)</h4>
                        <label htmlFor="preparacion">Tipo de preparación</label>
                        <select
                            id="preparacion"
                            value={preparacion}
                            onChange={(e) => setPreparacion(e.target.value)}
                        >
                            <option value="">Selecciona una opción</option>
                            {/* Opciones adicionales */}
                        </select>

                        <label htmlFor="observaciones-curacion">Observaciones</label>
                        <textarea
                            id="observaciones-curacion"
                            rows="4"
                            value={observacionesCuracion}
                            onChange={(e) => setObservacionesCuracion(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-grid-3">
                    <div></div>
                    <div>
                        <h4>Taxones asociados</h4>
                        <label htmlFor="familia">Familia</label>
                        <div className="input-button-group">
                            <select
                                id="familia"
                                value={familia}
                                onChange={(e) => setFamilia(e.target.value)}
                            >
                                <option value="">{familia}</option>
                            </select><button type="button">Nuevo</button></div>

                        <label htmlFor="genero">Género</label><div className="input-button-group">
                            <select
                                id="genero"
                                value={genero}
                                onChange={(e) => setGenero(e.target.value)}
                            >
                                <option value="">{genero}</option>
                            </select><button type="button">Nuevo</button> </div>

                        <label htmlFor="especie">Especie</label><div className="input-button-group">
                            <select
                                id="especie"
                                value={especie}
                                onChange={(e) => setEspecie(e.target.value)}
                            >
                                <option value="">{especie}</option>
                            </select> <button type="button">Nuevo</button></div>

                        <label htmlFor="observaciones-taxones">Observaciones</label>
                        <textarea
                            id="observaciones-taxones"
                            name="observacionesTaxones" 
                            rows="4"
                            value={observacionesTaxones}
                            onChange={(e) => setObservacionesTaxones(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-grid-5">
                    <div></div>
                    <div></div>
                    <div>
                        <h4>Notas de curatoria</h4>
                        <label htmlFor="condicion-material">Condición del material</label>
                        <div className="input-button-group">
                            <select
                                id="condicion-material"
                                value={condicionMaterial}
                                onChange={(e) => setCondicionMaterial(e.target.value)}
                            >
                                <option value="">Selecciona una opción</option>
                            </select><button type="button">Nuevo</button></div>

                        <label htmlFor="estado-ejemplar">Estado del ejemplar</label><div className="input-button-group">
                            <select
                                id="estado-ejemplar"
                                value={estadoEjemplar}
                                onChange={(e) => setEstadoEjemplar(e.target.value)}
                            >
                                <option value="">Selecciona una opción</option>
                            </select><button type="button">Nuevo</button></div>

                        <label htmlFor="nombre-comun">Nombre común</label>
                        <div className="input-button-group">
                            <select
                                id="nombre-comun"
                                value={nombreComun}
                                onChange={(e) => setNombreComun(e.target.value)}
                            >
                                <option value="">Selecciona una opción</option>
                            </select><button type="button">Nuevo</button></div>

                        <label htmlFor="observaciones-curatoria">Observaciones</label>
                        <textarea
                            id="observaciones-curatoria"
                            rows="2"
                            value={observacionesCuratoria}
                            onChange={(e) => setObservacionesCuratoria(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-grid-5">
                    <div></div>
                    <div></div>
                    <div className="input-button-group">
                        <button onClick={goToStep2}>Atrás</button>
                        <button type="submit" disabled={isSubmitting}>Finalizar</button>
                    </div>
                </div>
                {error && <p>Error al enviar: {error.message}</p>}

            </form>
        </div>
    );
};
};
export default Paso3;
