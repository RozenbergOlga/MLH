const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');


describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-001 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-002 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-003 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType.Comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-004 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Quest);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-005 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Quest);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-006 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType.Quest);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-007 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Journey and Return"]);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-008 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType["Journey and Return"]);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-009 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType["Journey and Return"]);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-010 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Rebirth);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-011 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Rebirth);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-012 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType.Rebirth);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-013 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Tragedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-014 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Tragedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-015 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType.Tragedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-016 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Overcoming the Monster"]);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-017 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType["Overcoming the Monster"]);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-018 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType["Overcoming the Monster"]);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-019 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Rags and Riches"]);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-020 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType["Rags and Riches"]);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-021 Create button is clickable after 1-4 filled in with function ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType["Rags and Riches"]);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });
    });


    describe('Other path', function () {

        it('TC-022 gender he is working ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-023 gender she is working ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-024 gender it is working ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType.Comedy);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-025 story Quest is working ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Quest);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-026 story Comedy is working ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-027 story Journey and Return is working ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Journey and Return"]);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-028 story Overcoming the Monster is working ', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Overcoming the Monster"]);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

    })
})