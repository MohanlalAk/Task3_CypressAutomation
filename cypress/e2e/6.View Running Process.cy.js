describe("View Running Process",()=>{
    beforeEach(() => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/console/monitor/running");
        cy.viewport(1536, 960);
    });
    it("View Running Process",()=>{

        // Click the login button
        
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
        

 