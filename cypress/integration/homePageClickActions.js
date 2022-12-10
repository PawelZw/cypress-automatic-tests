/// <reference types="cypress" />

import ClickActionPage from "../support/page-object/homeClickActionsPage";

describe("E2E - Click actions - Home Page - Centrum Nautica ", () => {
    it("Should click on element - Szkolenia", () => {
        cy.visit("/")
        cy.contains("#menu-item-19410", 'SZKOLENIA').click();
        ClickActionPage.clickOnButton1();
        
    })
    it("Should click on element - Eventy", () => {
        cy.visit("/")
        cy.contains("#menu-item-639", 'EVENTY').click();
        ClickActionPage.clickOnButton1();
    })
    it("Should click on element - Serwis", () => {
        cy.visit("/")
        cy.contains("#menu-item-19585", 'SERWIS').click();
        ClickActionPage.clickOnButton1();
    })
    it("Should click on element - Eventy", () => {
        cy.visit("/")
        cy.contains("#menu-item-295", 'KONTAKT').click();
        ClickActionPage.clickOnButton1();
    })
}) 