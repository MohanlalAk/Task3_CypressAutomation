describe("Final Testing For All over", () => {
    beforeEach(() => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
         cy.wait(6000);
     });

    it("Documentation", () => {

        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);

        //verify all in documentation
        cy.xpath("//strong[normalize-space()='Tutorial: Process Deadlines']").should('contain', "Tutorial: Process Deadlines", "This is a Joget Workflow tutorial app to demonstrate the use of process deadlines. These processes includes"
            , "email notifications.", "Process deadlines can be used for escalation or to execute repetitive tasks", "when a specified duration has elapsed"
            , "You can learn how to build your own process deadlines from actual working examples in this app.", "The tutorial app demonstrates four types of deadlines, as follows:")

        cy.xpath("//p[contains(text(),'Process deadlines can be used for escalation or to')]").should('contain', "Process deadlines can be used for escalation or to execute repetitive tasks ", "when a specified duration has elapsed")
        cy.xpath("//p[contains(text(),'You can learn how to build your own process deadli')]").should('contain', "You can learn how to build your own process deadlines from actual working examples in this app.", "This app was designed for Joget Workflow Enterprise v5+.");
        cy.xpath("//p[7]").should('contain', "Do also read the official Joget Workflow ", "Knowledge Base documentation", " on process deadlines.");

        cy.xpath("//div[@id='h']").should('contain', "Process Deadline with Escalation (Asynchronous)")
        cy.xpath("//div[@id='h']").should('contain', "Deadline with Asynchronous Escalation illustrate a process design where, on the trigger of the deadline timer, the next activity 2, will be executed at the same time that Activity 1 is still waiting for approval. Activity 1 task is still pending. The List Inbox will display both Activity 1 and Activity 2 tasks.")
        cy.xpath("//div[@id='h']").should('contain', "Run Process")
        cy.xpath("//div[@id='h']").should('contain', "View Process Diagram")

    })

    //------------------------------------------------------------------------------------------------------------------------------------------//
    it("Process Deadline with Escalation (Asynchronous)", () => {
        // (Login process)
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.xpath('//*[@id="h"]/div/table/tbody/tr[2]/td[3]/a').click();
        cy.xpath('//*[@id="j_username"]').type("admin")
        cy.wait(2000)
        cy.xpath('//*[@id="j_password"]').type("admin")
        cy.xpath('//*[@id="loginForm"]/table/tbody/tr[3]/td[2]/i/input').click()
        cy.wait(2000)

        //DEADLINE WITH ESCALATION (ASYNC)
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

            // Check for the existence of the select element for Activity User 1
            cy.get('select[name="ApproverUser1"]').should('exist').then((selectElement) => {
                // Define an array of option values you want to check
                const optionsToCheck = ['cat', 'clark', 'david', 'etta', 'jack', 'julia', 'roy', 'sasha', 'tana', 'terry', 'tina'];

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
            cy.get('#EscalationSync tbody tr').each((row) => {
                cy.wrap(row).within(() => {
                    // Extract and verify the text content of each cell
                    cy.get('td.column_body').each((cell) => {
                        const cellText = cell.text().trim();
                        cy.log(`Cell Text: ${cellText}`);
                        // Perform further assertions or verifications as needed
                    });
                });
            });
        });
    });


    //----------------------------------------------------------------------------------------------------------------------------------------//
    it("Process Deadline with Escalation (Synchronous)", () => {
        // (Login process)
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.xpath('//*[@id="h"]/div/table/tbody/tr[3]/td[3]/a').click();
        cy.xpath('//*[@id="j_username"]').type("admin")
        cy.wait(2000)
        cy.xpath('//*[@id="j_password"]').type("admin")
        cy.xpath('//*[@id="loginForm"]/table/tbody/tr[3]/td[2]/i/input').click()
        cy.wait(2000)


        //verify DEADLINE WITH ESCALATION (SYNC)
        cy.get(".runProcess-body-content").eq(0).should('contain', "Deadline with Escalation (Sync)")
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]").should("contain", "Process Deadline with Escalation (Synchronous)");
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]").should("contain", "Select Activity User 1 ");
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]").should("contain", "Select Activity User 2 ");
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]").should("contain", "For Activity 1 inaction, enter total minutes before escalating to Activity 2 ");
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]").should("contain", "Important:", "Remember to set a value of '", "' in the Process Deadline Checker Interval value in", "System Settings", "Click the ", "Start Process", "button below to test the process deadline.");
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]").should("contain", "Start Process");



        // Verify each option's value and text (Select Active User 1)
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



        //Select Activity User 2
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select")
            .should('have.value', 'admin');

        // Verify the selected option's text
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option[@selected]")
            .should('have.text', 'Admin Admin (admin)');

        // Verify the number of options
        cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select/option")
            .should('have.length', 12);

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
        cy.url("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/i1")
        cy.get(".datalist-body-content").should('contain', "Process Deadline with Escalation (Synchronous)")
        cy.get(".datalist-body-content").should('contain', "Deadline with Synchronous Escalations illustrate a process design where, on the trigger of the deadline timer, Activity 1 will no longer be active when the escalation to Activity 2 is triggered. Activity 1 task will be aborted and closed. The List Inbox will only display the task for Activity 2.", "o not click on the pending task and refresh this inbox frequently to view deadline working.")
        cy.get(".datalist-body-content").should('contain', "")
        cy.get(".datalist-body-content").should('contain', "#", "ID", "Activity 1 User", "Activity 1 Status", "Activity 2 User", "Activity 2 Status", "Deadline Limit", "Created");
        cy.get('#EscalationSync tbody tr') // Select all table rows
            .each((row) => {
                cy.wrap(row)
                    .find('td') // Find all cells in the row
                    .each((cell, cellIndex) => {
                        const cellContent = cell.text().trim();

                        if (cellIndex === 5) { // Check if it's "Activity 2 Status" cell
                            if (cellContent !== '') {
                                cy.wrap(cell).should('contain', cellContent);
                            } else {
                                cy.log('Cell not filled: Activity 2 Status');
                            }
                        } else {
                            cy.wrap(cell).should('not.be.empty');
                        }

                        cy.log(`Content: ${cellContent}`);
                    });
            });

    })
    //---------------------------------------------------------------------------------------------------------------------------------------------//
    it("Process Deadline with Repetition (Synchronous)", () => {
        // (Login process)
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.xpath('//*[@id="h"]/div/table/tbody/tr[4]/td[3]').click();
        cy.xpath('//*[@id="j_username"]').type("admin")
        cy.wait(2000)
        cy.xpath('//*[@id="j_password"]').type("admin")
        cy.xpath('//*[@id="loginForm"]/table/tbody/tr[3]/td[2]/i/input').click()
        cy.wait(2000)

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
    //------------------------------------------------------------------------------------------------------------------------------------------//
    it("Process Deadline with Two Deadlines (Asynchronous)", () => {
        // (Login process)
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.xpath('//*[@id="h"]/div/table/tbody/tr[5]/td[3]/a').click();
        cy.xpath('//*[@id="j_username"]').type("admin")
        cy.wait(2000)
        cy.xpath('//*[@id="j_password"]').type("admin")
        cy.xpath('//*[@id="loginForm"]/table/tbody/tr[3]/td[2]/i/input').click()
        cy.wait(2000)
        //verify text on Process Deadline with Two Deadlines (Asynchronous)
        cy.get('.runProcess-body-content').eq(0).should('contain', "Process With Two Deadlines")
        cy.get('.form-section-title').eq(0).should('contain', "Process Deadline with Two Deadlines (Asynchronous)")
        cy.get('.form-column').eq(0).should('contain', "Select Activity User 1 ")
        cy.get('.form-column').eq(0).should('contain', "Select Activity User 2 ")
        cy.get('.label').eq(2).should('contain', "For Activity 1 inaction, enter total minutes before escalating to Activity 2 ")
        cy.get('.label').eq(3).should('contain', "If Activity 2 inaction, enter total minutes before ending the whole process using Deadline ")
        cy.xpath('//*[@id="assignmentComplete"]').should('contain', "Start Process")

        // cy.xpath("/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[1]/select")
        // .should('have.length', 12);

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

        //verify all on Process Deadline with Two Deadlines (Asynchronous)_ListBox
        // Assuming you want to verify data in the first row
        /*  cy.get('#EscalationSync tbody tr') // Select all table rows
          .each((row) => {
            cy.wrap(row)
              .find('td') // Find all cells in the row
              .each((cell) => {
                cy.wrap(cell)
                  .should('not.be.empty')
                  .log(`Content: ${cell.text()}`);
              });*/
        /* cy.get('#EscalationSync tbody tr') // Select all table rows
             .each((row) => {
                 cy.wrap(row)
                     .find('td') // Find all cells in the row
                     .each((cell, cellIndex) => {
                         const cellContent = cell.text();
     
                         if (cellIndex === 5) { // Check if it's "Activity 2 Status" cell
                             if (cellContent.trim() !== '') {
                                 cy.wrap(cell).should('contain', cellContent);
                             } else {
                                 cy.log('Cell not filled: Activity 2 Status');
                             }
                         } else {
                             cy.wrap(cell).should('not.be.empty');
                         }
     
                         cy.log(`Content: ${cellContent}`);
                     });
                 cy.xpath('//*[@id="EscalationSync"]/tbody/tr/td[9]/a/span').click();
                 // Assuming you're on the page with the form
                 // First, select the radio button for "Approved"
                 cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div/div[1]/label[1]').click();
     
                 // Then, submit the form
                 cy.get('input[name="assignmentComplete"]').click();
                 //cy.get('.empty').should('contain',"Nothing found to display.")*/
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

    //------------------------------------------------------------------------------------------------------------------------------------//

    it("Universal", () => {
        // (Login process)
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.xpath('//*[@id="h"]/div/table/tbody/tr[2]/td[3]/a').click();
        cy.xpath('//*[@id="j_username"]').type("admin")
        cy.wait(2000)
        cy.xpath('//*[@id="j_password"]').type("admin")
        cy.xpath('//*[@id="loginForm"]/table/tbody/tr[3]/td[2]/i/input').click()
        cy.wait(2000)
        cy.xpath("//span[normalize-space()='Universal Inbox']").click();

        const today = new Date();
        const currentDate = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;

        // Iterate through each row in the table body and verify data
        cy.get('#inbox tbody tr').each(($row, index) => {
            cy.wrap($row).within(() => {
                // Extract and verify text from each cell in the row
                cy.get('td.column_activityName').should('have.text', 'Activity 1');
                cy.get('td.column_processName').should('have.text', 'Deadline with Escalation (Sync)');
                //cy.get('td.column_dateCreated').should('contain', "currentDate"); // Verify the current date
                cy.get('td.column_serviceLevelMonitor').should('have.text', '-');
                cy.get('td.column_dueDate').should('have.text', '-');
            });
        });

        // Optionally, you can perform additional assertions or actions here
    });
    it("SMTP", () => {
        // (Login process)
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);
        cy.xpath('/html/body/div[2]/div[1]/div/div[1]/div[1]/div/nav/ul[1]/li/a/span').click();
        cy.xpath('//*[@id="j_username"]').type("admin")
        cy.wait(2000)
        cy.xpath('//*[@id="j_password"]').type("admin")
        cy.xpath('//*[@id="loginForm"]/table/tbody/tr[3]/td[2]/i/input').click()
        cy.wait(2000)

        cy.xpath("/html/body/div[2]/div[2]/div[2]/div[1]/div[1]/div/nav/ul[2]/li[7]/a/span").click()

        cy.wait(2000)

        cy.xpath('//*[@id="host"]').clear().type('smtp.gmail.com')
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[2]/input').clear().type('465')
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[3]/select').select('SSL')
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[4]/input').type('sender@gmail.com')
        cy.get('#password').type('12345678#')
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[1]/div[2]/div[6]/input').clear().type('recipient@example.com')

        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[1]/fieldset/form/div[2]/div[2]/div[1]/i/input').click();



    })

    it.only("View Running Process",()=>{
        // (Login process)
        cy.visit("https://mohan.on.joget.cloud/jw/web/console/monitor/running")
        cy.viewport(1536, 960);
       
        cy.xpath("/html/body/div[2]/div/div/div/div/form/table/tbody/tr[1]/td[2]/input").type('admin')
        cy.wait(2000)
        cy.xpath("/html/body/div[2]/div/div/div/div/form/table/tbody/tr[2]/td[2]/input").type("admin")
        cy.xpath("/html/body/div[2]/div/div/div/div/form/table/tbody/tr[3]/td[2]/input").click();
cy.wait(2000)
        cy.contains("Running Processes").click()
        cy.xpath("/html/body/div[2]/div/div/div/div/form/table/tbody/tr[1]/td[2]/input").type('admin')
        cy.wait(2000)
        cy.xpath("/html/body/div[2]/div/div/div/div/form/table/tbody/tr[2]/td[2]/input").type("admin")
        cy.xpath("/html/body/div[2]/div/div/div/div/form/table/tbody/tr[3]/td[2]/input").click();



        cy.wait(2000); // Wait for some time to allow the page to load

// Assuming you've already selected the table rows using cy.get('.jsontable tbody tr')
cy.get('.jsontable tbody tr', { timeout: 10000 }).should('be.visible').each((row) => {
  // Get the cell elements in the current row
  const cells = row.find('td');

  // Iterate through each cell and verify non-empty content
  cells.each((index, cell) => {
    // Wait for the cell content to be non-empty
   // cy.wrap(cell).should('not.have.text', '');
  });
});
});
});






