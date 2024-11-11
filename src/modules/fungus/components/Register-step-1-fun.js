import React, { useState } from 'react';
import '../style/Register-step-1-fun.css';
//import useFetchCatalog from '../../../hooks/useFetchCatalog';



const useFetchCatalog = () => {
    /*const { data, loading, error } = useFetchCatalog('modules/fungus');
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        {data && data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    );*/
  };

const TablaTaxon = ({ taxones, seleccionarTaxon }) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Especie</th>
                    <th>Nombre Científico</th>
                    <th>Nombres Comunes</th>
                    <th>Familia</th>
                    <th>Género</th>
                    <th>Elegir</th>
                </tr>
            </thead>
            <tbody>
                {taxones.length > 0 ? (
                    taxones.map((taxon, index) => (
                        <tr key={index}>
                            <td>{taxon.especie}</td>
                            <td>{taxon.nombreCientifico}</td>
                            <td>{taxon.nombresComunes}</td>
                            <td>{taxon.familia}</td>
                            <td>{taxon.genero}</td>
                            <td>
                                <button onClick={() => seleccionarTaxon(taxon)}>Elegir</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6">No hay resultados</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

const Paso1 = ({ irSiguiente }) => {
    const [institucion, setInstitucion] = useState('INECOL - Instituto de Ecologia, A.C.');
    const [objetoColeccion, setObjetoColeccion] = useState('XAL');
    const [numeroCatalogo, setNumeroCatalogo] = useState('');
    const [idIngreso, setIdIngreso] = useState('');
    const [taxon, setTaxon] = useState('');
    const [taxonesFiltrados, setTaxonesFiltrados] = useState([]);
    const [taxonSeleccionado, setTaxonSeleccionado] = useState(null);
    const [determinador, setDeterminador] = useState('');
    const [determinadoresAgregados, setDeterminadoresAgregados] = useState([]);
    const [categoriaTipo, setCategoriaTipo] = useState('');
    const [esTaxonomo, setEsTaxonomo] = useState(false);
    const [fotos, setFotos] = useState([]);

    const taxones = [
        {
            especie: '1',
            nombreCientifico: '',
            nombresComunes: '',
            familia: '',
            genero: '',
        },
        {
            especie: '2',
            nombreCientifico: '',
            nombresComunes: '',
            familia: '',
            genero: '',
        },
        {
            especie: '3',
            nombreCientifico: '',
            nombresComunes: '',
            familia: '',
            genero: '',
        },
    ];

    const handleFileUpload = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFotos(selectedFiles);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para enviar el formulario
    };
    const irAtras = (event) => {
        // Lógica para retroceder en el flujo
        console.log("Regresando al paso anterior");
    };

    const handleBuscarTaxon = () => {
        const resultados = taxones.filter((t) =>
            t.nombreCientifico.toLowerCase().includes(taxon.toLowerCase())
        );
        setTaxonesFiltrados(resultados);
    };

    const seleccionarTaxon = (taxonSeleccionado) => {
        setTaxonSeleccionado(taxonSeleccionado.nombreCientifico);
        setTaxon(taxonSeleccionado.nombreCientifico);
        setTaxonesFiltrados([]); // Limpiar los resultados después de seleccionar
    };

    const handleAgregarDeterminador = () => {
        if (determinador.trim()) {
            setDeterminadoresAgregados([...determinadoresAgregados, determinador]);
            setDeterminador('');
        }
    };

    const handleEliminarDeterminador = (index) => {
        const nuevosDeterminadores = determinadoresAgregados.filter((_, i) => i !== index);
        setDeterminadoresAgregados(nuevosDeterminadores);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Registro de Hongos - Paso 1</h2>

                <div className='form-grid-5'>
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="institucion">Institución</label>
                        <select id="institucion" value={institucion} onChange={(e) => setInstitucion(e.target.value)}>
                            <option value="INECOL - Instituto de Ecología, A.C.">INECOL - Instituto de Ecología, A.C.</option>
                        </select>
                    </div>
                </div>

                <div className='form-grid-5'>
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="objetoColeccion">Objeto de colección</label>
                        <select id="objetoColeccion" value={objetoColeccion} onChange={(e) => setObjetoColeccion(e.target.value)}>
                            <option value="XAL">XAL</option>
                        </select>
                    </div>
                </div>

                <div className='form-grid-5'>
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="numeroCatalogo">Número de catálogo</label>
                        <input
                            type="text"
                            id="numeroCatalogo"
                            value={numeroCatalogo}
                            onChange={(e) => setNumeroCatalogo(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="idIngreso">ID de ingreso</label>
                        <input
                            type="text"
                            id="idIngreso"
                            value={idIngreso}
                            onChange={(e) => setIdIngreso(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className='form-grid-5'>
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="taxon">Buscar taxón</label>
                        <div className="input-button-group">
                            <input
                                type="text"
                                id="taxon"
                                value={taxon}
                                onChange={(e) => setTaxon(e.target.value)}
                            />
                            <button type="button" onClick={handleBuscarTaxon}>Buscar</button>
                        </div>
                    </div>
                </div>

                <div className='table'>
                    {taxonesFiltrados.length > 0 && (
                        <TablaTaxon taxones={taxonesFiltrados} seleccionarTaxon={seleccionarTaxon} />
                    )}

                    {taxonSeleccionado && (
                        <div>
                            <h3>Taxón Seleccionado: {taxonSeleccionado}</h3>
                        </div>
                    )}
                </div>

                <div className='form-grid-5'>
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="determinador">Determinador(es)</label>
                        <div className="input-button-group">
                            <input
                                type="text"
                                id="determinador"
                                value={determinador}
                                onChange={(e) => setDeterminador(e.target.value)}
                            />
                            <button type="button" onClick={handleAgregarDeterminador}>Nuevo</button>
                        </div>
                    </div>
                </div>

                <div className="determinadores-container">
                    <h3>Lista de Determinadores Agregados</h3>
                    {determinadoresAgregados.length > 0 ? (
                        <ul>
                            {determinadoresAgregados.map((det, index) => (
                                <li key={index} className="determinador-item">
                                    {det}
                                    <button type="button" onClick={() => handleEliminarDeterminador(index)} className="remove-button">
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No se han agregado determinadores.</p>
                    )}
                </div>

                <div className='form-grid-5'>
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="categoriaTipo">Categoría tipo</label>
                        <select
                            id="categoriaTipo"
                            value={categoriaTipo}
                            onChange={(e) => setCategoriaTipo(e.target.value)}
                        >
                            <option value="holotipo">Holotipo</option>
                            <option value="paratipo">Paratipo</option>
                            <option value="neotipo">Neotipo</option>
                            <option value="neotipo"></option>
                        </select>
                    </div>
                    <div></div>

                    <div className="form-group">
                        <label htmlFor="categoriaTipo">Calificacion de determinador</label>
                        <select
                            id="categoriaTipo"
                            value={categoriaTipo}
                            onChange={(e) => setCategoriaTipo(e.target.value)}
                        >
                            <option value="No taxonomo">No taxonomo</option>
                            <option value="Taxonomo">Taxonomo</option>
                            <option value="Parataxonomo">Parataxonomo</option>
                        </select>
                    </div>
                </div>
                <div className='form-grid-5'>
                    <div></div>
                    <div></div>
                    <div className="form-group">
                        <label htmlFor="fotos">Subir fotos del ejemplar (máx. 5)</label>
                        <input
                            type="file"
                            id="fotos"
                            multiple
                            accept="image/*"
                            onChange={handleFileUpload}
                        />
                        <div>
                            {fotos.map((foto, index) => (
                                <p key={index}>{foto.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='form-grid-5'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                    <div className='input-button-group'>
                        <div></div>
                        <div></div>
                        <div className="input-button-group">
                            <button type="submit" onClick={irSiguiente}>Siguiente</button>
                        </div></div></div>
                <div className='form-grind-1'>
                    <div>

                    </div>
                </div>
            </form>
        </div>
    );
};

const Paso2 = ({ taxonSeleccionado, irAtras, irSiguiente }) => {
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaTermino, setFechaTermino] = useState('');
    const [individuos, setIndividuos] = useState('');
    const [colectores, setColectores] = useState([]);
    const [colectorNuevo, setColectorNuevo] = useState('');
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

    const handleSubmit = (event) => {
        event.preventDefault();
        irSiguiente();
    };
    const handleAtras = (event) => {
        event.preventDefault(); // Evita que el formulario se recargue si está dentro de un form
        irAtras(); // Llama a la función que maneja el ir atrás
    };

    const agregarColector = () => {
        if (colectorNuevo.trim()) {
            setColectores([...colectores, colectorNuevo]);
            setColectorNuevo('');
        }
    };

    const eliminarColector = (index) => {
        const nuevosColectores = colectores.filter((_, i) => i !== index);
        setColectores(nuevosColectores);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Registro de Hongos - Paso 2</h2>
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
                            onChange={(e) => setFechaInicio(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fechaTermino">Término</label>
                        <input
                            type="date"
                            id="fechaTermino"
                            value={fechaTermino}
                            onChange={(e) => setFechaTermino(e.target.value)}
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
                            onChange={(e) => setIndividuos(e.target.value)}
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
                                onChange={(e) => setColectorNuevo(e.target.value)}
                            />
                            <button type="button" onClick={agregarColector}>Agregar</button>
                        </div>
                        <ul>
                            {colectores.map((colector, index) => (
                                <li key={index}>
                                    {colector}
                                    <button className="remove-button" type="button" onClick={() => eliminarColector(index)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

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
                    <div></div>
                    <div className="input-button-group">
                        <button type="button" onClick={handleAtras}>Atrás</button>
                        <button type="submit" onClick={irSiguiente}>Siguiente</button>
                    </div>
                </div>

            </form></div>
    );
};

const Paso3 = ({ irAtras, finalizar, taxonSeleccionado }) => {
    // Estado para manejar las selecciones de los campos
    const [restriccionUso, setRestriccionUso] = useState("");
    const [preparacion, setPreparacion] = useState("");
    const [estadoVida, setEstadoVida] = useState("");
    const [sexo, setSexo] = useState("");
    const [observacionesCuracion, setObservacionesCuracion] = useState("");
    const [familia, setFamilia] = useState("");
    const [genero, setGenero] = useState("");
    const [especie, setEspecie] = useState("");
    const [observacionesTaxones, setObservacionesTaxones] = useState("");
    const [condicionMaterial, setCondicionMaterial] = useState("");
    const [estadoEjemplar, setEstadoEjemplar] = useState("");
    const [nombreComun, setNombreComun] = useState("");
    const [observacionesCuratoria, setObservacionesCuratoria] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para finalizar el registro
        finalizar();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h3>Registro de Hongos - Paso 3</h3>
                <p><strong>Nombre de la especie seleccionada:</strong> {taxonSeleccionado}</p>

                {/* Restricción de uso */}
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
                            {/* Opciones */}
                        </select>
                    </div>
                </div>

                {/* Curación (Tentativo) */}
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
                            {/* Opciones */}
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
                            </select><button type="button" >Nuevo</button> </div>

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

                {/* Botones de navegación */}
                <div className="form-grid-5">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="input-button-group">
                        <button type="button" onClick={irAtras}>Atrás</button>
                        <button type="submit">Finalizar</button>
                    </div>
                </div>
            </form></div>
    );
};
const RegistroInsectos = () => {
    const [step, setStep] = useState(1); // Estado para el paso actual
    const [nombreEspecieSeleccionada, setNombreEspecieSeleccionada] = useState(''); // Estado para la especie seleccionada

    // Función para avanzar al siguiente paso
    const handleNext = () => {
        setStep(step + 1);
    };

    // Función para retroceder al paso anterior
    const handleAtras = () => {
        setStep(step - 1);
    };

    // Función para finalizar el registro
    const handleFinalizar = () => {
        console.log("Registro finalizado");
        // Aquí puedes agregar lógica para guardar los datos o redirigir al usuario.
    };

    // Función para obtener la especie seleccionada en el Paso 1 y pasarla al Paso 3
    const seleccionarEspecie = (especie) => {
        setNombreEspecieSeleccionada(especie);
    };

    return (
        <div>
            {step === 1 && (
                <Paso1
                    irSiguiente={() => {
                        handleNext();
                        seleccionarEspecie('Especie Seleccionada en Paso 1'); // Aquí puedes pasar la especie seleccionada del Paso 1
                    }}
                />
            )}
            {step === 2 && (
                <Paso2
                    irAtras={handleAtras}
                    irSiguiente={handleNext}
                />
            )}
            {step === 3 && (
                <Paso3
                    irAtras={handleAtras}
                    finalizar={handleFinalizar}
                    nombreEspecieSeleccionada={nombreEspecieSeleccionada} // Pasamos el nombre de la especie seleccionada en el Paso 1
                />
            )}
        </div>
    );
};

export default RegistroInsectos;


