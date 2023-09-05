describe("Process Deadline with Escalation (Asynchronous)", () => {
    beforeEach(() => {
      cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h");
      cy.viewport(1536, 960);
    });
  
    it("should log in, click 'Run Process' link, and interact with dropdowns", () => {
      // Click the login button
      cy.get(".mm-profile.user-link.type-no")
        .should('contain', "Login")
        .click();
  
      // Input the username and password
      cy.get('#j_username').type("admin"); 
      cy.wait(2000)
      cy.get("#j_password").type("admin"); 
      cy.get(".waves-button-input").click();
  
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
});