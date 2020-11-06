const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 name ', function () {
            browser.url(sel.homePage);
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-015 gender he', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 gender she', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 gender it', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-019 story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-020 Create ', function () {
            const button = $(sel.label).isDisplayed();
            expect(button).toEqual(true);
        });
    });


    describe('Placeholders are correct', function () {

        xit('TC-021 name ', function () {
            browser.url(sel.homePage);
            const value = $(sel.name).getValue();
            expect(value).toEqual('Hero\'s name');
        });

        xit('TC-015 gender he', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        xit('TC-016 gender she', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        xit('TC-017 gender it', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        xit('TC-018 age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        xit('TC-019 story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        xit('TC-020 Create ', function () {
            const button = $(sel.label).isDisplayed();
            expect(button).toEqual(true);
        });

    });
});