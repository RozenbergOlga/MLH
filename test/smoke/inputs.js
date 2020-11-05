const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 name ', function () {
            browser.url('');
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

        it('TC-016 age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-017 story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-018 button ', function () {
            const button = $(sel.label).isDisplayed();
            expect(button).toEqual(true);
        });
    });
});