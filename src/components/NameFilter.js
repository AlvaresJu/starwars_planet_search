import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function NameFilter() {
  const { filterByName, handleNameFilter } = useContext(MyContext);

  return (
    <form>
      <h2>Filtro por Nome</h2>
      <label htmlFor="planetName">
        Nome do Planeta:
        <input
          type="text"
          data-testid="name-filter"
          id="planetName"
          value={ filterByName.name }
          onChange={ (event) => handleNameFilter(event) }
        />
      </label>
    </form>
  );
}

export default NameFilter;
