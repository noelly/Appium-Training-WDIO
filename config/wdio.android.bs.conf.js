require('dotenv').config()
const { config } = require('./wdio.shared.conf');


// ============
// Browserstalk
// ============
config.user= process.env.BROWSERSTACK_USER;
config.key= process.env.BROWSERSTACK_KEY;


// ============
// Specs
// ============

config.specs = [
    './test/specs/android/delete-note-screen.spec.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "10.0",
        "appium:deviceName": "Google Pixel 3",
        "appium:automationName": "UIAutomator2",
        "appium:app": "bs://78ce2f06c58592404e06cca8e2f00b4b1780fdf0",
        "appium:autoGrantPermissions": true
    }
];
config.services = ['browserstack'];

exports.config = config;
