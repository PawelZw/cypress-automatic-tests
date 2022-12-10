/// <reference types="cypress" />

describe("E2E - Contact page ", () => {
    it("Writing value in field - Imię i nazwisko ", () => {
        cy.visit("/kontakt/");
        cy.get("#avia_1_1").type("Jan Kowalski", {delay: 500})
   })
   it("Removing value from field - Imię i nazwisko", () => {
    cy.get("#avia_1_1").clear();   
   })
   it("Writing value in field - Adres e-mail ", () => {
    cy.visit("/kontakt/")
    cy.get("#avia_2_1").type("jankowalski@gmail.com", {delay: 500})
   })
   it("Removing value from field - Adres e-mail", () => {
    cy.get("#avia_2_1").clear(); 
   })
   it("Writing value in field - Numer telefonu ", () => {
    cy.visit("/kontakt/")
    cy.get("#avia_3_1").type("666 323 666", {delay: 500})
   })
   it("Removing value from field - Numer telefonu", () => {
    cy.get("#avia_3_1").clear();
   })
   it("Writing value in field - Zadaj pytanie", () => {
    cy.visit("/kontakt/")
    cy.get("#avia_4_1").type("Przykładowe pytanie", {delay: 500})
   })
   it("Removing value from field - Zadaj pytanie", () => {
    cy.get("#avia_4_1").clear();
})
})