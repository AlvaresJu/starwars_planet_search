import React, { useContext } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import MyContext from '../context/MyContext';

function NumericFilterList() {
  const { filterByNumericValues,
    removeNumericFilter,
    clearNumericFilters } = useContext(MyContext);
  return (
    <div>
      { (filterByNumericValues.length > 0)
        && filterByNumericValues.map(({ column, comparison, value }, index) => (
          <div data-testid="filter" key={ index }>
            <span>{ `${column} ${comparison} ${value}` }</span>
            <button type="button" onClick={ () => removeNumericFilter(column) }>
              <MdDeleteForever />
            </button>
          </div>
        )) }
      <button
        type="button"
        data-testid="button-remove-filters"
        disabled={ filterByNumericValues.length <= 0 }
        onClick={ clearNumericFilters }
      >
        Remover Filtros
      </button>
    </div>
  );
}

export default NumericFilterList;
