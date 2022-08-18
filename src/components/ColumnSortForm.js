import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ColumnSortForm() {
  const fullColumnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const { order, handleOrderChange, sortPlanetList } = useContext(MyContext);

  return (
    <form>
      <label htmlFor="columnToSort">
        Ordenar por:
        <select
          data-testid="column-sort"
          id="columnToSort"
          name="column"
          value={ order.column }
          onChange={ (event) => handleOrderChange(event) }
        >
          { fullColumnOptions.map((option) => (
            <option key={ option }>{ option }</option>
          )) }
        </select>
      </label>
      <label htmlFor="ascOption">
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          id="ascOption"
          name="sort"
          value="ASC"
          checked={ order.sort === 'ASC' }
          onChange={ (event) => handleOrderChange(event) }
        />
        Ascendente
      </label>
      <label htmlFor="descOption">
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          id="descOption"
          name="sort"
          value="DESC"
          checked={ order.sort === 'DESC' }
          onChange={ (event) => handleOrderChange(event) }
        />
        Descendente
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ sortPlanetList }
      >
        Ordenar
      </button>
    </form>
  );
}

export default ColumnSortForm;
