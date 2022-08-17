import React from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <NameFilter />
      <Table />
    </MyProvider>
  );
}

export default App;
