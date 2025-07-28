describe('Handling multiple locators', () => {
    it('Selecting chekcbox elements', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').each(($el, index, $list) => {
            cy.wrap($el).check().should('be.checked');
            if ($el.prop('id') === 'checkBoxOption2') {
                cy.wrap($el).uncheck().should('not.be.checked');
            }
        })
        cy.get('input[type="checkbox"]').check(['option1', 'option2']);
    })

    it('Selecting dynamic dropdowns', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'India');
    })
})