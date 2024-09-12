// src/components/Login.js

import React, { useState } from 'react';
import '../styles/Register-step-1.css'; // Asegúrate de crear un archivo CSS para estilos
import TaxonomicList from './ListTaxonomic';

const Login = () => {
  const [niveltaxonomico, setNivelTaxonomico] = useState('');
  const [colector, setColector] = useState('');
  const [numerocolecta, setNumeroColecta] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
      <form className="step-1-form" onSubmit={handleSubmit}>
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
                <label htmlFor="numerocolecta">Número de colecta</label>
                    <input
                        type="input"
                        id="numerocolecta"
                        value={numerocolecta}
                        onChange={(e) => setNumeroColecta(e.target.value)}
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
        
        <div className="form-grid-2 border-green">
            <h2 className='h2-section'>Datos de colección</h2>
            <div className="form-group">

            </div>
        </div>

        <div className="form-group">
            <button type="submit" className="step-1-button-principal">Siguiente</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
