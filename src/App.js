import React from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumericFilterForm from './components/NumericFilterForm';
import MyProvider from './context/MyProvider';
import NumericFilterList from './components/NumericFilterList';
import ColumnSortForm from './components/ColumnSortForm';

function App() {
  return (
    <MyProvider>
      <section className="planetsFilter">
        <NameFilter />
        <NumericFilterForm />
        <NumericFilterList />
      </section>
      <section className="planetsSort">
        <ColumnSortForm />
      </section>
      <section className="planetsTable">
        <Table />
      </section>
    </MyProvider>
  );
}

export default App;
