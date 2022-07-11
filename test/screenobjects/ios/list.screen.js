class ListScreen {

    get createListBtn() {
        return $('//*[@name="Create list"]');
    }

    get listNameInput() {
        return $('//*[@value="List Name"]');
    }

    get createBtn() {
        return $('~Create');
    }

    get createItemBtn() {
        return $('//*[@name="Create item"]');
    }

    get titleInput() {
        return $('//*[@value="Title"]');
    }

    get dueBtn() {
        return $('//*[@value="Due"]');
    }

    get datePickerBtn() {
        return $('~Date Picker');
    }

    get secondWindow() {
        return $('//XCUIElementTypeWindow[@index=2]');
    }

    listNameField(name) {
        return $(`~${name}`);
    }

    getByAccessibility(name) {
        return $(`~${name}`);
    }

}

//module.exports = new ListScreen();
export default new ListScreen();