/// <reference types="cypress" />

describe("E2E - Home Page Assertions - Centrum Nautica ", () => {
    it("Text assertions Odkryj", () => {
        cy.visit("/")
        cy.get("#menu-item-29").should("contain", "ODKRYJ");
   })
    it("Text assertions Czartery", () => {
    cy.visit("/")
    cy.get("#menu-item-18897").should("contain", "CZARTERY");
   })
    it("Text assertions Sprzedaż", () => {
    cy.visit("/")
    cy.get("#menu-item-11180").should("contain", "SPRZEDAŻ");
   })
    it("Text assertions Szkolenia", () => {
    cy.visit("/")
    cy.get("#menu-item-19410").should("contain", "SZKOLENIA");
   })
    it("Text assertions Eventy", () => {
    cy.visit("/")
    cy.get("#menu-item-639").should("contain", "EVENTY");
   })
    it("Text assertions Serwis", () => {
    cy.visit("/")
    cy.get("#menu-item-19585").should("contain", "SERWIS");
   })
    it("Text assertions Kontakt", () => {
    cy.visit("/")
    cy.get("#menu-item-295").should("contain", "KONTAKT");
   })
})