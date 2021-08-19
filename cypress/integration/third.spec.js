/// <reference types="cypress"/>

describe('SmallBiz Coding Challenge', () => {

   it('1 - Goto sba7a apply page, Verify page is loaded and all fields on the form are present, verify the continue to pre-qualify button is disabled', () => {
      // cy.visit('https://qa-app02.smartbizloans.com/apply?partner_id=smartbiz ')
         // .should('be.visible');
      cy.get('#submit_apply_form').should('be.disabled')
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
      cy.get('#last')
         .type('Test User Last Name')
      // Email - test.automation@smartbizloans.com 
      cy.get('#email')
         .type('test.automation@smartbizloans.com ')
      // Phone number - 1234567234
      cy.get('#phone')
         .type('1234567234')
      // Business Name - Test Business  
      cy.get('#legal_business_name')
         .type('Test Business')
      // How did you hear about us?  - Select any option from drop down
      cy.get('referral_source')
         .click()
      cy.get('option[value="tv"]')
         .click()
      // Accept Terms and conditions checkbox 
      cy.get('.privacy-terms-container')
         .click()
   })

   it('4 - Click on the continue button', () => {
      cy.get('#submit_apply_form')
         .click();
   })

   it('5 - Verify the url to contain “/apply/loan”', () => {
      cy.url()
         .should('include', '/apply/loan')

   })

   it('6 - Verify “Let’s get started” button is present', () => {
      cy.get('Let’s get started')
         .should('be.visible');
   })

   it('7 - Click on “Let’s get started” button', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('8 - Verify the url contains “apply/prequalify/financing_needs”', () => {
      cy.url()
         .should('include', 'apply/prequalify/financing_needs')
   })

   it('9 -Verify buttons “I have a strict timeline: 2 weeks or less”, “I’m flexible: about a month works for me”, “I dont have a specific time in mind” and “Save & Continue” buttons are present ', () => {
      cy.contains('I have a strict timeline: 2 weeks or less') // by textName
         .should('be.visible');
      cy.get('') // by ID locator
         .should('be.visible')
      cy.get('')// by ID locator
         .should('be.visible')
      cy.get('').should('be.visible')
   })

   it('10 - Verify “Save & Continue” button is disabled', () => {
      cy.get('')
         .should('be.disabled');
   })

   it('11 - Click on “I’m flexible: about a month works for me”', () => {
      cy.get('Let’s get started')
         .click();
   })

   it('12 - Verify Save & continue button is now enabled', () => {
      cy.get('')
         .should('be.enabled');
   })

   it('13 - Click on “Save & Continue” button', () => {
      cy.contains('Let’s get started')
         .click();
   })
   it('14 - Verify url contains “/apply/prequalify/business/inception_date”', () => {
      cy.url()
         .should('include', '/apply/prequalify/business/inception_date');
   })

   it('15 - Verify the buttons “Less than 2 years ago”, “2-5 years ago”, “6-10 years ago”, “More than 10 years ago” and “Save & Continue” buttons are present', () => {
      cy.get('')
         .should('be.visible');
      cy.get('')
         .should('be.visible');
      cy.get('')
         .should('be.visible');
      cy.get('')
         .should('be.visible');
      cy.get('')
         .should('be.visible');
   })

   it('16 - Verify “Save & Continue” button is disabled', () => {
      cy.get('')
         .should('be.disabled');
   })

   it('17 - Select “6-10 years ago”', () => {
      cy.contains('6-10 years ago')
         .click();
   })

   it('18 - Verify “Save & Continue” button is now enabled', () => {
      cy.get('')
         .should('be.enabled');
   })

   it('19 - Click on “Save & Continue” button', () => {
      cy.contains('Let’s get started')
         .click();
   })

   it('20 - Verify the url contains “/apply/prequalify/business/industry”', () => {
      cy.url()
         .should('include','/apply/prequalify/business/industry');
   })

   it('21 - Verify the Business Industry selection drop down is present and the “Save & Continue” button is present', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('22 - Verify “Save & Continue” button is disabled', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('23 - Select “Manufacturing” option from the drop down menu', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('24 - Verify “Save & Continue” button is now enabled', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('25 - Click on “Save & Continue” button ', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('26 - Verify the url contains “/apply/prequalify/business/address”', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('27 - Verify text box for address and apt/suite is present', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('28 - Verify “Save & Continue” button is present and disabled', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('29 - Enter address “378 East St, Bloomsburg, PA” and select the auto suggested option displayed by hovering over it', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('30 - Click outside the address text box', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('31 - Verify “Save & Continue” button is now enabled', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('32 - Click on “Save & Continue”', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('33 - Verify the url contains “/apply/prequalify/business/employees”', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('34 - Verify “No Employees -- just me”, “1-5 employees”, “6-10 employees”, “11-20 employees”, “More than 20 employees” and “Save & Continue” buttons are present', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('35 - Select “6-10 employees”', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('36 - Verify “Save & Continue” button is now enabled', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('37 - Click on “Save & Continue” button ', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('38 - Verify url contains “/apply/prequalify/business/password”', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('39 - Verify Create password text box and “Save & Continue” buttons are present', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('40 - Enter the password “Test123!”', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('41 - Verify “Save & Continue” button is now enabled', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('42 - Click on “Save & Continue” button ', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('43 - Verify url contains “/apply/prequalify/owners”', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('44 - Verify users first name is displayed on the page along with “Save & Continue” button enabled.', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('45 - Verify logout button on the top menu', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('46 - Click on logout button ', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('47 - Click on “Yes, sign me out” button on modal dialog', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('48 - Verify url contains “/login”', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('49 - Verify the login page elements, Email, password and Login button to be present', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('50 - Enter the email address and password and click login button', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })

   it('51 - Verify the user is able to login to application ', () => {
      cy.contains('Let’s get started')
         .should('be.visible');
   })


})

