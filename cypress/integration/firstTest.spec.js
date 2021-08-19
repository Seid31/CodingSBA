/// <reference types="cypress"/>

describe('Our first suite', () => {

   it('first test', () => {

      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()
      cy.get('[data-cy="imputEmail1"]').type('asbayramov@gmail.com')

   })

   it('Second Test', () => {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()

      cy.get('[data-cy="signInButton"]')
      cy.contains('Sign in')
      cy.contains('[status="warning"]', 'Sign in')
      cy.get('#inputEmail3')
         .parents('form')
         .find('button')
         .should('contain', 'Sign in')
         .parents('form')
         .find('nb-checkbox')
         .click()

      cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
      cy.contains('nb-card', 'Basic form').find('[type="password"]')

      cy.get('#exampleInputPassword1')
         .parents('form')
         .find('button')
         .should('contain', 'Submit')
   })


   it('assert property', () => {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()

      cy.get('#inputEmail')
         .parents('nb-card-body')
         .find('[type="submit"]')
         .should('contain', 'Submit')
         .click()


      cy.contains('nb-card', 'Basic form')
         .find('[class="custom-checkbox"]').click()
   })

   it('then and wrap methods', () => {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()

      // cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
      // cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password')

      // cy.contains('nb-card','Basic form').find('[for="exampleInputEmail1"]').should('contain','Email address')
      // cy.contains('nb-card','Basic form').find('[for="exampleInputPassword1"]').should('contain','Password')

      cy.contains('nb-card', 'Using the Grid').then(firstForm => {

         let emailLable1 = firstForm.find('[for="inputEmail1"]').text()
         let passwordLable1 = firstForm.find('[for="inputPassword2"]').text()
         expect(emailLable1).to.equal('Email')
         expect(passwordLable1).to.equal('Password')

         cy.contains('nb-card', 'Basic form').then(secondForm => {
            let emailLable2 = secondForm.find('[for="exampleInputEmail1"]').text()
            let passwordLable2 = secondForm.find('[for="exampleInputPassword1"]').text()

            // When you use 'then' method it is means you are using JQuery function and assertion is there CHAI ASSERTIONS 'expect'
            expect(emailLable2).to.equal('Email address')
            expect(passwordLable2).to.equal(passwordLable1)

            // if you want to convert back to CYPRESS ASSERTION you have to use 'wrap' function
            cy.wrap(secondForm).find('[for="exampleInputEmail1"]').should('contain', 'Email address')

         })

      })

   })

   it('invoke command', () => {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()

      // #1
      cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

      // #2
      cy.get('[for="exampleInputEmail1"]').then(label => {
         expect(label.text()).to.equal('Email address')
      })

      // #3
      cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
         expect(text).to.equal('Email address')
      })

      // assertion checked box with invoke
      cy.contains('nb-card', 'Basic form')
         .find('nb-checkbox')
         .click()
         .find('.custom-checkbox')
         .invoke('attr', 'class')
         .should('contain', 'checked')

   })

   it('Datepicker Common', () => {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Datepicker').click()


      cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
         cy.wrap(input).click()
         cy.get('nb-calendar-day-picker').contains('17').click()
         cy.wrap(input).invoke('prop', 'value').should('contain', 'Jun 17, 2021')
      })

   })

   it('radio buttons', () => {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()

      cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
         cy.wrap(radioButtons)
            .first()
            .check({ force: true })
            .should('be.checked')

         cy.wrap(radioButtons)
            .eq(1).check({ force: true })
            .should('be.checked')

         cy.wrap(radioButtons)
            .last()
            .should('be.disabled')
      })

   })

   it('check buttons', () => {
      cy.visit('/')
      cy.contains('Modal & Overlays').click()
      cy.contains('Toastr').click()

      cy.get('[type="checkbox"]').check({ force: true })
      cy.get('[type="checkbox"]').eq(1).check({ force: true })
   })

   it('lists and dropdowns', () => {
      cy.visit('/')

      //#1
      // cy.get('nav nb-select').click()
      // cy.get('.options-list').contains('Dark').click()
      // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
      // cy.get('nav nb-select').should('contain','Dark')

      //#2
      // cy.get('nav nb-select').then(dropdown => {
      //    cy.wrap(dropdown).click()
      //    cy.get('.options-list nb-option').each((listItem, index) => {
      //       let itemText = listItem.text().trim()

      //       let colors = {
      //          "Light": "rgb(255, 255, 255)",
      //          "Dark": "rgb(34, 43, 69)",
      //          "Cosmic": "rgb(50, 50, 89)",
      //          "Corporate": "rgb(255, 255, 255)"
      //       }

      //       cy.wrap(listItem).click()
      //       cy.wrap(dropdown).should('contain', itemText)
      //       cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
      //       if (index < 3) {
      //          cy.wrap(dropdown).click()
      //       }

      //    })
      // })
   })

   it('test', () => {
      cy.visit('/')
      // cy.get('nav nb-select').click()
      // cy.contains('Dark').click()
      // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
      // cy.get('nav nb-select').should('contain', 'Dark')

      cy.get('nav nb-select').then(dropdownList => {
         cy.get('nav nb-select').then(dropdown => {
            cy.wrap(dropdownList).click()

            cy.get('.options-list nb-option').each((listItem, index) => {
               let itemText = listItem.text().trim()

               let colors = {
                  "Light": "rgb(255, 255, 255)",
                  "Dark": "rgb(34, 43, 69)",
                  "Cosmic": "rgb(50, 50, 89)",
                  "Corporate": "rgb(255, 255, 255)"
               }

               cy.wrap(listItem).click()
               cy.wrap(dropdownList).should('contain', itemText)
               cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
               if (index < 3) {
                  cy.wrap(dropdown).click()


                  let s = ['loveleecode'];
                  let charCounter = new Map();

                  for (let i = 0; i < s.length; i++) {
                     charCounter.set(s[i], (charCounter.get(s[i]) || 0) + 1);
                  }

                  for (let i = 0; i < s.length; i++) {
                     let value = charCounter.get(s[i]);
                     if (value === 1) {
                        return i;
                     }

                     return -1;
                  }
               }

            })

         })

      })

   })

   it.only('pre-qualify button is now enabled and clickable ',()=>{
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()

      cy.get('[data-cy="signInButton"]').then(button =>{
         cy.wrap(button).should('be.enabled')
         cy.wrap(button).click()
     
      })
   })

})
