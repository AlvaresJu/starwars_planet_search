import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { planetsData, filteredPlanets } = useContext(MyContext);

  if (planetsData.length > 0) {
    const planetsInfo = Object.keys(planetsData[0]);
    return (
      <table>
        <caption>Planetas do Universo StarWars</caption>
        <thead>
          <tr>
            { planetsInfo.map((info) => <th key={ info }>{ info }</th>) }
          </tr>
        </thead>
        <tbody>
          { filteredPlanets.map((planet) => (
            <tr key={ planet.name }>
              { planetsInfo.map((info, index) => (
                <td
                  key={ index }
                  data-testid={ (info === 'name') ? 'planet-name' : '' }
                >
                  { planet[info] }
                </td>
              )) }
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return <span>Carregando...</span>;
}

export default Table;
