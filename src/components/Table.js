import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { planetsData } = useContext(MyContext);

  if (planetsData.length > 0) {
    const planetsInfo = Object.keys(planetsData[0]);
    return (
      <table>
        <caption>StarWars Planets</caption>
        <thead>
          <tr>
            { planetsInfo.map((info) => <th key={ info }>{ info }</th>) }
          </tr>
        </thead>
        <tbody>
          { planetsData.map((planet) => (
            <tr key={ planet.name }>
              { planetsInfo.map((info, index) => (
                <td key={ index }>{ planet[info] }</td>
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
