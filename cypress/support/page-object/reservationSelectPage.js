class SelectPage {
    get select() {
        return cy.get("#punkt-od");
    }

    selectAllOption() {
        this.select.then(select => {
            cy.wrap(select).find("option").each(item => {
                cy.wrap(select).select(item.text())
            })
         })
    }
}

export default new SelectPage();