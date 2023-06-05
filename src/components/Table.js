import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import styles from '../styles/Table.module.css';

function Table() {
  const { planetsData, filteredPlanets } = useContext(MyContext);

  if (planetsData.length > 0) {
    const planetsInfo = Object.keys(planetsData[0]);
    return (
      <div className={ styles.container }>
        <table>
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
      </div>
    );
  }
  return <span>Carregando...</span>;
}

export default Table;
