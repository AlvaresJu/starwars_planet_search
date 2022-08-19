import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { apiData } from './mocks/testData';

describe('Tests for the Planet Numeric Filters', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(apiData),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  const fullColumnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const operatorOptions = ['maior que', 'menor que', 'igual a'];

  const testId = 'data-testid';
  const planetsNameTestId = 'planet-name';

  test('if inputs and button for numeric filters are properly rendered', async () => {
    render(<App />);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const columnFilterInput = screen.getByRole('combobox', { name: /propriedade/i });
    expect(columnFilterInput).toHaveAttribute(testId, 'column-filter');
    expect(columnFilterInput).toHaveValue(fullColumnOptions[0]);
    fullColumnOptions.forEach((option) => {
      const columnOption = screen.getAllByRole('option', { name: option })[0];
      expect(columnOption).toBeInTheDocument();
    });

    const comparisonFilterInput = screen.getByRole('combobox', { name: /operador/i });
    expect(comparisonFilterInput).toHaveAttribute(testId, 'comparison-filter');
    expect(comparisonFilterInput).toHaveValue(operatorOptions[0]);
    operatorOptions.forEach((option) => {
      const comparisonOption = screen.getByRole('option', { name: option });
      expect(comparisonOption).toBeInTheDocument();
    });

    const valueFilterInput = screen.getByRole('spinbutton', { name: /valor/i });
    expect(valueFilterInput).toHaveAttribute(testId, 'value-filter');
    expect(valueFilterInput).toHaveValue(0);

    const numericFilterBtn = screen.getByRole('button', { name: /filtrar/i });
    expect(numericFilterBtn).toHaveAttribute(testId, 'button-filter');
  });

  test('a filter with initial options of filter inputs', async () => {
    render(<App />);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const plantsFiltered = [
      'Tatooine', 'Alderaan', 'Yavin IV', 'Bespin',
      'Endor', 'Naboo', 'Coruscant', 'Kamino'];

    const numericFilterBtn = screen.getByRole('button', { name: /filtrar/i });
    userEvent.click(numericFilterBtn);

    const planetsName = screen.getAllByTestId(planetsNameTestId);
    plantsFiltered.forEach((planet, index) => {
      expect(planetsName[index]).toHaveTextContent(planet);
    });
  });

  test('a filter with the comparison option: less than', async () => {
    render(<App />);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const plantsFiltered = [
      'Tatooine', 'Alderaan', 'Dagobah', 'Naboo', 'Coruscant'];

    const columnFilterInput = screen.getByRole('combobox', { name: /propriedade/i });
    userEvent.selectOptions(columnFilterInput, ['orbital_period']);

    const comparisonFilterInput = screen.getByRole('combobox', { name: /operador/i });
    userEvent.selectOptions(comparisonFilterInput, ['menor que']);

    const valueFilterInput = screen.getByRole('spinbutton', { name: /valor/i });
    userEvent.type(valueFilterInput, '400');

    const numericFilterBtn = screen.getByRole('button', { name: /filtrar/i });
    userEvent.click(numericFilterBtn);

    const planetsName = screen.getAllByTestId(planetsNameTestId);
    plantsFiltered.forEach((planet, index) => {
      expect(planetsName[index]).toHaveTextContent(planet);
    });
  });

  test('a filter with the comparison option: bigger than', async () => {
    render(<App />);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const plantsFiltered = ['Tatooine', 'Alderaan', 'Yavin IV',
      'Hoth', 'Dagobah', 'Naboo', 'Coruscant', 'Kamino'];

    const columnFilterInput = screen.getByRole('combobox', { name: /propriedade/i });
    userEvent.selectOptions(columnFilterInput, ['rotation_period']);

    const comparisonFilterInput = screen.getByRole('combobox', { name: /operador/i });
    userEvent.selectOptions(comparisonFilterInput, ['maior que']);

    const valueFilterInput = screen.getByRole('spinbutton', { name: /valor/i });
    userEvent.type(valueFilterInput, '20');

    const numericFilterBtn = screen.getByRole('button', { name: /filtrar/i });
    userEvent.click(numericFilterBtn);

    const planetsName = screen.getAllByTestId(planetsNameTestId);
    plantsFiltered.forEach((planet, index) => {
      expect(planetsName[index]).toHaveTextContent(planet);
    });
  });

  test('a filter with the comparison option: equal to', async () => {
    render(<App />);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const plantsFiltered = ['Yavin IV', 'Dagobah', 'Endor'];

    const columnFilterInput = screen.getByRole('combobox', { name: /propriedade/i });
    userEvent.selectOptions(columnFilterInput, ['surface_water']);

    const comparisonFilterInput = screen.getByRole('combobox', { name: /operador/i });
    userEvent.selectOptions(comparisonFilterInput, ['igual a']);

    const valueFilterInput = screen.getByRole('spinbutton', { name: /valor/i });
    userEvent.type(valueFilterInput, '8');

    const numericFilterBtn = screen.getByRole('button', { name: /filtrar/i });
    userEvent.click(numericFilterBtn);

    const planetsName = screen.getAllByTestId(planetsNameTestId);
    plantsFiltered.forEach((planet, index) => {
      expect(planetsName[index]).toHaveTextContent(planet);
    });
  });
});
