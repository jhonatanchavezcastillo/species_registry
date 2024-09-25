// src/components/Login.js

import React, { useState } from 'react';
import './styles/TaxonomicCatalog.css'; // Asegúrate de crear un archivo CSS para estilos
import TaxonomicList from '../modules/plants/components/ListTaxonomic';

const Login = () => {
  /*Información asociada hábit*/
  const [ira, setIrA] = useState('');
  const [niveltaxonomico, setNivelTaxonomico] = useState('');
  const [numerocatalogo, setNumeroCatalogo] = useState('');
  
  

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

    // Estado para controlar el valor seleccionado
    const [selectedOption, setSelectedOption] = useState('correcto');

    // Función para manejar el cambio de selección
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

   

  return (
    <div className="step-1-container">
      <form className="step-1-form">
        
        <div className="form-grid-2">
            <div className="form-group">
                <div className='border-green'>

                    <div className="form-group">
                        <h2>Catálogo taxonómico</h2>
                        <div className="form-group">
                            <label htmlFor="tipovegetacion">Nivel taxonómico</label>
                            <select
                                type="select"
                                id="niveltaxonomico"
                                value={niveltaxonomico}
                                onChange={(e) => setNivelTaxonomico(e.target.value)}
                                required
                            >
                                <option value="0">Reino plantea</option>
                                <option value="1">División</option>
                                <option value="2">Clase</option>
                                <option value="3">Orden</option>
                                <option value="4">Familia</option>
                                <option value="5">Género</option>
                                <option value="6">Especie</option>
                                <option value="7">Infraespecífica</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-grid-2 margin-top-20px">
                        <div className="form-group">
                            <label htmlFor="habito" className='text-align'>Ir a...</label>
                        </div>
                        <div className="form-group">
                        <input
                            type="input"
                            id="ira"
                            value={ira}
                            onChange={(e) => setIrA(e.target.value)}
                            required
                        />
                        </div>
            
                    </div>
                    <div className="form-group margin-top-20px">
                        <TaxonomicList data={data} />
                    </div>
                </div>
            </div>


            <div className="form-group">
              <div className="form-group">
                  <div className='border-green'>
                      <label htmlFor="habito">Estatus</label>
                      <div className="form-grid-4">
                          <div className="form-group">
                              <label>
                                  <input
                                      type="radio"
                                      value="correcto"
                                      checked={selectedOption === 'correcto'}
                                      onChange={handleOptionChange}
                                      className="radiobutton-determinacion"
                                      />
                                      Correcto
                              </label>
                          </div>
                          <div className="form-group">
                              <label>
                              <input
                                  type="radio"
                                  value="sinonimo"
                                  checked={selectedOption === 'sinonimo'}
                                  onChange={handleOptionChange}
                                  className="radiobutton-determinacion"
                                  />
                                  Sinónimo
                              </label>
                          </div>
                          <div className="form-group">
                              <label>
                                  <input
                                      type="radio"
                                      value="nd"
                                      checked={selectedOption === 'nd'}
                                      onChange={handleOptionChange}
                                      className="radiobutton-determinacion"
                                      />
                                      ND
                              </label>
                          </div>
                          <div className="form-group">
                              <label>
                              <input
                                  type="radio"
                                  value="na"
                                  checked={selectedOption === 'na'}
                                  onChange={handleOptionChange}
                                  className="radiobutton-determinacion"
                                  />
                                  NA
                              </label>
                          </div>
                      </div>

                      <div className="form-group margin-top-20px">
                        <label htmlFor="tipovegetacion">Taxón</label>
                        <div className="button-general max-widt-200">Dar de alta</div>
                      </div>

                      <div className="form-group margin-top-20px">
                        <label htmlFor="tipovegetacion">Nombre de autoridad</label>
                        <input
                          type="input"
                          id="numerocatalogo"
                          value={numerocatalogo}
                          onChange={(e) => setNumeroCatalogo(e.target.value)}
                          className='max-width-300px'
                        />
                      </div>

                      <div className="form-group margin-top-20px">
                        <label htmlFor="tipovegetacion">Cita nomenclatural</label>
                        <input
                          type="input"
                          id="numerocatalogo"
                          value={numerocatalogo}
                          onChange={(e) => setNumeroCatalogo(e.target.value)}
                          className='max-width-300px'
                        />
                      </div>
                  </div>
              </div>

              <div className="form-group margin-top-20px">
                  <div className='border-green'>
                      <div className="form-grid-1">
                          <div className="form-group">
                            <div className="form-group margin-top-20px">
                              <label htmlFor="tipovegetacion">Relaciones</label>
                              <input
                                type="input"
                                id="numerocatalogo"
                                value={numerocatalogo}
                                onChange={(e) => setNumeroCatalogo(e.target.value)}
                                className='max-width-300px'
                              />
                              <div className="form-grid-4 margin-top-5px text-align-center">
                                  <div className="form-group">
                                      <div type="submit" className="label-data">Sinónimo 1</div>
                                  </div>
                                  <div className="form-group">
                                      <div type="submit" className="label-data">Sinónimo 1</div>
                                  </div>
                                  <div className="form-group">
                                      <div type="submit" className="label-data">Sinónimo 1</div>
                                  </div>
                                  <div className="form-group">
                                      <div type="submit" className="label-data">Sinónimo 1</div>
                                  </div>
                              </div>
                            </div>
                          </div>
                      </div>   
                  </div>
              </div>
            </div>
        </div>

        <div className="form-grid-4">
            <div className="form-group"></div>
            <div className="form-group">
                <button type="submit" className="button-back">Salir</button>
            </div>
            <div className="form-group">
                <button type="submit" className="button-finish">Guardar</button>
            </div>
            <div className="form-group"></div>
        </div>

      </form>
    </div>
  );
};

export default Login;