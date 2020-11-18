const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {
            browser.url(sel.homePage);
            let title = browser.getTitle();
            expect(title).toEqual('MLH trial');
        });
    });

    describe('Elements exist', function () {

        it('TC-002 Label for header', function () {
            const label = $(sel.header).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-003 Label for description', function () {
            const label = $(sel.description).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-004 Label for name', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-005 Label for gender', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-006 Label for age', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007 Label for story', function () {
            const label = $$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });
    });

    describe('Labels are correct' , function () {

        it('TC-008 Label for header = My Little Hero', function () {
            const text = $(sel.header).getText();
            expect(text).toEqual(exp.labelHeader);
        });

        it('TC-009 Label for description = Let\'s create your own HERO! It\'s super easy with our application!', function () {
            const text = $(sel.description).getText();
            expect(text).toEqual(exp.labelDescription);
        });

        it('TC-010 Label for name = 1. What is your Hero\'s name?', function () {
            const text = $$(sel.label)[0].getText();
            expect(text).toEqual(exp.labelName);
        });

        it('TC-011 Label for name = 2. Please choose a gender.', function () {
            const text = $$(sel.label)[1].getText();
            expect(text).toEqual(exp.labelGender);
        });

        it('TC-012 Label for name = 3. How old is your hero?', function () {
            const text = $$(sel.label)[2].getText();
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-013 Label for name = 4. What type of story would you like to read?', function () {
            const text = $$(sel.label)[3].getText();
            expect(text).toEqual(exp.labelStory);
        });
    });

});
