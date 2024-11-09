// FormularioContext.js
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const FormularioContext = createContext();

// Hook para facilitar el uso del contexto
export const useFormularioContext = () => {
    return useContext(FormularioContext);
};

// Componente proveedor del contexto
export const FormularioProvider = ({ children }) => {
    const [institucion, setInstitucion] = useState('INECOL - Instituto de Ecología, A.C.');
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

    // Valores que se pasarán a los componentes hijos
    const value = {
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
        esTaxonomo, setEsTaxonomo,
        fotos, setFotos
    };

    return (
        <FormularioContext.Provider value={value}>
            {children}
        </FormularioContext.Provider>
    );
};
