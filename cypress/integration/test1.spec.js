/// <reference types="cypress"/>

describe('SmallBiz Coding Challenge', () => {

   // it('Login ', () => {
   //    cy.visit('https://qa-app02.smartbizloans.com/login')

   //    cy.get('#email')
   //       .type('test.automationsb@smartbizloans.com')

   //    cy.get('#password')
   //       .type('Tester12345')

   //    cy.get('#login_to_flow')
   //       .click()
   // })

   it('1 - Goto sba7a apply page, Verify page is loaded and all fields on the form are present, verify the continue to pre-qualify button is disabled', () => {
      cy.visit('https://qa-app02.smartbizloans.com/apply?partner_id=smartbiz')
      cy.get('#submit_apply_form').should('have.class', 'disabled')
   })

   it('2 - Select “Build my business or refinance an existing debt”, then select “SBA loan” option', () => {
      cy.get('#square-selector-label-0')
         .click()
      cy.get('#square-simple-selector-label-1')
         .click()
   })

   it('3 - Enter the following text on the form fields', () => {
      // First Name - Test User First Name
      cy.get('#first_name')
         .type('Test User First Name')
      // Last Name - Test User Last Name
      cy.get('#last_name')
         .type('Test User Last Name')
      // Email - test.automation@smartbizloans.com 
      cy.get('#email')
         .type('test.automationsb@smartbizloans.com')
      // Phone number - 1234567234
      cy.get('#phone')
         .type('1234567234')
      // Business Name - Test Business  
      cy.get('#legal_business_name')
         .type('Test Business')
      // How did you hear about us?  - Select any option from drop down
      cy.get('#referral_source')
         .select('facebook')
      // Accept Terms and conditions checkbox 
      cy.get('.privacy-terms-container')
         .click()
   })

   it('4 - Click on the continue button', () => {
      cy.get('#submit_apply_form')
         .click();

      cy.contains('Click here to log in')
         .click()

      cy.get('#email')
         .type('test.automationsb@smartbizloans.com')

      cy.get('#password')
         .type('Tester12345')

      cy.get('#login_to_flow')
         .click()
   })

   it('5 - Verify the url to contain “/apply/loan”', () => {
      cy.url()
         .should('include', '/apply/loan')
      cy.wait(1000)
   })

   it('6 - Verify “Let’s get started” button is present', () => {
      // cy.get('#apply_loading')
      //    .should('be.visible');
   })

   it('7 - Click on “Let’s get started” button', () => {
      // cy.get('#apply_loading')
      //    .click();
   })

   it('8 - Verify the url contains “apply/prequalify/financing_needs”', () => {
      cy.get('#prev_new_prequal_btn')
         .click()
      cy.url()
         .should('include', 'apply/prequalify/financing_needs')
   })

   it('9 -Verify buttons “I have a strict timeline: 2 weeks or less”, “I’m flexible: about a month works for me”, “I dont have a specific time in mind” and “Save & Continue” buttons are present ', () => {
      cy.contains('I have a strict timeline: 2 weeks or less')
         .should('be.visible');
      cy.contains('I’m flexible: about a month works for me')
         .should('be.visible')
      cy.contains('I don’t have a specific time in mind')
         .should('be.visible')
      cy.get('#financial_needs_new_prequal')
         .should('be.visible')
   })

   it('10 - Verify “Save & Continue” button is disabled', () => {
      // cy.get('#password_new_prequal')
      //    .should('have.class', 'disabled');
   })

   it('11 - Click on “I’m flexible: about a month works for me”', () => {
      // cy.get('#bordered-selector-label-6001')
      //    .click();
   })

   it('12 - Verify Save & continue button is now enabled', () => {
      cy.get('#financial_needs_new_prequal')
         .should('not.be.disabled');
   })

   it('13 - Click on “Save & Continue” button', () => {
      cy.get('#financial_needs_new_prequal')
         .click();
   })
   it('14 - Verify url contains “/apply/prequalify/business/inception_date”', () => {
      cy.url()
         .should('include', '/apply/prequalify/business/inception_date');
   })

   it('15 - Verify the buttons “Less than 2 years ago”, “2-5 years ago”, “6-10 years ago”, “More than 10 years ago” and “Save & Continue” buttons are present', () => {
      cy.get('#bordered-selector-label-option_0')
         .should('be.visible');
      cy.get('#bordered-selector-label-option_1')
         .should('be.visible');
      cy.get('#bordered-selector-label-option_2')
         .should('be.visible');
      cy.get('#bordered-selector-label-option_3')
         .should('be.visible');
      cy.get('#password_new_prequal')
         .should('be.visible');
   })

   it('16 - Verify “Save & Continue” button is disabled', () => {
      // cy.get('#password_new_prequal')
      //    .should('have.class', 'disabled');
   })

   it('17 - Select “6-10 years ago”', () => {
      cy.contains('6-10 years ago')
         .click();
   })

   it('18 - Verify “Save & Continue” button is now enabled', () => {
      cy.get('#password_new_prequal')
         .should('not.be.disabled');
   })

   it('19 - Click on “Save & Continue” button', () => {
      cy.get('#password_new_prequal')
         .click();
   })

   it('20 - Verify the url contains “/apply/prequalify/business/industry”', () => {
      cy.url()
         .should('include', '/apply/prequalify/business/industry');
   })

   it('21 - Verify the Business Industry selection drop down is present and the “Save & Continue” button is present', () => {
      cy.get('#business_type_id')
         .should('be.visible');
      cy.get('#password_new_prequal')
         .should('not.be.disabled');
   })

   it('22 - Verify “Save & Continue” button is disabled', () => {
      // cy.get('#password_new_prequal')
      //    .should('have.class', 'disabled');
   })

   it('23 - Select “Manufacturing” option from the drop down menu', () => {
      cy.get('#business_type_id')
         .select('5')
   })

   it('24 - Verify “Save & Continue” button is now enabled', () => {
      cy.get('#password_new_prequal')
         .should('not.be.disabled');
   })

   it('25 - Click on “Save & Continue” button ', () => {
      cy.get('#password_new_prequal')
         .click();
   })

   it('26 - Verify the url contains “/apply/prequalify/business/address”', () => {
      cy.url()
         .should('include', '/apply/prequalify/business/address');
   })

   it('27 - Verify text box for address and apt/suite is present', () => {
      cy.get('#PlacesAutocomplete__root')
         .should('be.visible');
      cy.get('#apt_45359')
         .should('be.visible')
   })

   it('28 - Verify “Save & Continue” button is present and disabled', () => {

   })

   it('29 - Enter address “378 East St, Bloomsburg, PA” and select the auto suggested option displayed by hovering over it', () => {

   })

   it('30 - Click outside the address text box', () => {

   })

   it('31 - Verify “Save & Continue” button is now enabled', () => {

   })

   it('32 - Click on “Save & Continue”', () => {

   })

   it('33 - Verify the url contains “/apply/prequalify/business/employees”', () => {

   })

   it('34 - Verify “No Employees -- just me”, “1-5 employees”, “6-10 employees”, “11-20 employees”, “More than 20 employees” and “Save & Continue” buttons are present', () => {

   })

   it('35 - Select “6-10 employees”', () => {

   })

   it('36 - Verify “Save & Continue” button is now enabled', () => {

   })

   it('37 - Click on “Save & Continue” button ', () => {

   })

   it('38 - Verify url contains “/apply/prequalify/business/password”', () => {

   })

   it('39 - Verify Create password text box and “Save & Continue” buttons are present', () => {

   })

   it('40 - Enter the password “Test123!”', () => {

   })

   it('41 - Verify “Save & Continue” button is now enabled', () => {

   })

   it('42 - Click on “Save & Continue” button ', () => {
      
   })

   it('43 - Verify url contains “/apply/prequalify/owners”', () => {

   })

   it('44 - Verify users first name is displayed on the page along with “Save & Continue” button enabled.', () => {

   })

   it('45 - Verify logout button on the top menu', () => {
      
   })

   it('46 - Click on logout button ', () => {

   })

   it('47 - Click on “Yes, sign me out” button on modal dialog', () => {

   })

   it('48 - Verify url contains “/login”', () => {

   })

   it('49 - Verify the login page elements, Email, password and Login button to be present', () => {

   })

   it('50 - Enter the email address and password and click login button', () => {

   })

   it('51 - Verify the user is able to login to application ', () => {

   })
})

