describe("Documentation", () => {
    it("TestCase to verify Content at Documentation", () => {
        cy.visit("https://mohan.on.joget.cloud/jw/web/userview/jtdeadline/h/_/h")
        cy.viewport(1536, 960);

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
})