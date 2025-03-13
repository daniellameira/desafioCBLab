describe('template spec', () => {
  it('Acessando a página principal com usuário logado e autenticado!', () => {
    cy.visit('/') // visita a URL do app Coco Bambu definido no Cypress.Config!
    cy.get('.nav-bar-content > :nth-child(4)').click()
    cy.get('.ng-star-inserted > .option-item').click()
    cy.get('#username > .input-wrapper > .native-wrapper').type('danielfilippe@hotmail.com')
    cy.get('#ion-input-3').type('@12345Daniel')
    cy.get('.buttons-container > :nth-child(1) > .ng-tns-c566118524-1').click()
    cy.wait(500)
    cy.get('h1').contains('CÓDIGO ENVIADO')
    cy.wait(500)
    cy.get('.is-primary').click()
    cy.get('cb-otp-input input').invoke('val', 'A').trigger()
    cy.get('.buttons-container > :nth-child(1) > .ng-tns-c566118524-1').click()





  })
})