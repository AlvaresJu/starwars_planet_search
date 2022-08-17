import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => {
    const getPalnetsData = async () => {
      try {
        const apiResponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const apiData = await apiResponse.json();
        const selectedData = apiData.results.map((planet) => {
          delete planet.residents;
          return planet;
        });
        setPlanetsData(selectedData);
      } catch (error) {
        console.log(error);
      }
    };
    getPalnetsData();
  }, []);

  const contextValue = { planetsData };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
