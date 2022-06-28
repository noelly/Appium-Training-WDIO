const AddNoteScreen = require("./add-note.screen");

class EditNoteScreen {
    async skipTutorial() {
        await AddNoteScreen.skipButton.click();
        await driver.pause(1000);
    }

    async addAndSaveNote(noteHeading, noteBody)  {
          // navigate to note screen    
          await (AddNoteScreen.addNoteText).click();
          await AddNoteScreen.textButon.click();
  
          // Add  title
          const noteTitle = await AddNoteScreen.editTitleTextField;
  
          // setValue clears the value before adding the value / addValue just add
          await noteTitle.setValue(noteHeading);
  
          // Add note 
          await AddNoteScreen.editNoteTextField.addValue(noteBody);
  
          //save the changes
          await AddNoteScreen.saveNote();
  
          //assertion
          await expect(AddNoteScreen.editButtnonMenu).toBeDisplayed();
          await expect(AddNoteScreen.viewNotes).toHaveText(noteBody);
  
          await driver.back();
    }
}

module.exports = new EditNoteScreen();
// eport default new EditNoteScree (es6 way)