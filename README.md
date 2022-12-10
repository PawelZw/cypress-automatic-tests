# Cypress-tests 
https://www.centrumnautica.pl automatic tests

🔥 Automated tests of the www.centrumnautica.pl website using the cypress framework.


💡 Technologies
  JavaScript



![cypress foto](https://user-images.githubusercontent.com/108124357/203420063-de1f6a9e-24f1-4f71-961f-2e879af09f5c.jpg)

 

# Automated tests include: 
- Testing the visibility of homepage elements
- Tests of entering values into fields for the contact page
- API verification tests
- Click actions on the homepage



![cypress foto 1](https://user-images.githubusercontent.com/108124357/203420087-06116991-d3ba-40e1-ab4d-8660c5fc921f.jpg)





# Code snippet describing the tests shown in the picture above:
 
```
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

```

The code snippet includes visibility tests of selected items.


In photo number two, we can see the successful typing tests for the contact subpage



![cypress foto 2](https://user-images.githubusercontent.com/108124357/203420100-07c59c64-b483-4dbf-bb63-6d1750091122.jpg)




# Code snippet describing the tests shown in the picture above:


 ```
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
   
   ```

Conclusions:
I wrote the code to improve my automated testing skills. Automated tests meticulously test the functionality of the www.centrumnautica.pl website  and are a good example of the basic functions of the Cypress framework.
 
 

🙋‍♂️ Feel free to contact me
Write sth nice ;) Find me on pawelzwolicki@gmail.com

 
👏 Thanks 
