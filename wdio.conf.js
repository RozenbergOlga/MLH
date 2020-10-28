exports.config = {

    runner: 'local',

    specs: [
        './test/smoke/*.js',
        './test/regression/*.js'
    ],

    exclude: [

    ],

    maxInstances: 10,

    capabilities: [{

        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://qa-apps.netlify.app/app_my_hero',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec','dot',['allure', {outputDir: 'allure-results'}]],

    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 60000
    },

    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },
}
