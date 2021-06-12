const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4click');
const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const path = require('path');

describe('Checking the main functionality', function () {
    describe('Happy path', function () {
        it('TC-001  Upload photo with story Comedy', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
               document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.inputPhoto).waitForDisplayed();
            $(sel.inputPhoto).setValue(remoteFilePath);
            createBtn.click();
        });

        it('TC-002  Upload photo with story Comedy and gender she', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.inputPhoto).waitForDisplayed();
            $(sel.inputPhoto).setValue(remoteFilePath);
            createBtn.click();
        });

        it('TC-003  Upload photo with story Comedy and gender it', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType.Comedy);
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.inputPhoto).waitForDisplayed();
            $(sel.inputPhoto).setValue(remoteFilePath);
            createBtn.click();
        });

        it('TC-004  Upload photo with story Tragedy', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Tragedy);
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.inputPhoto).waitForDisplayed();
            $(sel.inputPhoto).setValue(remoteFilePath);
            createBtn.click();
        });

        it('TC-005  Upload photo with story Rebirth', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Rebirth);
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.inputPhoto).waitForDisplayed();
            $(sel.inputPhoto).setValue(remoteFilePath);
            createBtn.click();
        });

        it('TC-006  Upload photo with story Quest', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Quest);
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.inputPhoto).waitForDisplayed();
            $(sel.inputPhoto).setValue(remoteFilePath);
            createBtn.click();
        });


        it('TC-007  Upload photo with story Journey and Return', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Journey and Return"]);
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.inputPhoto).waitForDisplayed();
            $(sel.inputPhoto).setValue(remoteFilePath);
            createBtn.click();
        });

        it('TC-008  Upload photo with story Rags and Riches', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Rags and Riches"]);
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.inputPhoto).waitForDisplayed();
            $(sel.inputPhoto).setValue(remoteFilePath);
            createBtn.click();
        });

        it('TC-009  Upload photo with story Overcoming the Monster', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Overcoming the Monster"]) ;
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.inputPhoto).waitForDisplayed();
            $(sel.inputPhoto).setValue(remoteFilePath);
            createBtn.click();
        });
    });
});