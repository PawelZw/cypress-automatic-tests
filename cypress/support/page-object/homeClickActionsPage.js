class ClickActionPage {
    get button1() {
        return cy.get(".avia-standard-logo");
    }

    clickOnButton1() {
        this.button1.click();
            }
         }
    
export default new ClickActionPage();