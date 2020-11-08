const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');


describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-021 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-021 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType.Comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-021 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Quest);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-021 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Journey and Return"]);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });
    });
})