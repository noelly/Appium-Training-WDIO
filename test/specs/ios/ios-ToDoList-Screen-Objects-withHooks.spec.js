//const ListScreen = require('../../screenobjects/ios/list.screen');
import ListScreen from '../../screenobjects/ios/list.screen';

describe('To Do List', () => {
    before(async () => {
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do");
        await ListScreen.createBtn.click();
        await expect(await ListScreen.listNameField("Things to do")).toBeExisting();
        await ListScreen.listNameField("Things to do").click();
    });

    beforeEach(async () => {
        console.log('Before each Hook');
    });

    it('Create Todo Item', async () => {
        //create to do item
        await ListScreen.createItemBtn.click();
        await ListScreen.titleInput.addValue("Buy Groceries");
        await ListScreen.dueBtn.click();
        await ListScreen.datePickerBtn.click();
        await ListScreen.getByAccessibility("Sunday, July 24").click();
        await ListScreen.secondWindow.click();
        await ListScreen.createBtn.click();

        //assertion
        await expect(await ListScreen.getByAccessibility("Buy Groceries")).toBeExisting();
        await expect(await ListScreen.getByAccessibility("Due July 24, 2022")).toBeExisting();
    });
});