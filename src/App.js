import React from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumericFilterForm from './components/NumericFilterForm';
import MyProvider from './context/MyProvider';
import NumericFilterList from './components/NumericFilterList';
import ColumnSortForm from './components/ColumnSortForm';
import Logo from './components/Logo';
import styles from './styles/App.module.css';

function App() {
  return (
    <MyProvider>
      <main className={ styles.container }>
        <section className={ styles.logo }>
          <Logo />
        </section>
        <section className="search">
          <NameFilter />
          <NumericFilterForm />
          <NumericFilterList />
          <ColumnSortForm />
        </section>
        <section className="table">
          <Table />
        </section>
      </main>
    </MyProvider>
  );
}

export default App;
