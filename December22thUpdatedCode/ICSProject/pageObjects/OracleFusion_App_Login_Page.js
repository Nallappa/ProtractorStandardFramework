requireLibrary('Locator');

//TextBox Locators
var txt_UserName = locatorId("userid");
var txt_PassWord = locatorXpath("//input[@name='password']");

//Link Locators
var lnk_UserWarehouse = locatorXpath("//a[contains(@id,'UIScmil1u')]");
var lnk_SignOut = locatorXpath("//*[contains(@id,'UISlg1')]");

//Button Locators
var btn_Conform = locatorId("Confirm");
var btn_SignIn = locatorId("btnActive");

module.exports = {
        TextBox: function (txt) {
                switch (txt) {
                        case 'uname':
                                actions.SetText(txt_UserName, 'warehouse.user', "UserName Filed");
                                break;
                }
        },
        PerformLigin: function (oracleSignin) {
                actions.SetText(txt_UserName, 'warehouse.user', "UserName Filed");
                actions.SetText(txt_PassWord, 'RFSics1234', 'Password Field');
                actions.Click(btn_SignIn, 'Sing In Button');
        }, 
        PerformLogout: function (oracleSignin) {
                actions.Click(lnk_UserWarehouse, 'Select User warehouse');
                actions.Click(lnk_SignOut, 'Select Signout button');
                actions.Click(btn_Conform, 'Select Conform');
        },
}