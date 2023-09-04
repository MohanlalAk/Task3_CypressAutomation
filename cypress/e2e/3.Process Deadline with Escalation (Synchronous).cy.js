describe("Process Deadline with Escalation (Synchronous)", () => {
    beforeEach(() => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h");
        cy.viewport(1536, 960);
    });

    it("Process Deadline with Escalation (Synchronous)", () => {
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

        cy.xpath('//*[@id="h"]/div/table/tbody/tr[3]/td[3]').click();


        //verify DEADLINE WITH ESCALATION (SYNC)
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/div").eq(0).should('contain', "Deadline with Escalation (Sync)")
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]")
            .should("contain", "Process Deadline with Escalation (Synchronous)")
            .should("contain", "Select Activity User 1 ")
            .should("contain", "Select Activity User 2 ")
            .should("contain", "For Activity 1 inaction, enter total minutes before escalating to Activity 2 ")
            .should("contain", "Important:", "Remember to set a value of '", "' in the Process Deadline Checker Interval value in", "System Settings", "Click the ", "Start Process", "button below to test the process deadline.")
            .should("contain", "Start Process")

        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(1).should('have.value', 'cat');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(2).should('have.value', 'clark');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(3).should('have.value', 'david');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(4).should('have.value', 'etta');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(5).should('have.value', 'jack');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(6).should('have.value', 'julia');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(7).should('have.value', 'roy');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(8).should('have.value', 'sasha');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(9).should('have.value', 'tana');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(10).should('have.value', 'terry');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(11).should('have.value', 'tina');

        // Verify each option's value and text
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(1).should('have.value', 'cat');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(2).should('have.value', 'clark');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(3).should('have.value', 'david');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(4).should('have.value', 'etta');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(5).should('have.value', 'jack');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(6).should('have.value', 'julia');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(7).should('have.value', 'roy');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(8).should('have.value', 'sasha');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(9).should('have.value', 'tana');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(10).should('have.value', 'terry');
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .eq(11).should('have.value', 'tina');

        cy.wait(2000)

        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[3]/input").clear().type('2')

        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[2]/div[2]/div/i/input").click();

        // verify Process Deadline with Escalation (Synchronous)_ListInbox

        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div").should('contain', "Process Deadline with Escalation (Synchronous)")
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div").should('contain', "Deadline with Synchronous Escalations illustrate a process design where, on the trigger of the deadline timer, Activity 1 will no longer be active when the escalation to Activity 2 is triggered. Activity 1 task will be aborted and closed. The List Inbox will only display the task for Activity 2.", "o not click on the pending task and refresh this inbox frequently to view deadline working.")
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div").should('contain', "")
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div").should('contain', "#", "ID", "Activity 1 User", "Activity 1 Status", "Activity 2 User", "Activity 2 Status", "Deadline Limit", "Created");

        // Iterate through the table rows
        cy.get("#EscalationSync tbody tr").each(($row, rowIndex) => {
            // Find the "Activity 2 Status" cell in the current row
            cy.wrap($row).find(".column_status2").each(($cell) => {
                const activity2Status = $cell.text().trim(); // Trim whitespace for accurate empty cell detection

                // Assert that the Activity 2 Status is empty
                expect(activity2Status).to.equal('');
            });
        });
    });
});


