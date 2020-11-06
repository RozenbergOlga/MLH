const sel = require('../../data/selectors.json');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in ', function () {
            browser.url(sel.homePage);
            const inputName = $(sel.name).setValue("ladyBug");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(123);
            const
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });
    });
});