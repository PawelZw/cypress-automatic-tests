/// <reference types="cypress" />

describe("E2E - API Tests GET ", () => {
    it("Veryfication API - GET Contact site ", () => {
        cy.intercept("GET", "https://www.centrumnautica.pl/kontakt/").as("requestOption");
        cy.visit("/kontakt/");
        cy.wait("@requestOption");
        cy.get("@requestOption").then(res => {
            console.log(res);
            expect(res.response.statusCode).to.equal(200);
        })
   })
   it("Veryfication API - GET Sea-Doo site", () => {
    cy.intercept("GET", "https://www.centrumnautica.pl/sea-doo/").as("requestOption");
    cy.visit("/sea-doo/");
    cy.wait("@requestOption");
    cy.get("@requestOption").then(res => {
        console.log(res);
        expect(res.response.statusCode).to.equal(200);
    })
})
it("Veryfication API - GET Can-am off-road site", () => {
    cy.intercept("GET", "https://www.centrumnautica.pl/can-am-off-road-ssv-2/").as("requestOption");
    cy.visit("/can-am-off-road-ssv-2/");
    cy.wait("@requestOption");
    cy.get("@requestOption").then(res => {
        console.log(res);
        expect(res.response.statusCode).to.equal(200);
        })
})
it("Veryfication API - GET Can-am on-road site", () => {
    cy.intercept("GET", "https://www.centrumnautica.pl/can-am-on-road-2/").as("requestOption");
    cy.visit("/can-am-on-road-2/");
    cy.wait("@requestOption");
    cy.get("@requestOption").then(res => {
        console.log(res);
        expect(res.response.statusCode).to.equal(200);
        })
})
})
