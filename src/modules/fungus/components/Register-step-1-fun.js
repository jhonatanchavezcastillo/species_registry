// Importa las dependencias necesarias de React y otras librerías
import React, { useState } from 'react';
import '../style/Register-step-1-fun.css';
import { useNavigate } from 'react-router-dom';


// Componente que muestra una tabla con taxones y permite seleccionar uno
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

// Componente principal del paso 1 del formulario
const Paso1 = () => {
    const {
        institucion, setInstitucion,
        objetoColeccion, setObjetoColeccion,
        numeroCatalogo, setNumeroCatalogo,
        idIngreso, setIdIngreso,
        taxon, setTaxon,
        taxonesFiltrados, setTaxonesFiltrados,
        taxonSeleccionado, setTaxonSeleccionado,
        determinador, setDeterminador,
        determinadoresAgregados, setDeterminadoresAgregados,
        categoriaTipo, setCategoriaTipo,
        fotos, setFotos
    } = useFormularioContext();

    const navigate = useNavigate();

    const goToStep2 = () => {
        navigate('/register-step-2-fun');
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
        setTaxonesFiltrados([]);
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
                 {/* Campos para selección de institución y objeto de colección */}
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
                {/* Campo de texto para número de catálogo y ID de ingreso */}
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
                {/* Campo de búsqueda para taxones */}
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
                {/* Tabla de resultados de búsqueda de taxones */}
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

                {/* Campos para agregar y listar determinadores */}
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

                {/* Campo para seleccionar la categoría del tipo */}                
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
                    
                    {/* Campo para subir fotos */}
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
                    {/* Botones para navegar entre pasos */}
                    <div className='input-button-group'>
                        <div className="form-group">
                            <button onClick={goToStep2} className="button-back">Siguiente</button>
                        </div></div></div>
                <div className='form-grind-1'>
                    <div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Paso1;
