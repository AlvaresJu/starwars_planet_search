import mockFetch from '../mocks/fetch';
import { BUTTON_FILTER, COLUMN_FILTER, COMPARISON_FILTER, VALUE_FILTER } from '../utils/dataTestIds';

describe('3 - Crie um filtro para valores numéricos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        cy.stub(win, 'fetch').callsFake(mockFetch);
      },
    });
  });

  it('Renderize o filtro de coluna', () => {
    const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    cy.getByTestId(COLUMN_FILTER).children().should('have.length', options.length)
      .each((el) => {
        expect(el.text()).to.be.oneOf(options);
      });
  });

  it('Renderize o filtro de comparação', () => {
    const options = ['greater than', 'less than', 'equal to'];
    cy.getByTestId(COMPARISON_FILTER).children().should('have.length', options.length)
      .each((el) => {
        expect(el.text()).to.be.oneOf(options);
      });
  });

  it('Renderize o campo para o valor do filtro', () => {
    cy.getByTestId(VALUE_FILTER).should('be.visible');
  });

  it('Renderize o botão para executar a filtragem', () => {
    cy.getByTestId(BUTTON_FILTER).should('be.visible');
  });

  it('Verifica valores iniciais de cada campo', () => {
    cy.getByTestId(COLUMN_FILTER).should('have.value', 'population');
    cy.getByTestId(COMPARISON_FILTER).should('have.value', 'greater than');
    cy.getByTestId(VALUE_FILTER).should('have.value', '0');
  });

  it('Filtre utilizando apenas o botão de filtrar', () => {
    const DEFAULT_FILTERED_ROWS = 9;
    cy.getByTestId(BUTTON_FILTER).click();
    cy.get('table tr').should('have.length', DEFAULT_FILTERED_ROWS);
  });

  it('Filtre utilizando a comparação "less than"', () => {
    const LESS_FILTERED_ROWS = 7;
    cy.addFilter('surface_water', 'less than', '40');
    cy.get('table tr').should('have.length', LESS_FILTERED_ROWS);
  });

  it('Filtre utilizando a comparação "greater than"', () => {
    const GREATER_FILTERED_ROWS = 8;
    cy.addFilter('diameter', 'greater than', '8900');
    cy.get('table tr').should('have.length', GREATER_FILTERED_ROWS);
  });

  it('Filtre utilizando a comparação "equal to"', () => {
    const EQUALS_FILTERED_ROWS = 2;
    cy.addFilter('population', 'equal to', '200000');
    cy.get('table tr').should('have.length', EQUALS_FILTERED_ROWS);
  });
});
