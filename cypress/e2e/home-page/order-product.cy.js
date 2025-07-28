describe('Order Product Tests', function() {
before(function() {
    cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
    cy.fixture('roles.json').then(function(data) {
        this.rolesFromFixture = data.roles;
        //this.rolesFromFixture.push(...data.roles);
    });
})
const roles = ['Consultant', 'Student', 'Teacher'];

roles.forEach((role) => {
it('Login to the application', () => {
cy.get('#username').type('rahulshettyacademy');
cy.get('#password').type('learning');
cy.get('select.form-control').select(role);
cy.get('#terms').check();
cy.get('#signInBtn').click();
})
})

it.only('Login using fixture data', function() {
    this.rolesFromFixture.forEach((fixtureRole) => {
        cy.get('#username').type('rahulshettyacademy');
cy.get('#password').type('learning');
cy.get('select.form-control').select(fixtureRole);
cy.get('select.form-control').find('option:selected').should('have.text', fixtureRole);
cy.get('#terms').check();
cy.get('#signInBtn').click();
    })
})

})