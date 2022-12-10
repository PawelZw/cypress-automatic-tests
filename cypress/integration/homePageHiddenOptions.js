/// <reference types="cypress" />

describe("E2E - Home Page hidden options - Czartery", () => {
    it("Should select hidden option - Rezerwacja", () => {
        cy.visit("/")
        cy.focusReservationTab();
        //cy.get("#menu-item-18897").trigger("focus")
        cy.get("#menu-item-21109").click();
})
    it("Should select hidden option - Informacje & FAQ", () => {
        cy.visit("/")
        cy.focusReservationTab();
        cy.get("#menu-item-18896").click();
})
it("Should select hidden option - Nasza Flota", () => {
    cy.visit("/")
    cy.focusReservationTab();
    cy.get("#menu-item-18909").click();
})
it("Should select hidden option - Cennik Łodzi", () => {
    cy.visit("/")
    cy.focusReservationTab();
    cy.get("#menu-item-19145").click();
})
it("Should select hidden option - Cennik Skuterów", () => {
    cy.visit("/")
    cy.focusReservationTab();
    cy.get("#menu-item-19346").click();
})
})

describe("E2E - Home Page hidden options - Sprzedaż", () => {
    it("Should select hidden option - Bayliner", () => {
        cy.visit("/")
        cy.focusSaleTab();
        cy.get("#menu-item-17948").click();
})
it("Should select hidden option - Parker", () => {
    cy.visit("/")
    cy.focusSaleTab();
    cy.get("#menu-item-18788").click();
})
it("Should select hidden option - Uttern", () => {
    cy.visit("/")
    cy.focusSaleTab();
    cy.get("#menu-item-18729").click();
})
it("Should select hidden option - SEA-DOO", () => {
    cy.visit("/")
    cy.focusSaleTab();
    cy.get("#menu-item-11204").click();
})
it("Should select hidden option - CAN-AM OFF-ROAD", () => {
    cy.visit("/")
    cy.focusSaleTab();
    cy.get("#menu-item-18619").click();
})
it("Should select hidden option - CAN-AM ON-ROAD", () => {
    cy.visit("/")
    cy.focusSaleTab();
    cy.get("#menu-item-18683").click();
})
})

