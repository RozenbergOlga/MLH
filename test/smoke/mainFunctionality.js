const sel = require('../../data/selectors.json');

const exp = require('../../data/expected.json');

const data = require('../../data/testData.json');

const inputValues4 = require('../../helpers/inputValues4');

const inputValues4click = require('../../helpers/inputValues4click');

describe('Checking the main functionality', function () {

    xdescribe('Happy path', function () {

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

        it('TC-022 gender he is working in story Comedy ', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.he, data.age, data.storyType.Comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
        it('TC-023 gender she is working in story Comedy', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.she, data.age, data.storyType.Comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
        it('TC-024 gender it is working in story Comedy ', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.it, data.age, data.storyType.Comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
        it('TC-025 gender he is working in story Quest', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.he, data.age, data.storyType.Quest);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
        it('TC-026 gender she is working in story Quest ', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.she, data.age, data.storyType.Quest);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
        it('TC-027 gender it is working in story Quest ', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.it, data.age, data.storyType.Quest);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
        it('TC-028 gender he is working in story Rebirth ', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.he, data.age, data.storyType.Rebirth);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
        it('TC-029 gender she is working in story Rebirth', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.she, data.age, data.storyType.Rebirth);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
        xit('TC-030 gender it is working in story Rebirth', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.it, data.age, data.storyType.Rebirth);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
        xit('TC-031 gender he is working in story Tragedy', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.he, data.age, data.storyType.Tragedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
        xit('TC-032 gender she is working in story Tragedy', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.she, data.age, data.storyType.Tragedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        xit('TC-033 gender it is working in story Tragedy', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.it, data.age, data.storyType.Tragedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        xit('TC-034 gender he is working in story Rags and Riches', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.he, data.age, data.storyType["Rags and Riches"]);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        xit('TC-035 gender she is working in story Rags and Riches', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.she, data.age, data.storyType["Rags and Riches"]);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        xit('TC-036 gender it is working in story Rags and Riches', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.it, data.age, data.storyType["Rags and Riches"]);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        xit('TC-037 gender he is working in story Overcoming the Monster', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.he, data.age, data.storyType["Overcoming the Monster"]);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        xit('TC-038 gender she is working in story Overcoming the Monster', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.she, data.age, data.storyType["Overcoming the Monster"]);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        xit('TC-039 gender it is working in story Overcoming the Monster', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.it, data.age, data.storyType["Overcoming the Monster"]);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        xit('TC-040 gender he is working in story Journey and Return', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.he, data.age, data.storyType["Journey and Return"]);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        xit('TC-041 gender she is working in story Journey and Return', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.she, data.age, data.storyType["Journey and Return"]);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        xit('TC-042 gender it is working in story Journey and Return', function () {
            browser.url(sel.homePage);
            inputValues4click(data.name, data.gender.it, data.age, data.storyType["Journey and Return"]);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
    })
})