import React, { useState } from 'react'; // Importa React y useState para manejar el estado de los inputs.
import '../style/Register-step-1-fun.css'; // Importa el archivo de estilo CSS para este componente.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para manejar la navegación entre páginas.


const Paso2 = ({ taxonSeleccionado }) => { // Paso2 es un componente que recibe 'taxonSeleccionado' como prop
    const navigate = useNavigate(); // Inicializa useNavigate para manejar la navegación.
    
    // Función para navegar al paso 1 del formulario.
    const goToStep1 = () => {
        navigate('/register-step-1-fun');
    };
    // Función para navegar al paso 3 del formulario.
    const goToStep3 = () => {
        navigate('/register-step-3-fun');
    };
    // Estado para cada uno de los campos del formulario.
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaTermino, setFechaTermino] = useState('');
    const [individuos, setIndividuos] = useState('');
    const [colectores, setColectores] = useState([]); // Lista de colectores.
    const [colectorNuevo, setColectorNuevo] = useState('');// Estado para el colector que se va a agregar.
    const [tipoColecta, setTipoColecta] = useState('');
    const [tipoTrampa, setTipoTrampa] = useState('');
    const [tipoVegetacion, setTipoVegetacion] = useState('');
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [idLocalidad, setIdLocalidad] = useState('');
    const [latitud, setLatitud] = useState('');
    const [longitud, setLongitud] = useState('');
    const [elevacion, setElevacion] = useState('');
    const [datum, setDatum] = useState('');

     // Función para agregar un nuevo colector a la lista.
     const agregarColector = () => {
        if (colectorNuevo.trim()) { // Verifica que el campo no esté vacío.
            setColectores([...colectores, colectorNuevo]); // Agrega el colector a la lista.
            setColectorNuevo(''); // Resetea el campo de colector.
        }
    };
    
    //   Función para agregar un nuevo colector a la lista.
    const eliminarColector = (index) => {
        const nuevosColectores = colectores.filter((_, i) => i !== index); // Filtra el colector que se va a eliminar.
        setColectores(nuevosColectores); // Actualiza la lista de colectores.
    };

    // Función que maneja el envío del formulario.
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto de recargar la página.
        // Aquí se puede agregar la lógica para procesar los datos del formulario.
    };


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>{/* Contenedor del formulario */}
                <h2>Registro de Hongos - Paso 2</h2>{/* Formulario que llama a handleSubmit al enviarse */}
                <p><strong>Nombre de la especie seleccionada:</strong> {taxonSeleccionado}</p>

                <h3>-Información de Colecta</h3>
                <div className="form-grid-5">
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="fechaInicio">Inicio</label>
                        <input
                            type="date"
                            id="fechaInicio"
                            value={fechaInicio}
                            onChange={(e) => setFechaInicio(e.target.value)}// Actualiza el estado con la fecha de inicio
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fechaTermino">Término</label>
                        <input
                            type="date"
                            id="fechaTermino"
                            value={fechaTermino}
                            onChange={(e) => setFechaTermino(e.target.value)} // Actualiza el estado con la fecha de término
                            required
                        />
                    </div>

                </div>
                <div className='form-grid-5'>
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="individuos">Individuos</label>
                        <input
                            type="number"
                            id="individuos"
                            value={individuos}
                            onChange={(e) => setIndividuos(e.target.value)} // Actualiza el estado con el número de individuos
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="colectores">Colectores</label>
                        <div className="input-button-group">
                            <input
                                type="text"
                                id="colectores"
                                value={colectorNuevo}
                                onChange={(e) => setColectorNuevo(e.target.value)}// Actualiza el campo de colector nuevo
                            />
                            <button type="button" onClick={agregarColector}>Agregar</button> 
                        </div>
                        <ul>
                            {colectores.map((colector, index) => ( // Muestra la lista de colectores
                                <li key={index}>
                                    {colector}
                                    <button className="remove-button" type="button" onClick={() => eliminarColector(index)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Aquí continúan más campos del formulario como el tipo de colecta, trampa y vegetación */}

                <div className='form-grid-5'>
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="tipoColecta">Tipo de colecta</label>
                        <select
                            id="tipoColecta"
                            value={tipoColecta}
                            onChange={(e) => setTipoColecta(e.target.value)}
                        >
                            <option value="Directa">Directa</option>
                            <option value="Indirecta">Indirecta</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="tipoTrampa">Tipo de trampa</label><div className="input-button-group">
                            <select
                                id="tipoTrampa"
                                value={tipoTrampa}
                                onChange={(e) => setTipoTrampa(e.target.value)}
                            >
                                <option value="pitfall">Pitfall</option>
                                <option value="trampa de luz">Trampa de luz</option>
                            </select>

                            <button type="button">Nuevo</button>
                        </div>
                    </div>
                </div>

                <div className='form-grid-5'>
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="tipoVegetacion">Tipo de vegetación</label>
                        <div className="input-button-group">
                            <select
                                id="tipoVegetacion"
                                value={tipoVegetacion}
                                onChange={(e) => setTipoVegetacion(e.target.value)}
                            >
                                <option value="selva">Selva</option>
                                <option value="bosque">Bosque</option>
                            </select>

                            <button type="button">Nuevo</button>
                        </div>
                    </div>

                </div>

                {/* Aquí continúan más campos del formulario como la localidad, estado, pais, etc. */}

                <h3>-Localidad</h3>
                <div className="form-grid-6">
                    <div></div>
                    <div className="form-group">

                        <label htmlFor="pais">País</label>
                        <input
                            type="text"
                            id="pais"
                            value={pais}
                            onChange={(e) => setPais(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="estado">Estado</label>
                        <input
                            type="text"
                            id="estado"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">

                        <label htmlFor="localidad">Localidad</label> <div className='input-button-group'>
                            <input
                                type="text"
                                id="localidad"
                                value={localidad}
                                onChange={(e) => setLocalidad(e.target.value)}
                                required
                            />
                            <button type="button">Nuevo</button></div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="idLocalidad">ID Localidad</label> <div className='input-button-group'>
                            <input
                                type="text"
                                id="idLocalidad"
                                value={idLocalidad}
                                onChange={(e) => setIdLocalidad(e.target.value)}
                            />
                            <button type="button">Nuevo</button>
                        </div>

                    </div>
                </div>

                <div className="form-grid-6">
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="latitud">Latitud</label><div className='input-button-group'>
                            <input
                                type="text"
                                id="latitud"
                                value={latitud}
                                onChange={(e) => setLatitud(e.target.value)}
                            />
                            <button type="button">Nuevo</button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="longitud">Longitud</label><div className='input-button-group'>
                            <input
                                type="text"
                                id="longitud"
                                value={longitud}
                                onChange={(e) => setLongitud(e.target.value)}
                            />
                            <button type="button">Nuevo</button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="elevacion">Elevación</label><div className='input-button-group'>
                            <input
                                type="number"
                                id="elevacion"
                                value={elevacion}
                                onChange={(e) => setElevacion(e.target.value)}
                            />
                            <button type="button">Nuevo</button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="datum">Datum</label><div className='input-button-group'>
                            <input
                                type="text"
                                id="datum"
                                value={datum}
                                onChange={(e) => setDatum(e.target.value)}
                            />
                            <button type="button">Nuevo</button>
                        </div>
                    </div>
                </div>
                <div className='form-grid-6'>
                    <div></div>
                </div>
                <div className='form-grid-5'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div> {/*En este apartado se muestan los botones con sus funciones respectiva*/}
                    <div className="input-button-group">
                        <div className="form-group"></div>
                        <div className="form-group">
                            <button onClick={goToStep1} className="button-back">Atrás</button>
                        </div>
                        <div className="form-group">
                            <button onClick={goToStep3} className="button-after">Siguiente</button>
                        </div>
                        <div className="form-group"></div>
                    </div>
                </div>

            </form></div>
    );
};
export default Paso2;
