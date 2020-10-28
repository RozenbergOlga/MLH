const sel = require('../../data/selectors.json');

const exp = require('../../data/expected.json');

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            let title = browser.getTitle();
            expect(title).toEqual('MLH trial');
        });
    });

    describe('Elements exist', function () {

        it('TC-002 Label for name', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-003 Label for gender', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-004 Label for age', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Label for story', function () {
            const label = $$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });
    });

});
