const Chance = require('chance');

context('Cadastro', () => {
  it('Efetuar cadastro de usuario', () => {
    cy.visit('Register.html');

    const firstName = chance.first();
    const lastName = chance.last();
    const email = chance.email();
    const phone = chance.phone({ formatted: false });

    cy.get('input[placeholder="First Name"]').type(firstName);

    cy.get('input[placeholder="Last Name"]').type(lastName);

    cy.get('input[ng-model^=Email]').type(email);

    cy.get('input[ng-model^=Phone]').type(phone);

    // check -> radios & checkboxes
    cy.get('input[value=FeMale').check();

    cy.get('input[type=checkbox').check('Movies');


    // select -> select & select2(combos)
    cy.get('select#Skills').select('Javascript');

    cy.get('select#countries').select('Brazil');

    cy.get('select#countries').select('Australia', { force: true});

    cy.get('select#yearbox').select('1997');

    cy.get('select[ng-model^=month]').select('November');

    cy.get('select#daybox').select('15');

    cy.get('input#firstpassword').type('TesteQA@123');

    cy.get('input#secondpassword').type('TesteQA@123');

    cy.get('input#imagesrc').attachFile('imagem.png');

    cy.get('button#submitbtn').click();

  })
})


