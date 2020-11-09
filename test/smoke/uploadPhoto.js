const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const path = require('path');



describe('Upload photo', function () {

    describe('photo', function () {

        it('TC-032 Uploads photo', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType.comedy);
            //const inputDiv = $('.ant-upload input');
            $('.ant-upload-select-picture-card').click();
            const filePath = path.join('../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            //browser.execute(function () {
             //   document.getElementsByTagName('input')[6].style.display = "block";
            //});
            //inputDiv.waitForDisplayed();
            inputDiv.click();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(5000);
            $(sel.create).click();
            browser.pause(5000);


        });
    });
})