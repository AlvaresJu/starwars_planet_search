import React from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumericFilterForm from './components/NumericFilterForm';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <NameFilter />
      <NumericFilterForm />
      <Table />
    </MyProvider>
  );
}

export default App;
