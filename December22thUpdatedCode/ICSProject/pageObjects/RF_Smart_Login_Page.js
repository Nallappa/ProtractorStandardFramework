requireLibrary('Locator');

//TextBox Locators
var txt_rf_UserID = locatorId("txtUser");
var txt_rf_PassWord = locatorId("txtPassword");

//Button Locators
var btn_rf_Enter = locatorId("btnEnter");

module.exports = {
        TextBox: function (txt) {
                switch (txt) {
                        case 'userid':
                                actions.SetText(txt_rf_UserID, 'warehouse.user', "UserName Filed");
                                break;
                }
        },
        RF_PerformLigin: function () {
                actions.SetText(txt_rf_UserID, 'warehouse.user', "UserName Filed");
                actions.SetText(txt_rf_PassWord, 'RFSics1234', 'Password Field');
                actions.Click(btn_rf_Enter, 'Select Enter Button');
        }
}