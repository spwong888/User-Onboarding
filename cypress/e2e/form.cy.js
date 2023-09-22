describe("Form Submission Tests", (cy) => {
    beforeEach(() => {
      cy.visit("http://localhost:3003");
    });
  
    it("should type a name into the Name input and check if it contains the name", () => {
      const name = "John Doe";
      cy.get("#name-input").type(name);
      cy.get("#name-input").should("have.value", name);
    });
  
    it("should type an email address into the Email input", () => {
      const email = "john@example.com";
      cy.get("#email-input").type(email);
      cy.get("#email-input").should("have.value", email);
    });
  
    it("should type a password into the Password input", () => {
      const password = "SecurePassword123";
      cy.get("#password-input").type(password);
      cy.get("#password-input").should("have.value", password);
    });
  
    it("should check the Terms of Service checkbox", () => {
      cy.get("#terms-checkbox").check().should("be.checked");
    });
  
    it("should submit the form data successfully", () => {
      const name = "John Doe";
      const email = "john@example.com";
      const password = "SecurePassword123";
  
      cy.get("#name-input").type(name);
      cy.get("#email-input").type(email);
      cy.get("#password-input").type(password);
      cy.get("#terms-checkbox").check();
  
      cy.get("#submit-button").click();
  
    });
  
    it("should check for form validation if an input is left empty", () => {
      cy.get("#submit-button").click();
  
    });
  });