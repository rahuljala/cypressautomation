describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.navbar-brand').should('have.text', 'Kitchen Sink')


  })

  it.only('select from table', ()=>{
     cy.visit('https://www.w3schools.com/html/html_tables.asp') 
    cy.get('.w3-white.w3-padding.notranslate.w3-padding-16')
    .get('tr').eq(1).contains('alfred')
    

    

    



  })

})

describe('Test Cases Page', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/test_cases');
  });

  it('Verify Test Cases Page is loaded', () => {
    cy.url().should('include', '/test_cases');
    cy.get('h2').contains('Test Cases').should('be.visible');
  });

  it('Verify each test case is listed', () => {
    cy.get('.test_cases_list').should('be.visible');
    cy.get('.test_cases_list li').each(($el, index) => {
      cy.wrap($el).should('be.visible');
      cy.wrap($el).find('a').should('have.attr', 'href');
    });
  });

  it('Verify navigation to a specific test case', () => {
    cy.get('.test_cases_list li a').first().click();
    cy.url().should('include', '/test_case');
    cy.get('h2').should('be.visible');
  });
});