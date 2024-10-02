// src/components/Login.js

import React, { useState } from 'react';
import '../styles/Register-step-1.css'; // Asegúrate de crear un archivo CSS para estilos
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const goToStep1 = () => {
        // Lógica para autenticación aquí (si aplica)
        // Redirigir al componente destino
        navigate('/register-step-1');
    };

  /*Información asociada hábit*/
  const [tipovegetacion, setTipoVegetacion] = useState('');
  const [datosetiqueta, setDatosEtiqueta] = useState('');
  const [ambiente, setAmbiente] = useState('');
  /*Información asociada a la planta*/
  const [habito, setHabito] = useState('');
  const [datosetiquetaplanta, setDatosEtiquetaPlanta] = useState('');
  const [nombrescomunes, setNombresComunes] = useState('');
  const [usos, setUsos] = useState('');
  const [datosusosplantas, setUsosPlantas] = useState('');
  /*Determinación del ejemplar*/
  const data_determinacion_ejemplar = [];
  const [nuevadeterminacion, setNuevaDeterminacino] = useState('');
  const [determinador, setDeterminador] = useState('');
  const [fechadeterminacion, setFechaDeterminacion] = useState('');
  const [tipo, setTipo] = useState('');
  const [estatusdeterminacion, setEstatusDeterminacion] = useState('');
  /**Información asociada a la planta */
  const [datosusos, setDatosUsos] = useState('');
  /**Nueva determinación */
  const [nombredeterminacion, setNombreTaxon] = useState('');
  

  // Estado para controlar el valor seleccionado
  const [selectedOption, setSelectedOption] = useState('Actual');

  // Función para manejar el cambio de selección
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="step-1-container">
      <form className="step-1-form" onSubmit={handleSubmit}>
        <h4>Nombre de especie seleccionada: </h4>
        <div className='border-green'>
            <h2>Información asociada hábit</h2>
            <div className="form-grid-2">
                <div className="form-group">
                    <label htmlFor="tipovegetacion">Tipo de vegetación</label>
                    <select
                        type="select"
                        id="tipovegetacion"
                        value={tipovegetacion}
                        onChange={(e) => setTipoVegetacion(e.target.value)}
                        required
                    >
                        <option value="1">Miranda</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="datosetiqueta">Datos en etiqueta</label>
                    <input
                    type="input"
                    id="datosetiqueta"
                    value={datosetiqueta}
                    onChange={(e) => setDatosEtiqueta(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="form-grid-2">
                <div className="form-group">
                    <label htmlFor="ambiente">Ambiente</label>
                    <select
                        type="select"
                        id="ambiente"
                        value={tipovegetacion}
                        onChange={(e) => setAmbiente(e.target.value)}
                        required
                    >
                        <option value="1">Terrestre</option>
                    </select>
                </div>
                <div className="form-grid-4">
                    <div className="form-group">
                        <div type="submit" className="label-data">Info. etiqueta 1</div>
                    </div>
                    <div className="form-group">
                        <div type="submit" className="label-data">Info. etiqueta 2</div>
                    </div>
                    <div className="form-group">
                        <div type="submit" className="label-data">Info. etiqueta 3</div>
                    </div>
                    <div className="form-group">
                        <div type="submit" className="label-data">Info. etiqueta 4</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='border-green'>
            <h2>Información asociada a la planta</h2>
            <div className="form-grid-2">
                <div className="form-group">
                    <label htmlFor="habito">Hábito</label>
                    <select
                        type="select"
                        id="habito"
                        value={habito}
                        onChange={(e) => setHabito(e.target.value)}
                        required
                    >
                        <option value="1">Árbol</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="datosetiqueta">Datos en etiqueta</label>
                    <input
                    type="input"
                    id="datosetiqueta"
                    value={datosetiqueta}
                    onChange={(e) => setDatosEtiqueta(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="form-grid-2">
                <div className="form-group">
                    <label htmlFor="nombrescomunes">Nombres comunes (Catálogos)</label>
                    <select
                        type="select"
                        id="nombrescomunes"
                        value={nombrescomunes}
                        onChange={(e) => setNombresComunes(e.target.value)}
                        required
                    >
                        <option value="1"></option>
                    </select>
                </div>
                <div className="form-grid-4">
                    <div className="form-group">
                        <div type="submit" className="label-data">Info. etiqueta 1</div>
                    </div>
                    <div className="form-group">
                        <div type="submit" className="label-data">Info. etiqueta 2</div>
                    </div>
                    <div className="form-group">
                        <div type="submit" className="label-data">Info. etiqueta 3</div>
                    </div>
                    <div className="form-group">
                        <div type="submit" className="label-data">Info. etiqueta 4</div>
                    </div>
                </div>
            </div>
            <div className="form-grid-2">
                <div className="form-group">
                    <label htmlFor="usos">Usos</label>
                    <select
                        type="select"
                        id="usos"
                        value={setUsosPlantas}
                        onChange={(e) => setUsosPlantas(e.target.value)}
                        required
                    >
                        <option value="1">Alimentación animal</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="datosdeusos">Datos de usos</label>
                    <textarea
                        type="input"
                        id="datosusos"
                        className='textarea'
                        value={datosusos}
                        onChange={(e) => setDatosUsos(e.target.value)}
                        required
                    />
                </div>
            </div>
        </div>

        <div className='border-green'>
        <h2>Determinación del ejemplar</h2>
            <div className='border-green'>
                <div className="form-grid-4">
                    <div className="form-group">
                        <label htmlFor="habito">Nombre catálogo actual</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="datosetiqueta">Determinadores</label>
                    
                    </div>
                    <div className="form-group">
                        <label htmlFor="datosetiqueta">Fecha</label>
                    
                    </div>
                    <div className="form-group">
                        <label htmlFor="datosetiqueta">Nombre aceptado</label>
                    
                    </div>
                </div>
                <div className="form-grid-4">
                    <div className="form-group cell-table">
                        <div>Savila amarissma Ortega</div>
                    </div>
                    <div className="form-group">
                        <div>Bedolla</div>
                    </div>
                    <div className="form-group">
                        <div>10/10/1999</div>
                    </div>
                    <div className="form-group">
                        <div>No</div>
                    </div>
                </div>
                <div className="form-grid-4">
                    <div className="form-group cell-table">
                        <div>Savila elegans Vahl</div>
                    </div>
                    <div className="form-group">
                        <div>J. Barrios</div>
                    </div>
                    <div className="form-group">
                        <div>05/12/2024</div>
                    </div>
                    <div className="form-group">
                        <div>Si</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='border-green'>
            <h2>Nueva determinación</h2>
            <div className="form-grid-3">
                <div className="form-group">
                    <label htmlFor="nuevadeterminacion">Nueva determinación</label>
                    <select
                        type="select"
                        id="nombretaxon"
                        value={tipovegetacion}
                        onChange={(e) => setNombreTaxon(e.target.value)}
                        required
                    >
                        <option value="1"></option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="button-large">Dar de alta nuevo taxón</button>
                </div>
            </div>
            <div className="form-grid-3">
                <h2 htmlFor="nuevadeterminacion">Determinación</h2>
            </div>
            <div className="form-grid-3">
                <div className="form-group">
                    <label htmlFor="nuevadeterminacion">Determinador</label>
                    <input
                        type="date"
                        id="nombretaxon"
                        value={tipovegetacion}
                        onChange={(e) => setNombreTaxon(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="nuevadeterminacion">Fecha de determinación</label>
                    <input
                        type="date"
                        id="nombretaxon"
                        value={tipovegetacion}
                        onChange={(e) => setNombreTaxon(e.target.value)}
                        required
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="nuevadeterminacion">Tipo</label>
                    <select
                        type="select"
                        id="nombretaxon"
                        value={tipovegetacion}
                        onChange={(e) => setNombreTaxon(e.target.value)}
                        required
                    >
                        <option value="1">Nombre del taxón</option>
                    </select>
                </div>

                
        
            </div>
            <div className="form-grid-3 margin-top-20px">
                <div className="form-group">Determinación</div>
                <div className="form-group">
                    <label>
                        <input
                            type="radio"
                            value="Actual"
                            checked={selectedOption === 'Actual'}
                            onChange={handleOptionChange}
                            className="radiobutton-determinacion"
                            />
                            Actual
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <input
                        type="radio"
                        value="No actual"
                        checked={selectedOption === 'No actual'}
                        onChange={handleOptionChange}
                        className="radiobutton-determinacion"
                        />
                        No actual
                    </label>
                </div>
            </div>
        </div>
        
        <div className="form-grid-4">
            <div className="form-group"></div>
            <div className="form-group">
                <button onClick={goToStep1} className="button-back">Atrás</button>
            </div>
            <div className="form-group">
                <button type="submit" className="button-finish">Finalizar</button>
            </div>
            <div className="form-group"></div>
        </div>

      </form>
    </div>
  );
};

export default Login;
