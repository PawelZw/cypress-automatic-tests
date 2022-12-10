/// <reference types="cypress" />

describe("E2E - Home Page visibility - Centrum Nautica", () => {
    it("Should check page fully loaded", () => {
        cy.visit("/")
        cy.get("#header").should("be.visible");
        cy.get("#main").should("be.visible");
        cy.get("#menu-item-29").should("be.visible");
        cy.get("#menu-item-18897").should("be.visible");
        cy.get("#menu-item-11180").should("be.visible");
        cy.get("#menu-item-19410").should("be.visible");
        cy.get("#menu-item-639").should("be.visible");
        cy.get("#menu-item-19585").should("be.visible");
        cy.get("#menu-item-295").should("be.visible");
        cy.get("#av_section_1").should("be.visible");
        cy.get("#av-sc-masonry-gallery-1").should("be.visible");
        cy.get("#after_masonry").should("be.visible");
        cy.get("#sr1").should("be.visible");
        cy.get(".container").should("be.visible");
    
        cy.contains('[href="https://www.centrumnautica.pl/kontakt/"]', 'Odkryj CM Nautica').should("be.visible");
       
        cy.contains('[href="https://www.centrumnautica.pl/czartery/"]', 'Sprawdź ofertę').should("be.visible");
       
        cy.contains('[href="https://www.centrumnautica.pl/szkolenia-2/"]', 'Sprawdź ofertę').should("be.visible");
    
        cy.contains('[href="https://www.centrumnautica.pl/eventy-dla-firm/"]', 'Sprawdź ofertę').should("be.visible");
    
        cy.contains('[href="https://www.centrumnautica.pl/serwis/"]', 'Sprawdź ofertę').should("be.visible");
    
        cy.get("#text-4").should("be.visible");
        cy.get("#text-5").should("be.visible");
        cy.get("#text-6").should("be.visible");
    })
        })