
Automation-portfolio-WDIO-Appium


Owner: Noel Ly
Webdriver.IO Version: v7.19.0
Appium: 2.14.1
Node Version: v23.4.0
NPM Version: v10.9.2

# Set Up

Clone git repository

- Install repo dependancies: npm install
- Install Xcode Command Line tools : xcode-select --install
- Install Appium : npm i appium -ng appium@next
- Install Brew :/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
- Install carthage (dependancy manager) : brew install carthage
[if you see error ✖ Error running xcrun simctl

go to xcode, settings, location, be sure command line tools is not blank

or xcode-select -s /Applications/Xcode.app]

# Setup WDIO Config iOS

• install Appium xcuitest
	◦ appium driver list
	◦ appium driver install xcuitest

• Get Test application
• Update capabilities
	◦ get current IOS version
		‣ xcode > Window > devices & simulators

# wdio-appium-android


# Launch Appium server
appium

# Launch emulator in the config file
~/Library/Android/Sdk/emulator/emulator -avd Pixel_3

# Launch emulator in the appium inspector file
~/Library/Android/Sdk/emulator/emulator -avd Pixel_3_Appium_Inspector

# Open Appium inspector and import settings files

# Run test
 -- npx wdio

 • run ios test with new config
	◦ npx wdio config/wdio.ios.conf.js
• run android test with new config
	◦ npx wdio config/wdio.android.conf.js