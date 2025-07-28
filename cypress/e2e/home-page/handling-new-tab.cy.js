describe('Handling child windows', () => {
    it('should handle new tab navigation', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.url().should('include', 'https://www.qaclickacademy.com/');
            
        })
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.url().should('include', 'AutomationPractice');
    });
})