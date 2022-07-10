const ListScreen = require('../../screenobjects/ios/list.screen')

describe('To Do List', () => {
    it('Create a ToDo list', async () => {

        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do");
        await ListScreen.createBtn.click();

        await expect(await ListScreen.listNameField("Things to do")).toBeExisting();
    });

    it('Create Todo Item', async () => {
        await $('~Things to do').click();
        await $('//*[@name="Create item"]').click();
        await $('//*[@value="Title"]').addValue("Buy Groceries");
        await $('//*[@value="Due"]').click();
        await $('~Date Picker').click();
        await $('~Sunday, July 24').click();
        await $('//XCUIElementTypeWindow[@index=2]').click();
        await $('~Create').click();

        //assertion
        await expect(await $('~Buy Groceries')).toBeExisting();
        await expect(await $('~Due July 24, 2022')).toBeExisting();
        
    });
});