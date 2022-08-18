import React from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumericFilterForm from './components/NumericFilterForm';
import MyProvider from './context/MyProvider';
import NumericFilterList from './components/NumericFilterList';

function App() {
  return (
    <MyProvider>
      <NameFilter />
      <NumericFilterForm />
      <NumericFilterList />
      <Table />
    </MyProvider>
  );
}

export default App;
