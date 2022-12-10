/// <reference types="cypress" />

import SelectPage from "../support/page-object/reservationSelectPage";

describe("E2E - Selecting an option - Port odbioru ", () => {
    it("Should select all option", () => {
        cy.visit("/rezerwacja/#")
        SelectPage.selectAllOption();
//         cy.get("#punkt-od").then(select => {
//             cy.wrap(select).find("option").each(item => {
//                 cy.wrap(select).select(item.text())
//             })
//  })
 })
})