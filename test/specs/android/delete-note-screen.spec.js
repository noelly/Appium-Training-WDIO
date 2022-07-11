import addNoteScreen from '../../screenobjects/android/add-note.screen';
import EditNoteScreen from '../../screenobjects/android/edit-note.screen';

describe('Add Notes', () => {
    before(async () => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("TV Shows", "Friends\nBreakingBad\nPeakyBlinders");
    });

    it('delete note', async () => {
        //open the note
        await driver.pause(1000);
        const note = await addNoteScreen.noteTitle.getText;

        console.log(`first word ----->  ${note}`)
        await (addNoteScreen.noteTitle).click();

        //click on 3 dot menu
        await addNoteScreen.threeDotMenu.click();

        //click on 3 dot menu
        await addNoteScreen.deleteButton.click();

        //Accept alert
        await driver.acceptAlert();
        await expect(addNoteScreen.addNoteText).toBeDisplayed();
        await driver.pause(1000);

        //Check the trash can
        await addNoteScreen.sideMenu.click();
        await expect(addNoteScreen.trashCan).toBeDisplayed();
        await addNoteScreen.trashCan.click();

        //assertions
        await driver.pause(1000);
        const trashCan = await addNoteScreen.addNoteText.getText;

        console.log(`second word ----->  ${trashCan}`)
        //await expect(trashCan).toEqual(note);
    });
});