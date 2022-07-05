const { DriverConfig } = require("appium/build/lib/extension/driver-config");

describe('ios Find Elements', () => {
    it('Find elements bu accessibility id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });
});