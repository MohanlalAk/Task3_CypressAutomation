describe("Process Deadline with Repetition (Synchronous)", () => {
    beforeEach(() => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h");
        cy.viewport(1536, 960);
    });
    it("Process Deadline with Repetition (Synchronous)", () => {

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

        cy.xpath('//*[@id="h"]/div/table/tbody/tr[4]/td[3]/a').click();

        // verify all on Process Deadline with Repetition (Synchronous)
        cy.get(".runProcess-body-content").should('contain', "Repetitive Deadlines")
        cy.get(".runProcess-body-content").should('contain', "Process Deadline with Repetition (Synchronous)")
        cy.get(".runProcess-body-content").should('contain', "Select Activity User ")
        cy.get(".runProcess-body-content").should('contain', "For Activity inaction, enter total minutes before sending email reminder (max 3x) ")
        cy.get(".runProcess-body-content").should('contain', "Important:", " Remember to set a value of '", "30", "' in the Process Deadline Checker Interval value in ", "System Settings", " Click the ", "Start Process", "button below to test the process deadline.")
        cy.get(".runProcess-body-content").should('contain', "Start Process");

        // Verify each option's value and text
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select') // Select the <select> element
            .find('option') // Find all <option> elements within the <select>
            .each((option, index) => {
                const expectedValues = ['admin', 'cat', 'clark', 'david', 'etta', 'jack', 'julia', 'roy', 'sasha', 'tana', 'terry', 'tina'];
                const expectedTexts = [
                    'Admin Admin (admin)',
                    'Cat Grant (cat)',
                    'Clark Kent (clark)',
                    'David Cain (david)',
                    'Etta Candy (etta)',
                    'Jack Drake (jack)',
                    'Julia Kapatelis (julia)',
                    'Roy Harper (roy)',
                    'Sasha Bordeaux (sasha)',
                    'Tana Moon (tana)',
                    'Terry Berg (terry)',
                    'Tina Magee (tina)'
                ];

                // Verify option's value and text
                cy.wrap(option).should('have.value', expectedValues[index]);
                cy.wrap(option).should('have.text', expectedTexts[index]);
            });
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select")
            .select('jack');
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[2]/input').clear().type("2")
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[2]/div[2]/div/i/input').click();




    })
})

