const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================

config.port = 4723;

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
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Pixel 3",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(), "./app/android/ColorNote+Notepad.apk"),
        "appium:autoGrantPermissions": true
    }
];

exports.config = config;
