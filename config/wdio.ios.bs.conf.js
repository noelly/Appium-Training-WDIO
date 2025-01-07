const path = require('path');
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
    'test/specs/ios/ios-ToDoList-Screen-Objects-withHooks.spec.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "18.2",
        "appium:deviceName": "iPhone 16",
        "appium:automationName": "xcuitest",
        "appium:app": path.join(process.cwd(), "./app/ios/MVCTodo.app"),
        "appium:autoGrantPermissions": true
    }   
];
config.services = ['browserstack'];

exports.config = config;
