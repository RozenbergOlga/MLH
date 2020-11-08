const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');



describe('Upload photo', function () {

    describe('photo', function () {

        it('TC-032 Uploads photo', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType.comedy);
            // const imgPathJoin = path.join();
            const imgPath = browser.uploadFile(path);
            $(sel.imageInput).waitForDisplayed();
            browser.pause(5000);
            $(sel.imageInput).setValue(imgPath);
            browser.pause(5000);
            $(sel.create).click();
            browser.pause(5000);


        });
    });
})