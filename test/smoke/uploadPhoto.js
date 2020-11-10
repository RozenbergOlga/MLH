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
            browser.pause(3000);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
               document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(8000);
            createBtn.click();
            browser.pause(5000);
        });

        it('TC-002  Upload photo with story Comedy and gender she', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            browser.pause(3000);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(8000);
            createBtn.click();
            browser.pause(5000);
        });

        it('TC-003  Upload photo with story Comedy and gender it', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.it, data.age, data.storyType.Comedy);
            browser.pause(3000);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(8000);
            createBtn.click();
            browser.pause(5000);
        });

        it('TC-004  Upload photo with story Tragedy', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Tragedy);
            browser.pause(3000);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(8000);
            createBtn.click();
            browser.pause(5000);
        });

        it('TC-005  Upload photo with story Rebirth', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Rebirth);
            browser.pause(3000);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(8000);
            createBtn.click();
            browser.pause(5000);
        });

        it('TC-006  Upload photo with story Quest', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Quest);
            browser.pause(3000);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(8000);
            createBtn.click();
            browser.pause(5000);
        });

        it('TC-007  Upload photo with story Journey and Return', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Journey and Return"]);
            browser.pause(3000);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(8000);
            createBtn.click();
            browser.pause(5000);
        });

        it('TC-008  Upload photo with story Rags and Riches', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Rags and Riches"]);
            browser.pause(3000);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(8000);
            createBtn.click();
            browser.pause(5000);
        });

        it('TC-009  Upload photo with story Overcoming the Monster', function () {
            browser.url(sel.homePage);
            inputValues4(data.name, data.gender.he, data.age, data.storyType["Overcoming the Monster"]) ;
            browser.pause(3000);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/photo.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(8000);
            createBtn.click();
            browser.pause(5000);
        });
    });
});