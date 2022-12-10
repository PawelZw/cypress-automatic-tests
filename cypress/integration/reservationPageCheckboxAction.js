/// <reference types="cypress" />

describe("E2E - Checkbox action - Rezerwacja", () => {
    it("Should check checkbox work", () => {
        cy.visit("/rezerwacja/#")
        cy.get('[value="145"]').check({force: true}).invoke("prop", "checked").then(signed => {
            cy.log(signed)
        })
        cy.get('[value="148"]').check({force: true}).invoke("prop", "checked").then(signed => {
            cy.log(signed)
        })
        cy.get('[value="146"]').check({force: true}).invoke("prop", "checked").
        then(signed => {
            cy.log(signed)
        })
    })
})