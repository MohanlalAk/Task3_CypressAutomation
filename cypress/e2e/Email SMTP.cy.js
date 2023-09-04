describe("Email SMTP", () => {
    beforeEach(() => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h");
        cy.viewport(1536, 960);
    });
    it("Email SMTP", () => {

        // Click the login button
        cy.get(".mm-profile.user-link.type-no")
            .should('contain', "Login")
            .click();

        // Input the username and password
        cy.get('#j_username').type("admin");
        cy.get("#j_password").type("admin");
        cy.wait(6000)
        cy.get(".waves-button-input").click();

        // Verify that the user is logged in
        cy.get('.mm-profile.user-link.type-no').should('contain', "Admin Admin");

    
        cy.wait(6000)

        cy.xpath('//*[@id="h"]/div/p[13]/a').invoke('removeAttr', 'target').click();

        cy.wait(2000)

        cy.xpath('//*[@id="host"]').clear().type('smtp.gmail.com')
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[2]/input').clear().type('465')
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[3]/select').select('SSL')
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[4]/input').clear().type('sender@gmail.com')
        cy.get('#password').type('12345678#')
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[6]/input').clear().type('recipient@example.com')

        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[2]/div[2]/div[1]/i/input').click();



    })

})