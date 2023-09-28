
describe("Documentation", () => {
    beforeEach(() => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h");
        cy.viewport(1536, 960);
        cy.wait(3000)

        // Click the login button
        cy.get(".mm-profile.user-link.type-no")
            .should('contain', "Login")
            .click();

        cy.wait(6000)
        // Input the username and password
        cy.get('#j_username').type("admin");
        cy.wait(2000)
        cy.get("#j_password").type("admin");
        cy.get(".waves-button-input").click();
    });
    it("TestCase to verify Content at Documentation", () => {
        //cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        //cy.viewport(1536, 960);

        cy.get('.ui-html.ql-editor').should('contain', "Tutorial: Process Deadlines")
            .should('contain', "This is a Joget Workflow tutorial app to demonstrate the use of process deadlines. These processes includes ", "email notifications")
            .should('contain', "Process deadlines can be used for escalation or to execute repetitive tasks ", "when a specified duration has elapsed")
            .should('contain', "You can learn how to build your own process deadlines from actual working examples in this app.")
            .should('contain', "This app was designed for Joget Workflow Enterprise v5+.")
            .should('contain', "Do also read the official Joget Workflow ", "Knowledge Base documentation", " on process deadlines.")
            .should('contain', "Do also read the official Joget Workflow ", "Knowledge Base documentation", " on process deadlines.")
            .should('contain', "The tutorial app demonstrates four types of deadlines, as follows:")
            .should('contain', "Process Deadline with Escalation (Asynchronous)", "Deadline with Asynchronous Escalation illustrate a process design where, on the trigger of the deadline timer, the next activity 2, will be executed at the same time that Activity 1 is still waiting for approval. Activity 1 task is still pending. The List Inbox will display both Activity 1 and Activity 2 tasks."
                , "Run Process", "View Process Diagram")
            .should('contain', "Important Prerequisite:", "1. Setup your Email SMTP in ", "this form", " so that you will receive the test email notifications from deadline processes."
                , "2. Remember to set a value of '", "30", "' in the Process Deadline Checker Interval value in ");

        cy.get('table tr').contains('Process Deadline with Escalation (Synchronous)');
        cy.get('table tr').contains('Deadline with Synchronous Escalations illustrate a process design where, on the trigger of the deadline timer, Activity 1 will no longer be active when the escalation to Activity 2 is triggered. Activity 1 task will be aborted and closed. The List Inbox will only display the task for Activity 2.')
        cy.get('table tr').contains("Run Process")
        cy.get('table tr').contains("View Process Diagram")

        cy.get('table tr').contains('Process Deadline with Repetition (Synchronous)')
        cy.get('table tr').contains('Deadline with Repetition illustrate a process design where, on the trigger of the deadline timer, the process sends an email notification reminder up to a maximum of 3 repetitions. A counter workflow variable is used to track the repetition. In this example, the pending task is aborted after the third repetition. Finally the List Inbox will display zero tasks')
        cy.get('table tr').contains('Run Process')
        cy.get('table tr').contains('View Process Diagram')

        cy.get('table tr').contains('Process Deadline with Repetition (Synchronous)')
        cy.get('table tr').contains('Deadline with Repetition illustrate a process design where, on the trigger of the deadline timer, the process sends an email notification reminder up to a maximum of 3 repetitions. A counter workflow variable is used to track the repetition. In this example, the pending task is aborted after the third repetition. Finally the List Inbox will display zero tasks.')
        cy.get('table tr').contains('Run Process')
        cy.get('table tr').contains('View Process Diagram')


    })
    it("should log in, click 'Run Process' link, and interact with dropdowns", () => {




        // Verify that the user is logged in
        cy.get('.mm-profile.user-link.type-no').should('contain', "Admin Admin");

        // Click the 'Run Process' link
        cy.get('table')
            .contains('td', 'Run Process')
            .find('a')
            .click();

        cy.xpath('//*[@id="sea"]/div[1]').should('contain', " Deadline with Escalation (Async)")
        cy.xpath('//*[@id="sea"]/div[1]').should('contain', "Process Deadline with Escalation (Asynchronous)")
        cy.xpath('//*[@id="sea"]/div[1]').should('contain', "Select Activity User 1 ")
        cy.xpath('//*[@id="sea"]/div[1]').should('contain', "Select Activity User 2 ")
        cy.xpath('//*[@id="sea"]/div[1]').should('contain', "For Activity 1 inaction, enter total minutes before escalating to Activity 2 ")
        cy.xpath('//*[@id="sea"]/div[1]').should('contain', "Important:", " Remember to set a value of '", " Click the ", "Start Process", "button below to test the process deadline.", "' in the Process Deadline Checker Interval value in ")
        cy.xpath('//*[@id="sea"]/div[1]').should('contain', "Start Process")
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select').should('exist').then((selectElement) => {
            // Define an array of option values you want to check
            const optionsToCheck = ['cat', 'clark', 'david', 'etta', 'jack', 'julia', 'roy', 'sasha', 'tana', 'terry', 'tina'];

            // Loop through the specified options and check their visibility
            optionsToCheck.forEach((optionValue) => {
                const option = selectElement[0].querySelector(`option[value="${optionValue}"]`);
                if (option) {
                    const optionText = option.textContent.trim();
                    const isVisible = option.style.display !== 'none';
                    cy.log(`Option "${optionText}" (value: ${optionValue}) is visible: ${isVisible}`);
                } else {
                    cy.log(`Option with value "${optionValue}" not found.`);
                }
            });

            // Select "cat" option in the dropdown
            cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select")
                .select('cat');

            cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[2]/select").select('cat')

            // Check for the existence of the select element for Activity User 2
            cy.get('select[name="ApproverUser2"]').should('exist').then((selectElement) => {
                // Define an array of option values you want to check
                const optionsToCheck = ['admin', 'cat', 'clark', 'david', 'etta', 'jack', 'julia', 'roy', 'sasha', 'tana', 'terry', 'tina'];

                // Loop through the specified options and check their visibility
                optionsToCheck.forEach((optionValue) => {
                    cy.get(`option[value="${optionValue}"]`, { withinSubject: selectElement })
                        .should('be.visible')
                        .then((option) => {
                            const optionText = option.text().trim();
                            cy.log(`Option "${optionText}" (value: ${optionValue}) is visible.`);
                        });
                });
            });

            // Input values and submit
            cy.get('#deadlineLimit1').clear().type('2');
            cy.get("#assignmentComplete").first().click();

            // Find the table body and all rows within it
            cy.get('#EscalationSync tbody tr').each(($row, index, $rows) => {
                // Check if the table row has data
                if ($rows.length > 0) {
                    cy.wrap($row).within(() => {
                        // You can add specific verifications for each row here if needed
                    });
                } else {
                    // Handle the case where the table does not have data
                    cy.log('Table does not have data.');
                    // You can add assertions or other actions for this case
                }
            });
        });
    });
    it("Process Deadline with Escalation (Synchronous)", () => {
        /* // Click the login button
          cy.get(".mm-profile.user-link.type-no")
              .should('contain', "Login")
              .click();
  
          // Input the username and password
          cy.get('#j_username').type("admin");
           cy.get("#j_password").type("admin");
           cy.wait(6000)
           cy.get(".waves-button-input").click();*/

        // Verify that the user is logged in
        cy.get('.mm-profile.user-link.type-no').should('contain', "Admin Admin");


        cy.wait(6000)

        cy.xpath('//*[@id="h"]/div/table/tbody/tr[3]/td[3]').click();

        cy.wait(2000)
        //verify DEADLINE WITH ESCALATION (SYNC)
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/div").eq(0).should('contain', "Deadline with Escalation (Sync)")
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]")
            .should("contain", "Process Deadline with Escalation (Synchronous)")
            .should("contain", "Select Activity User 1 ")
            .should("contain", "Select Activity User 2 ")
            .should("contain", "For Activity 1 inaction, enter total minutes before escalating to Activity 2 ")
            .should("contain", "Important:", "Remember to set a value of '", "' in the Process Deadline Checker Interval value in", "System Settings", "Click the ", "Start Process", "button below to test the process deadline.")
            .should("contain", "Start Process")
        cy.wait(4000)

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
        cy.wait(2000)

        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[2]/div[2]/div/i/input").click();
        cy.wait(2000)

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

    it("Process Deadline with Repetition (Synchronous)", () => {

        /*  // Click the login button
          cy.get(".mm-profile.user-link.type-no")
              .should('contain', "Login")
              .click();
  
          /* // Input the username and password
           cy.get('#j_username').type("admin");
           cy.get("#j_password").type("admin");
           cy.wait(6000)
           cy.get(".waves-button-input").click();
   */
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

    it("Process Deadline with Two Deadlines (Asynchronous)", () => {
        /*// Click the login button
        cy.wait(6000)
         cy.xpath('//*[@id="navigation"]/ul[1]/li/a/small')
             //.should('contain', "Login")
             .click();
 
         // Input the username and password
          cy.get('#j_username').type("admin");
          cy.get("#j_password").type("admin");
          cy.wait(6000)
          cy.get(".waves-button-input").click();*/

        // Verify that the user is logged in
        cy.get('.mm-profile.user-link.type-no').should('contain', "Admin Admin");

        // Locate the <a> element within the <td> and click it
        cy.wait(6000)

        cy.xpath('//*[@id="h"]/div/table/tbody/tr[5]/td[3]/a').click();
        cy.wait(2000)

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




    it("Email SMTP", () => {

        /*  // Click the login button
          cy.get(".mm-profile.user-link.type-no")
              .should('contain', "Login")
              .click();
  
          /* // Input the username and password
           cy.get('#j_username').type("admin");
           cy.get("#j_password").type("admin");
           cy.wait(6000)
           cy.get(".waves-button-input").click();*/

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

describe("View Running Process", () => {
    beforeEach(() => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/console/monitor/running");
        cy.viewport(1536, 960);
        cy.wait(6000)
    });
    it("View Running Process", () => {



        // Input the username and password
        cy.get('#j_username').type("admin");
        cy.get("#j_password").type("admin");
        cy.wait(6000)
        cy.get(".form-button").click();


        // Verify that the user is logged in
        cy.get('#main-header').should('contain', "Joget DX On-Demand");

        cy.wait(6000)

        // Locate the <a> element within the <td> and click it
        // Iterate through the table rows
        cy.get(".bDiv tbody tr").each(($row) => {
            // Iterate through the cells in the current row
            cy.wrap($row).find("td").each(($cell) => {
                // Get the text content of the cell
                const cellText = $cell.text().trim();


            });
        });
    });


});
describe("Admin WorkFlow( Process Deadline with Escalation (Asynchronous))", () => {
    it("Admin_Process", () => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.wait(2000);
        cy.xpath("//*[@class='login_link']").click();

        //For user name and Password
        cy.xpath("//*[@id='j_username']").type('admin')
        cy.xpath("//*[@id='j_password']").type('admin')
        cy.wait(4000)
        cy.xpath("//*[@name='submit']").click();
        cy.get('body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)').click();
        cy.get('body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(1)').click();

        //Select Activity User 1
        cy.xpath("//*[@name='ApproverUser1']").select('cat')
        cy.wait(2000)
        cy.xpath("//*[@name='ApproverUser2']").select('clark')
        cy.xpath("//*[@name='deadlineLimit1']").clear().type("1");
        cy.xpath("//*[@name='assignmentComplete']").click();

        cy.wait(2000)
        cy.xpath('//*[@class=\'dropdown\']').click();
        cy.get('li.mm-profile.user-link.type-no.toggled ul li a').click();
        cy.wait(2000)
    })

    it('Cat_process', () => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h");
        cy.viewport(1536, 960);
        cy.wait(2000)
        cy.xpath("//*[@class='login_link']").click()
        cy.xpath("//input[@name='j_username']").type('cat')
        cy.xpath("//input[@name='j_password']").type('password')
        cy.wait(2000)
        cy.xpath("//input[@name='submit']").click();
        cy.wait(2000)

        cy.xpath("//*[@class='category'][1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[2]/ul[1]/li[1]/a[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[9]/a[1]/span[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[1]/div[1]/label[1]/i[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/fieldset[1]/form[1]/div[3]/div[2]/div[2]/i[1]/input[1]").click()
    })

    it('clark_Kent_Process', () => {


        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h");
        cy.viewport(1536, 960);
        cy.wait(2000)
        cy.xpath("//*[@class='login_link']").click()
        cy.xpath("//input[@name='j_username']").type('clark')
        cy.xpath("//input[@name='j_password']").type('password')
        cy.wait(2000)
        cy.xpath("//input[@name='submit']").click()
        cy.wait(2000)

        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[2]/a[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[2]/ul[1]/li[1]/a[1]").click()
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[9]/a[1]/span[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[2]/div[1]/label[1]/i[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/fieldset[1]/form[1]/div[3]/div[2]/div[2]/i[1]/input[1]").click()
    })
})

describe('Admin_WorkFlow( Process Deadline with Escalation (Synchronous))', () => {
    it('Admin_Process', () => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.wait(2000);
        cy.xpath("//*[@class='login_link']").click();

        //For user name and Password
        cy.xpath("//*[@id='j_username']").type('admin')
        cy.xpath("//*[@id='j_password']").type('admin')
        cy.wait(4000)
        cy.xpath("//*[@name='submit']").click();
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[3]/a[1]").click();
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[3]/ul[1]/li[2]/a[1]").click()
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[1]/select[1]").select('cat')
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[2]/select[1]").select('clark')
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[3]/input[1]").clear().type(1)
        cy.xpath("//*[@name='assignmentComplete']").click();

    })

    it('Cat', () => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.wait(2000);
        cy.xpath("//*[@class='login_link']").click();

        //For user name and Password
        cy.xpath("//*[@id='j_username']").type('cat')
        cy.xpath("//*[@id='j_password']").type('password')
        cy.wait(4000)
        cy.xpath("//*[@name='submit']").click();
        cy.wait(2000)

        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[3]/a[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[3]/ul[1]/li[1]/a[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[9]/a[1]/span[1]").click()
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[1]/select[1]").select('Approve');
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/fieldset[1]/form[1]/div[3]/div[2]/div[1]/i[1]/input[1]").click();
    })

    it('clark', () => {

        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.wait(2000);
        cy.xpath("//*[@class='login_link']").click();

        //For user name and Password
        cy.xpath("//*[@id='j_username']").type('clark')
        cy.xpath("//*[@id='j_password']").type('password')
        cy.wait(4000)
        cy.xpath("//*[@name='submit']").click();
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[3]/a[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[3]/ul[1]/li[1]/a[1]").click()
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[9]/a[1]/span[1]").click()


        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[2]/div[1]/label[1]/i[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/fieldset[1]/form[1]/div[3]/div[2]/div[1]/i[1]/input[1]").click()


    })

})


describe('Admin( Process Deadline with Repetition (Synchronous))', () => {
    it('Admin', () => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.wait(2000);
        cy.xpath("//*[@class='login_link']").click();

        //For user name and Password
        cy.xpath("//*[@id='j_username']").type('admin')
        cy.xpath("//*[@id='j_password']").type('admin')
        cy.wait(4000)
        cy.xpath("//*[@name='submit']").click();
        cy.wait(3000)

        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[4]/a[1]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[4]/ul[1]/li[2]/a[1]").click()
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[1]/select[1]").select('cat')
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[2]/input[1]").clear().type('1')
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[2]/div[2]/div[1]/i[1]/input[1]").click()

    })

    it('cat',()=>{
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.wait(2000);
        cy.xpath("//*[@class='login_link']").click();

        //For user name and Password
        cy.xpath("//*[@id='j_username']").type('cat')
        cy.xpath("//*[@id='j_password']").type('password')
        cy.wait(4000)
        cy.xpath("//*[@name='submit']").click();
        cy.wait(2000)

        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[4]/a[1]").click();
        cy.wait(3000)
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[4]/ul[1]/li[1]/a[1]").click()
        cy.wait(3000)
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[9]/a[1]/span[1]").click()
        cy.wait(3000)
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/fieldset[1]/form[1]/div[2]/div[2]/div[1]/i[1]/input[1]").click();
})
})

describe('Admin( Process Deadline with Two Deadlines (Asynchronous))',()=>{
    it('admin',()=>{
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.wait(2000);
        cy.xpath("//*[@class='login_link']").click();

        //For user name and Password
        cy.xpath("//*[@id='j_username']").type('admin')
        cy.xpath("//*[@id='j_password']").type('admin')
        cy.wait(4000)
        cy.xpath("//*[@name='submit']").click();
        cy.wait(2000)

        cy.xpath("//*[@class='category'][4]").click()
        cy.xpath("//a[@href=\"/jw/web/userview/jtdeadline/h/_/seawd\"]").click()
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[1]/select[1]").select('cat')
        cy.wait(3000)
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[2]/select[1]").select('clark')
        cy.wait(3000)
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[3]/input[1]").clear().type('1')
        cy.wait(3000)
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[1]/div[2]/div[4]/input[1]").clear().type('1')
        cy.wait(3000)
        cy.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/main[1]/div[2]/div[1]/fieldset[1]/form[1]/div[2]/div[2]/div[1]/i[1]/input[1]").click();

    })

    it('cat',()=>{
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.wait(2000);
        cy.xpath("//*[@class='login_link']").click();

        //For user name and Password
        cy.xpath("//*[@id='j_username']").type('cat')
        cy.xpath("//*[@id='j_password']").type('password')
        cy.wait(4000)
        cy.xpath("//*[@name='submit']").click();
        cy.wait(2000)

        cy.xpath("//span[normalize-space()=\"Process Deadline with Two Deadlines (Asynchronous)\"]").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[2]/li[5]/ul[1]/li[1]/a[1]/span[1]").click()
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[9]/a[1]/span[1]").click()
        cy.xpath("//label[normalize-space()=\"Approved\"]//i").click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/fieldset[1]/form[1]/div[3]/div[2]/div[1]/i[1]/input[1]").click();
    
    })
})









