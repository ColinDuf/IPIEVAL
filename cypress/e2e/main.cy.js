/// <reference types="cypress" />

describe('Modal Tests', () => {
    beforeEach(() => {
        cy.visit('../../app/modal.html');
    });

    // MODAL.HTML

    it('Should open the modal window clicking on display', () => {
        cy.dataCy('display-button').click();
        cy.dataCy('modal').should('be.visible');
    });

    it('Should close the modal window cliking out of the module ', () => {
        cy.dataCy('display-button').click();
        cy.dataCy('modal').should('be.visible');
        cy.get('body').click(0, 0); 
        cy.dataCy('modal').should('not.be.visible');
    });

    it('Should get in modal windiow <h2></h2> contenant Lorem Ipsum"', () => {
        cy.dataCy('display-button').click();
        cy.dataCy('modal-title').should('contain', 'Lorem Ipsum');
    });

// SCROLLONTOP.HTML

describe('Scroll-to-Top Tests', () => {
    beforeEach(() => {
        cy.visit('../../app/scroll-to-top.html'); 
    });

    it('Should display "scroll-to-top" button in the bottom right when scroll down', () => {
        cy.dataCy('scroll-button').click();
        cy.dataCy('scroll-to-top').should('be.visible');
    });

    it('Should scroll on top and remove the "scroll-on-top" button when click on it', () => {
        cy.dataCy('scroll-button').click();
        cy.dataCy('scroll-to-top').should('be.visible');
        cy.dataCy('scroll-to-top-button').click();
        cy.dataCy('scroll-to-top').should('not.be.visible');
    });
});

    // SMART-TAG.HTML

describe('Smart Tag Tests', () => {
    beforeEach(() => {
        cy.visit('../../app/smart-tag.html'); 
    });

 it('Should display the tag when over "See more"', () => {
    cy.dataCy('button-showmore').trigger('mouseover');
    cy.dataCy('tooltip').should('be.visible');
});

it('Should remove the tag when the hover of "See more" button left', () => {
    cy.dataCy('button-showmore').trigger('mouseover');
    cy.dataCy('tooltip').should('be.visible');
    cy.get('body').click(0, 0);
});
})

    // INDEX.HTML

describe('Todo List Tests', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html');
    });

    it('Should add 4 Todos and delet the 2nd one', () => {
        const todos = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4'];
        todos.forEach((todo, index) => {
            cy.dataCy('new-todo-input').type(todo);
            cy.dataCy('add-todo-button').click();
            cy.dataCy('todo-item').should('have.length', index + 1);
        });

        cy.dataCy('todo-item').eq(1).within(() => {
            cy.dataCy('delete-todo-button').click();
        });

        cy.dataCy('todo-item').should('have.length', 3);
        cy.dataCy('todo-count').should('contain', '3');
        cy.dataCy('todo-content').eq(0).should('contain', 'Todo 1');
        cy.dataCy('todo-content').eq(1).should('contain', 'Todo 3');
        cy.dataCy('todo-content').eq(2).should('contain', 'Todo 4');
    });
});

});
