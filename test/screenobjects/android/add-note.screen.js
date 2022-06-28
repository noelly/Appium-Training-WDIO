class AddNoteScreen {

get skipButton() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
}

get addNoteText() {
    return $('//*[@text="Add note"]');
}

get textButon() {
    return $('//*[@text="Text"]');
}

get editingText() {
    return $('//*[@text="Editing"]');
}

get editTitleTextField() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
}

get editNoteTextField() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
}

get editButtnonMenu() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
}

get viewNotes() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
}

get noteTitle() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
}

get threeDotMenu() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]')
}

get deleteButton() {
    return $('//*[@text="Delete"]')
}

get sideMenu() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
}

get trashCan() {
    return ($('//*[@text="Trash Can"]'))
}

async saveNote() {
    await driver.back();
    await driver.back();
}

}

module.exports = new AddNoteScreen();
// eport default new AddNoteScree (es6 way)