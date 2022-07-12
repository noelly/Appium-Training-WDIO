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
    'test/specs/ios/ios-ToDoList-Screen-Objects-withHooks.spec.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "14.5",
        "appium:deviceName": "iPhone 12",
        "appium:automationName": "xcuitest",
        "appium:app": path.join(process.cwd(), "./app/ios/MVCTodo.app"),
        "appium:autoGrantPermissions": true
    }   
];
config.services = ['appium'];

exports.config = config;
