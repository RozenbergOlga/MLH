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
        it('TC-021 name ', function () {
            browser.url(sel.homePage);
            const placeholderName = $(sel.name);
            expect (placeholderName.getAttribute('placeholder'));
        });

        it('TC-022 gender he', function () {
            const genderHe = $$(sel.genderChoice)[0];
            expect(genderHe.getValue()).toEqual(exp.genderHe);
        });

        it('TC-023 gender she', function () {
            const genderShe = $$(sel.genderChoice)[1];
            expect(genderShe.getValue()).toEqual(exp.genderShe);
        });

        it('TC-024 gender it', function () {
            const genderIt = $$(sel.genderChoice)[2];
            expect(genderIt.getValue()).toEqual(exp.genderIt);
        });

        it('TC-025 age', function () {
            const placeholderAge = $(sel.age);
            expect(placeholderAge.getAttribute("placeholder"));
        });

        it('TC-026 story', function () {
            const placeholderStory = $(sel.story);
            expect(placeholderStory.getAttribute("placeholder"));
        });

        it('TC-027 Create ', function () {
            const button = $(sel.create);
            expect(button.getAttribute("placeholder"));
        });

    });

    describe('Inputs are clickable', function () {

        it('TC-028 name ', function () {
            browser.url(sel.homePage);
            const name = $(sel.name).isClickable();
            expect (name).toEqual(true);
        });

        it('TC-029 gender he', function () {
            const he = $$(sel.gender)[0].isClickable();
            expect(he).toEqual(true);
        });

        it('TC-030 gender she', function () {
            const she = $$(sel.gender)[1].isClickable();
            expect(she).toEqual(true);
        });

        it('TC-031 gender it', function () {
            const it = $$(sel.gender)[2].isClickable();
            expect(it).toEqual(true);
        });

        it('TC-032 age', function () {
            const age = $(sel.age).isClickable();
            expect(age).toEqual(true);
        });

        it('TC-033 story', function () {
            const story = $(sel.story).isClickable();
            expect(story).toEqual(true);
        });

        it('TC-034 Image', function () {
            const image = $(sel.imageInput).isClickable();
            expect(image).toEqual(true);
        });

        it('TC-034 Create ', function () {
            const button = $(sel.create).isClickable();
            expect(button).toEqual(false);
        });

    });
});