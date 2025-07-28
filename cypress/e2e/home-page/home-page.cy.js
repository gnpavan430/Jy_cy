/// <reference types="cypress" />

describe('Home Page Tests', () => {

    it('select products from the home page', () => {
        Cypress.config('defaultCommandTimeout', 10000);
        cy.fixture('example.json').then((data) => {
            this.data = data;
        })
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.title().should('eq', 'GreenKart - veg and fruits kart');
        cy.get('.search-keyword').type(this.data.name);
        cy.wait(2000); // Wait for the search results to load
        cy.get('.product').should('have.length', 5);
        cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();
        cy.get('@productLocator').find('.product').eq(2).contains('ADDED');
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const productName = $el.find('h4.product-name').text();
            if (productName.includes('Cashews')) {
                cy.wrap($el).find('button').click();
            }
        })
        cy.get('.brand').then((logoElement) => {
            expect(logoElement.text()).to.include('GREENKART');
        })
    })
})