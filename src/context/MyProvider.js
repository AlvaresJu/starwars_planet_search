import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [columnFilterOptions, setColumnFilterOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [currNumericFilters, setCurrNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

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
        setFilteredPlanets(selectedData);
      } catch (error) {
        console.log(error);
      }
    };
    getPalnetsData();
  }, []);

  const handleNameFilter = ({ target }) => {
    setFilterByName({ name: target.value });

    const planetsFilteredByName = planetsData
      .filter(({ name }) => name.toLowerCase().includes(target.value.toLowerCase()));
    setFilteredPlanets(planetsFilteredByName);
  };

  const handleNumericFiltersChange = ({ target }) => {
    setCurrNumericFilters({
      ...currNumericFilters,
      [target.id]: target.value,
    });
  };

  const removeFilterOption = (options, indexToRemove) => {
    options.splice(indexToRemove, 1);
    setColumnFilterOptions(options);
  };

  const handleNumericFilter = () => {
    setFilterByNumericValues([...filterByNumericValues, currNumericFilters]);
    const indexToRemove = columnFilterOptions
      .findIndex((option) => option === currNumericFilters.column);
    removeFilterOption(columnFilterOptions, indexToRemove);
  };

  const getFilteredByNumericValue = (column, comparison, value) => {
    switch (comparison) {
    case 'maior que':
      return filteredPlanets.filter((planet) => Number(planet[column]) > Number(value));
    case 'menor que':
      return filteredPlanets.filter((planet) => Number(planet[column]) < Number(value));
    case 'igual a':
      return filteredPlanets.filter((planet) => planet[column] === value);
    default:
      return filteredPlanets;
    }
  };

  useEffect(() => {
    const applyNumericFilters = () => {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        setFilteredPlanets(getFilteredByNumericValue(column, comparison, value));
      });
      setCurrNumericFilters({
        column: columnFilterOptions[0],
        comparison: 'maior que',
        value: '0',
      });
    };
    applyNumericFilters();
  }, [filterByNumericValues, filterByName]);

  const contextValue = { planetsData,
    filterByName,
    filteredPlanets,
    columnFilterOptions,
    currNumericFilters,
    filterByNumericValues,
    handleNameFilter,
    handleNumericFiltersChange,
    handleNumericFilter };

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
