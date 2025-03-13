import 'cypress-real-events/support';
describe.only('Login de usuário e adicionando Camarões à Delicia no carrinho!', () => {
it(' login de usuário!', () => {
  // Fazer login do usuário
    cy.visit('/') // visita a URL do app Coco Bambu definido no Cypress.Config!
    cy.get('.nav-bar-content > :nth-child(4)').click()
    cy.get('.ng-star-inserted > .option-item').click()
    cy.get('#username > .input-wrapper > .native-wrapper').type('danielfilippe@hotmail.com')
    cy.get('#ion-input-3').type('@12345Daniel')
    cy.get('.buttons-container > :nth-child(1) > .ng-tns-c566118524-1').click()
    cy.wait(1500)
    cy.get('h1').contains('CÓDIGO ENVIADO')
    cy.get('.is-primary').click()
    cy.get('cb-otp-input input').realClick().realType('AAAAAA');
    cy.get('.buttons-container > :nth-child(1) > .ng-tns-c566118524-1').click()
    cy.wait(20000) // Carregar as informações do site
  })
it('adicionando Camarões à Delicia no carrinho!', () => {
  cy.visit('https://app-hom.cocobambu.com/delivery/item/6a656e50-c118-4d55-b3a2-f899e1112369')
  cy.wait(5000)
  cy.get('.text-input > .ng-untouched').type('Adicionando os camarões!')
  cy.get('.button-submit-content > :nth-child(1)').click()
  cy.wait(5000)
  cy.get('.tip-options-container > :nth-child(1)').click()
  cy.get('.choose-payment-method-button').click()
  cy.get(':nth-child(2) > .card-payment-label').click()
  cy.wait(5000)
  cy.get('[_ngcontent-ng-c42430733=""][style=""] > .title').should('Confirmar a entrega')
  cy.get('.confirm-button > .confirm-label').click()
  cy.wait(10000)
  cy.should('Pagamento por pix indisponível no momento.')
});
})