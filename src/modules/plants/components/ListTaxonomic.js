import React, { useState } from 'react';
import '../styles/TaxonomicList.css';
import gear from '../../../images/gear.png';

const TaxonomicList = ({ data }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  /*Call action modal*/
  const handleClick = (e) => {
            e.preventDefault();
            if (e.type === 'click') {
                console.log('Right click');
        }
    };

  const renderLevels = (levels, parentKey = '') => {
    return (
      <ul className="taxonomic-lista">
        {levels.map((level, index) => {
          const key = `${parentKey}-${index}`;
          return (
            <li key={key} className="nivel">
              <div className="nivel-header">
                <div className="form-group padding-left-list-5">
                    <button onClick={() => toggleExpand(key)} type="div">+</button>
                </div>
                <div className='padding-left-list-5' onClick={handleClick}>{level.nivel}: {level.nombre}</div>
              </div>
              {expanded[key] && level.subniveles && level.subniveles.length > 0 && (
                <div className="subniveles" >
                    <div className="form-group">
                        {renderLevels(level.subniveles, key)}
                    </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return <div>{renderLevels(data)}</div>;
};

export default TaxonomicList;

/*
Ociones sobr ee ejemplar
Nuevo ejemplar
Mover ejemplar
*/
