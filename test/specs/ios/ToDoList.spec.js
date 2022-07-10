describe('To Do List', () => {
    it('Create a ToDo list', async () => {

        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do today");
        await $('~Create').click();

        await expect(await $('~Things to do today')).toBeExisting();
    });
});