// src/components/Login.js

import React, { useState } from 'react';
import '../styles/Register-step-1.css'; // Asegúrate de crear un archivo CSS para estilos
import TaxonomicList from './ListTaxonomic';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const goToStep2 = () => {
    // Lógica para autenticación aquí (si aplica)
    // Redirigir al componente destino
    navigate('/plants-register2');
  };

  /*Información Nomenclatural*/
  const [niveltaxonomico, setNivelTaxonomico] = useState('');
  const [colector, setColector] = useState('');
  const [numerocatalogo, setNumeroCatalogo] = useState('');
  const [grupoyocolector, setGrupoyoColector] = useState('');
  const [searchgrupoyocolector, setSearchGrupoyoColector] = useState('');
  /*Datos de colección*/
  const [nombrecoleccion, setNombreColeccion] = useState('XAL');
  const [numerocolecta, setNumeroColecta] = useState('');
  /*Datos de colecta*/
  const [fechadecolecta, setFechaDeColecta] = useState('');
  const [grupodedeterminador, setSearchGrupoDeDeterminador] = useState('');
  const [fechadedeterminacion, setFechaDeDeterminacion] = useState('');
  const [tipodedeterminacion, setTipoDeDeterminacion] = useState('');
  const [duplicados, setDuplicados] = useState('');
  const [informacionrestringida, setInformacionRestringida] = useState('');
  const [fechatermino, setFechaTermino] = useState('');
  /*Información geográfica*/
  const [pais, setPais] = useState('');
  const [estado, setEstado] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [latitudList, setLatitudList] = useState('');
  


  
  

  

  /*const goToStep2 = (event) => {
    event.preventDefault();
  };*/

  // Definimos las familias y géneros en un arreglo
  const data = [
        {
          nivel: 'Dominio',
          nombre: 'Eukarya',
          subniveles: [
            {
              nivel: 'Reino',
              nombre: 'Animalia',
              subniveles: [
                {
                  nivel: 'Filo',
                  nombre: 'Chordata',
                  subniveles: [
                    {
                      nivel: 'Clase',
                      nombre: 'Mammalia',
                      subniveles: [
                        {
                          nivel: 'Orden',
                          nombre: 'Carnivora',
                          subniveles: [
                            {
                              nivel: 'Familia',
                              nombre: 'Felidae',
                              subniveles: [
                                {
                                  nivel: 'Género',
                                  nombre: 'Panthera',
                                  subniveles: [
                                    {
                                      nivel: 'Especie',
                                      nombre: 'Panthera leo',
                                      subniveles: [
                                        {
                                          nivel: 'Subespecie',
                                          nombre: 'Panthera leo persica',
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];

  // Estado para controlar qué nivel está desplegado
  const [activeLevel, setActiveLevel] = useState(null);

  // Función para alternar la visibilidad de los items
  const toggleItems = (index) => {
    setActiveLevel(activeLevel === index ? null : index);
  };

  return (
    <div className="step-1-container">
      <form className="step-1-form">
        <h2>Información nomenclatural</h2>
        <div className="form-grid-4">
            <div className="form-group">
                <label htmlFor="niveltaxonomico">Nivel taxonómico</label>
                <select
                    type="input"
                    id="niveltaxonomico"
                    value={niveltaxonomico}
                    onChange={(e) => setNivelTaxonomico(e.target.value)}
                    required
                >
                    <option value="dominio">Dominio</option>
                    <option value="reino">Reino</option>
                    <option value="filo">Filo / División</option>
                    <option value="clase">Clase</option>
                    <option value="orden">Orden</option>
                    <option value="familia">Familia</option>
                    <option value="genero">Género</option>
                    <option value="especie">Especie</option>
                    <option value="subespecie">Subespecie</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="colector">Colector</label>
                <input
                    type="input"
                    id="colector"
                    value={colector}
                    onChange={(e) => setColector(e.target.value)}
                    required
                />
                 <select
                    type="input"
                    id="niveltaxonomico"
                    value={niveltaxonomico}
                    onChange={(e) => setColector(e.target.value)}
                    required
                >
                    <option value="1">Juan Pérez (Grupo)</option>
                    <option value="2">Fernando Gónzalez (Sólo)</option>
                    <option value="3">María Gutierrez (Sólo)</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="numerocatalogo">Número de catálogo</label>
                    <input
                        type="number"
                        id="numerocatalogo"
                        value={numerocatalogo}
                        onChange={(e) => setNumeroCatalogo(e.target.value)}
                        required
                    />
            </div>
            <div className="form-group">
                <button type="submit" className="step-1-button">Buscar</button>
            </div>
        </div>
        <div className="form-group">
            <h3>Resultados...</h3>
            <TaxonomicList data={data} />
        </div>
        
        <h2 className='h2-section'>Datos de colección</h2>
        <div className="form-grid-2 border-green">
            <div className="form-group">
                <label htmlFor="nombrecoleccion">Nombre de la colección</label>
                    <input
                        type="input"
                        disabled
                        id="nombrecoleccion"
                        value={nombrecoleccion}
                        onChange={(e) => setNombreColeccion(e.target.value)}
                        required
                    />
            </div>
            <div className="form-group">
                <label htmlFor="numerocatalogo">Número de catálogo</label>
                    <input
                        type="number"
                        id="numerocatalogo"
                        value={numerocatalogo}
                        onChange={(e) => setNumeroCatalogo(e.target.value)}
                        required
                    />
            </div>
        </div>

        
        <div className="form-grid-2 border-green">
            <div className="form-group">
              <h2 className='h2-section'>Datos de colecta</h2>
              <div className="form-grid-2 border-green">
                <div className="form-group">
                  <label htmlFor="numerocolecta">Grupo y/o colector</label>
                      <input
                          type="input"
                          id="grupoyocolector"
                          value={grupoyocolector}
                          onChange={(e) => setGrupoyoColector(e.target.value)}
                          required
                      />
                    <select
                        type="input"
                        id="searchgrupoyocolector"
                        value={searchgrupoyocolector}
                        onChange={(e) => setSearchGrupoyoColector(e.target.value)}
                        required
                    >
                        <option value="1">Juan Pérez</option>
                        <option value="0">Nuevo</option>
                    </select>
                </div>
                <div className="form-group">
                  <label htmlFor="fechadecolecta">Fecha de colecta</label>
                      <input
                          type="date"
                          id="fechadecolecta"
                          value={fechadecolecta}
                          onChange={(e) => setFechaDeColecta(e.target.value)}
                          required
                      />
                </div>
              </div>
              <div className="form-grid-2 border-green">
                <div className="form-group">
                  <label htmlFor="numerocolecta">Número de colecta</label>
                      <input
                          type="number"
                          id="numerocolecta"
                          value={numerocolecta}
                          onChange={(e) => setNumeroColecta(e.target.value)}
                          required
                      />
                </div>
                <div className="form-group">
                  <label htmlFor="duplicados">Duplicados</label>
                      <input
                          type="number"
                          id="duplicados"
                          value={duplicados}
                          onChange={(e) => setDuplicados(e.target.value)}
                          required
                      />
                </div>
              </div>
            </div> 

            <div className="form-group">
              <h2 className='h2-section'>Determinación</h2>
              <div className="form-grid-3 border-green">
                <div className="form-group">
                  <label htmlFor="grupoyodeterminador">Grupo y/o determinador</label>
                      <input
                          type="input"
                          id="grupoyocolector"
                          value={grupoyocolector}
                          onChange={(e) => setGrupoyoColector(e.target.value)}
                          required
                      />
                      <select
                          type="input"
                          id="searchgrupodedeterminador"
                          value={searchgrupoyocolector}
                          onChange={(e) => setSearchGrupoDeDeterminador(e.target.value)}
                          required
                      >
                          <option value="1">Juan Pérez</option>
                          <option value="0">Nuevo</option>
                      </select>
                </div>
                <div className="form-group">
                  <label htmlFor="fechadedeterminacion">Fecha</label>
                      <input
                          type="date"
                          id="fechadedeterminacion"
                          value={fechadedeterminacion}
                          onChange={(e) => setFechaDeDeterminacion(e.target.value)}
                          required
                      />
                </div>
                <div className="form-group">
                  <label htmlFor="tipo">Tipo</label>
                  <select
                          type="select"
                          id="tipodedeterminacion"
                          value={tipodedeterminacion}
                          onChange={(e) => setTipoDeDeterminacion(e.target.value)}
                          required
                      >
                          <option value="1">Holotipo</option>
                          <option value="2">Lectotipo</option>
                          <option value="3">Isoneotipo</option>
                          <option value="4">Isolectotipo</option>
                          <option value="5">Isosintipo</option>
                          <option value="6">Isotipo</option>
                          <option value="7">Neotipo</option>
                          <option value="8">Sintipo</option>
                          <option value="9">Paratipo</option>
                      </select>
                </div>
              </div>
              
              <div className="border-green">
                <div className="form-grid-1">
                  <h2 className='h2-section'>Restricciones de uso</h2>
                </div>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="informacionrestringida">Información restringida</label>
                        <select
                            type="input"
                            id="informacionrestringida"
                            value={informacionrestringida}
                            onChange={(e) => setInformacionRestringida(e.target.value)}
                            required
                        >
                            <option value="0">Ninguna</option>
                            <option value="1">Toda</option>
                            <option value="2">Localidad</option>
                        </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="fechadedeterminacion">Fecha término</label>
                        <input
                            type="date"
                            id="fechadedeterminacion"
                            value={fechadedeterminacion}
                            onChange={(e) => setFechaDeDeterminacion(e.target.value)}
                            required
                        />
                  </div>
                </div>
              </div>
             

            </div>      
        </div>

        <h2>Información geográfica</h2>
        <div className="border-green">
          <div className="form-grid-5">
              <div className="form-group">
                  <label htmlFor="pais">País</label>
                  <select
                      type="input"
                      id="pais"
                      value={pais}
                      onChange={(e) => setPais(e.target.value)}
                      required
                  >
                      <option value="pais">México</option>
                  </select>
              </div>
              <div className="form-group">
                  <label htmlFor="estado">Estado / State</label>
                  <select
                      type="input"
                      id="estado"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      required
                  >
                      <option value="1">Veracruz</option>
                  </select>
              </div>
              <div className="form-group">
                  <button type="submit" className="step-1-button max-width-66px">Nuevo</button>
              </div>
              <div className="form-group">
                  <label htmlFor="municipio">Municipio</label>
                  <select
                      type="input"
                      id="estado"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      required
                  >
                      <option value="1">Xalapa</option>
                  </select>
              </div>
              <div className="form-group">
                  <button type="submit" className="step-1-button max-width-66px">Nuevo</button>
              </div>
          </div>

          <div className="form-grid-1 max-width-500px">
              <div className="form-group">
                <label htmlFor="numerocolecta">Buscar localidad por palabra clave</label>
                    <input
                        type="input"
                        id="grupoyocolector"
                        value={grupoyocolector}
                        onChange={(e) => setGrupoyoColector(e.target.value)}
                        required
                    />
                  <select
                      type="input"
                      id="latitudList"
                      value={latitudList}
                      onChange={(e) => setLatitudList(e.target.value)}
                      required
                  >
                      <option value="1">Xalapa Loc 1</option>
                      <option value="0">Xalapa Loc 2</option>
                  </select>
              </div>
          </div>

          <div className="form-grid-7">
              <div className="form-group">
                  <label htmlFor="pais">Latitud</label>
                  <input
                    type="input"
                    id="colector"
                    value={colector}
                    placeholder="Grado"
                    onChange={(e) => setColector(e.target.value)}
                />
              </div>
              <div className="form-group">
                  <label htmlFor="pais">.</label>
                  <input
                    type="input"
                    id="colector"
                    value={colector}
                    placeholder="Minuto"
                    onChange={(e) => setColector(e.target.value)}
                />
              </div>
              <div className="form-group">
                  <label htmlFor="pais">.</label>
                  <input
                    type="input"
                    id="colector"
                    value={colector}
                    placeholder="Segundo"
                    onChange={(e) => setColector(e.target.value)}
                />
              </div>
              <div className="form-group">
                  <label htmlFor="pais">Longitud</label>
                  <input
                    type="input"
                    id="colector"
                    value={colector}
                    placeholder="Grado"
                    onChange={(e) => setColector(e.target.value)}
                />
              </div>
              <div className="form-group">
                  <label htmlFor="pais">.</label>
                  <input
                    type="input"
                    id="colector"
                    value={colector}
                    placeholder="Minuto"
                    onChange={(e) => setColector(e.target.value)}
                />
              </div>
              <div className="form-group">
                  <label htmlFor="pais">.</label>
                  <input
                    type="input"
                    id="colector"
                    value={colector}
                    placeholder="Segundo"
                    onChange={(e) => setColector(e.target.value)}
                />
              </div>
              <div className="form-group">
                  <label htmlFor="pais">.</label>
                  <input
                    type="input"
                    id="colector"
                    value={colector}
                    placeholder="Altitud (m)"
                    onChange={(e) => setColector(e.target.value)}
                />
              </div>
          </div>
        </div>
        
        <div className="form-group">
            <button onClick={goToStep2} className="step-1-button-principal">Siguiente</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
