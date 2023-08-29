describe("Final Testing For All over", () => {
    /*beforeEach(() => {
         cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h");
         cy.viewport(1536, 960);
         cy.wait(2000);
     });*/

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
})