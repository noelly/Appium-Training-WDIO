const { DriverConfig } = require("appium/build/lib/extension/driver-config");

describe('ios Find Elements', () => {
    it('Find elements bu accessibility id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });

    it('Find by Tag Name', async () => {
        // single element
        console.log(await $('XCUIElementTypeStaticText').getText());


        // multiple element
        const textElement = await $$('XCUIElementTypeStaticText');

        for (const element of textElement) {
            console.log(await element.getText());
        }

    });

    it('Find Elements by Xpath', async () => {
        // xpath (//tagname[@attribute=value])

        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        // await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        await $('//*[@name="Alert Views"]').click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('Find Elements by class chain', async () => {
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';

        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    });

    it('Find Elements by predicate string', async () => {
        //const alertText = 'label == "Alert Views"';

        const alertText = 'value BEGINSWITH[c] "alert"'; 
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");


    });
});

describe('Access default search bar screen', () => {
    // search > default search bar >
    // enter text in search input field
    // clear by clicking x buttom
    // verify that search bar is cleared
    it('Navigate to the seach bar', async() => {
        await $('~Search').click();
        await $('~Default').click();
        await expect(await $('//XCUIElementTypeStaticText[@name="Cancel"]')).toBeDisplayed();
        
    });

    it('Enter Value in search field', async() => {
        await $('//XCUIElementTypeSearchField').addValue("I like Ice cream")
        await expect(await $('//XCUIElementTypeSearchField')).toHaveAttribute('value');

        await $('~Clear text').click();
        await expect(await $('//XCUIElementTypeSearchField')).not.toHaveAttribute('value');
        
    });
});

describe(' IOS native specs // Work with Dialog / alert', () => {
    it('Go to alert section',async () => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        // click ok
        //await $('~OK').click();

        console.log(await driver.getAlertText());

        // accept of dismiss alert ( wdio )

        await driver.dismissAlert();
        
        //assertion
        await expect($('~OK')).not.toExist();
    });
});

describe.only('Work with scrolable elements', () => {
    it('scroll our main screen with driver execute', async() => {
        //easiest
        await driver.execute('mobile: scroll', { direction: "down" });
        await driver.execute('mobile: scroll', { direction: "up" });
    });

    it('scroll again - complex scenario ',async () => {
        await $('~Picker View').click();
        await driver.execute('mobile: scroll', { direction: "down" });
        await driver.pause(2000); 
    });

    it('Change Red picker', async() => {
        const redPicker = await $('~Red color component value');

        // get element id
        console.log(redPicker); //elementId: 'AA000000-0000-0000-0939-000000000000',
        await driver.execute('mobile: scroll', { element: redPicker.elementId, direction: "down" });

    });

    it('Change Blue picker', async() => {
        const bluePicker = await $('~Blue color component value');

        // get element id
        console.log(bluePicker); 
        await driver.execute('mobile: scroll', { element: bluePicker.elementId, direction: "down" }); 
    });

    it('Change Green picker', async() => {
        const greenPicker = await $('~Green color component value');

        // get element id
        console.log(greenPicker); 
        await driver.execute('mobile: scroll', { element: greenPicker.elementId, direction: "up" });

        await driver.pause(2000); 
    });

    it('Select specific values on the pickers', async () => {
        const greenPicker = await $('~Green color component value');
        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');


        // set purple color 125, 0, 125

        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');

        await driver.pause(2000); 
        
    });
});