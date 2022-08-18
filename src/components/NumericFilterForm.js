import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function NumericFilterForm() {
  const { columnFilterOptions,
    currNumericFilters,
    handleNumericFiltersChange,
    handleNumericFilter } = useContext(MyContext);

  return (
    <form>
      <label htmlFor="column">
        Propriedade:
        <select
          data-testid="column-filter"
          id="column"
          value={ currNumericFilters.column }
          onChange={ (event) => handleNumericFiltersChange(event) }
        >
          { (columnFilterOptions.length > 0) && columnFilterOptions.map((option) => (
            <option key={ option }>{ option }</option>
          )) }
        </select>
      </label>
      <label htmlFor="comparison">
        Operador
        <select
          data-testid="comparison-filter"
          id="comparison"
          value={ currNumericFilters.comparison }
          onChange={ (event) => handleNumericFiltersChange(event) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          data-testid="value-filter"
          id="value"
          min={ 0 }
          value={ currNumericFilters.value }
          onChange={ (event) => handleNumericFiltersChange(event) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        disabled={ currNumericFilters.value === '' }
        onClick={ handleNumericFilter }
      >
        Filtrar
      </button>
    </form>
  );
}

export default NumericFilterForm;
