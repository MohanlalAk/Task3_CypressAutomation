describe("Process Deadline with Two Deadlines (Asynchronous)", () => {
    beforeEach(() => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h");
        cy.viewport(1536, 960);
    });
    it("Process Deadline with Two Deadlines (Asynchronous)", () => {
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

        // Locate the <a> element within the <td> and click it
        cy.wait(6000)

        cy.xpath('//*[@id="h"]/div/table/tbody/tr[5]/td[3]/a').click();

        //verify text on Process Deadline with Two Deadlines (Asynchronous)
        cy.get('.runProcess-body-content').eq(0).should('contain', "Process With Two Deadlines")
        cy.get('.form-section-title').eq(0).should('contain', "Process Deadline with Two Deadlines (Asynchronous)")
        cy.get('.form-column').eq(0).should('contain', "Select Activity User 1 ")
        cy.get('.form-column').eq(0).should('contain', "Select Activity User 2 ")
        cy.get('.label').eq(2).should('contain', "For Activity 1 inaction, enter total minutes before escalating to Activity 2 ")
        cy.get('.label').eq(3).should('contain', "If Activity 2 inaction, enter total minutes before ending the whole process using Deadline ")
        cy.xpath('//*[@id="assignmentComplete"]').should('contain', "Start Process")

        // Verify each option's value and text
        const names = [
            'cat', 'clark', 'david', 'etta', 'jack', 'julia', 'roy', 'sasha', 'tana', 'terry', 'tina'
        ];

        names.forEach((name, index) => {
            cy.get('select[name="ApproverUser1"]') // Select the dropdown by its name attribute
                .find(`option[value="${name}"]`)     // Find the specific option with the given value
                .should('have.value', name);         // Check if the value matches the expected name

            const names = [
                'cat', 'clark', 'david', 'etta', 'jack', 'julia', 'roy', 'sasha', 'tana', 'terry', 'tina'
            ];

            names.forEach((name, index) => {
                cy.get('select[name="ApproverUser2"]') // Select the dropdown by its name attribute
                    .find(`option[value="${name}"]`)     // Find the specific option with the given value
                    .should('have.value', name);         // Check if the value matches the expected name
            });

        });

        cy.get('select[name="ApproverUser1"]') // Select the dropdown by its name attribute
            .select('cat');

        cy.get('select[name="ApproverUser2"]') // Select the dropdown by its name attribute
            .select('cat');  // Select the option with the value "cat"


        cy.xpath('//*[@id="deadlineLimit1"]').clear().type(2)
        cy.xpath('//*[@id="deadlineLimit2"]').clear().type(2)
        cy.xpath('//*[@id="assignmentComplete"]').click();

        cy.get("#EscalationSync tbody tr").each((row, rowIndex) => {
            // Find all columns within the current row
            cy.wrap(row).find("td").each((column, columnIndex) => {
                // Extract and log the content of each column
                cy.log(`Row ${rowIndex + 1}, Column ${columnIndex + 1}: ${column.text()}`);
            });
        });

        // Perform assertions based on the extracted data
        cy.get("#EscalationSync tbody tr").should("have.length.greaterThan", 0);
    });

})
