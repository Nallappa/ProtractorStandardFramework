requireLibrary('Locator');

//TextBox Locators
var txt_rf_UserID = locatorId("txtUser");
var txt_rf_PassWord = locatorId("txtPassword");
var txt_Account_Aliass_Issue = locatorXpath("//h1")
var btn_Exit = locatorId("btnF3");
var btn_Back = locatorId("btnF4");
var btn_List = locatorId("btnF1");
var btn_Done=locatorId("btnF2");

var ele_Success_Message = locatorXpath("//article[@class='success mini']//h3");
var txt_Organization_Code = locatorId("txt");
var inpt_Item_Number = locatorXpath("//*[@placeholder='Item Number']");
var inpt_Subinventory = locatorXpath("//*[@placeholder='Subinventory']");
var txt_ItemNumber = locatorXpath("//label[contains(text(),'Item Number')]");
var txt_Quantity = locatorXpath("//label[contains(text(),'Quantity')]");
var inpt_Locator = locatorXpath("//*[@placeholder='Locator']");
var inpt_UOM = locatorXpath("//*[@placeholder='UOM']");
var inpt_Lot_Number = locatorXpath(".//input[@placeholder='Lot Number']");
var inpt_Quantity = locatorXpath(".//input[@placeholder='Quantity']");
var inpt_Serial_Number = locatorXpath("//input[@placeholder='Serial Number']");
var txt_Locator = locatorXpath("//td[contains(text(),'Locator')]");

//Button Locators
var btn_rf_Enter = locatorId("btnEnter");

//Links
var lnk_SubInventory_Transfer = locatorId("SubinventoryTransfer_Default");

module.exports = {

    TextBox: function (txt, testData) {
        switch (txt) {
            case 'OrganizationCode':
                actions.SetText(txt_Organization_Code, testData, "Enter OrganizationCode");
                break;
            case 'Selectenter':
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'ClearData':
                browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
                break;
            case 'EnterOrderNumber':
                actions.SetText(txt_Organization_Code, testData, "Enter Order Number:");
                break;
            case 'EnterQuantity':
                actions.SetText(txt_Organization_Code, testData, "Enter Order Quantity");
                break;
            case 'EnterUOM':
                actions.SetText(inpt_UOM, testData, "Enter Order Quantity");
                break;
            case 'EnterQtyOfLables':
                actions.SetText(txt_Organization_Code, testData, "Enter Quantity of Labels");
                break;
            case 'EnterReceiptNumber':
                actions.SetText(txt_Organization_Code, testData, "Enter Receipt Number");
                break;
            case 'IntemNumber':
                actions.SetText(inpt_Item_Number, testData, "Input Item Number");
                break;
            case 'LotNumberInput':
                actions.SetText(inpt_Lot_Number, testData, "Input Lot Number");
                break;
            case 'SerialNumberInput':
             actions.SetText(inpt_Serial_Number, testData, "Input Serial Number");
                break;

        }
    },


    ValidateElement: function (txt, testData) {
        switch (txt) {
            case 'AccountAliasIssue':
                actions.VerifyElementPresent(txt_Account_Aliass_Issue, true, "Verify Account Alies Issue link is Present")
                break;
            case 'List_Button':
                actions.AssertText(btn_List, testData, "Validate Success message");
                break;
            case 'Back':
                actions.PauseExecution("3000");
                actions.VerifyElementPresent(btn_Back, true, 'Verify Back Button is Present');
                break;
            case 'Exit':
                actions.VerifyElementPresent(btn_Exit, true, 'Verify Exit is Present');
                break;
            case 'List':
                actions.VerifyElementPresent(btn_List, true, 'Verify List Button is Present');
                break;
            case 'Subinventory':
                actions.VerifyElementPresent(inpt_Subinventory, true, 'Verify Subinventory is Present');
                break;
            case 'ItemNumerText':
                actions.VerifyElementPresent(txt_ItemNumber, true, 'Verify ItemNumber Text is Present');
                break;
            case 'SubInventoryText':
                actions.VerifyElementPresent(txt_Subinventory, true, 'SubInventory Text is Present');
                break;
            case 'LacatorInput':
                actions.VerifyElementPresent(inpt_Locator, true, 'Locator InputBox is Present');
                break;
            case 'UOM':
                actions.VerifyElementPresent(inpt_UOM, true, 'UOM InputBox is Present');
                break;
            case 'QuantityText':
                actions.VerifyElementPresent(txt_Quantity, true, 'Quantity Text is Present');
                break;
            case 'ItemNumberInput':
                actions.VerifyElementPresent(inpt_Item_Number, true, 'ItemNumber input is Present');
                break;
            case 'QunatityInput':

                actions.VerifyElementPresent(inpt_Quantity, true, 'Quantity input is Present');
                break;

            case 'SerialNumberInput':
                actions.VerifyElementPresent(inpt_Serial_Number, true, 'Serial Number input is Present');
                break;
            case 'locatorText':
                actions.VerifyElementPresent(txt_Locator, true, 'Locator Text is Present');
                break;
            case 'Done':
                actions.VerifyElementPresent(btn_Done, true, 'Done Button is Present');
                break;
            case 'SubInventoryTransfer':
                actions.VerifyElementPresent(lnk_SubInventory_Transfer, true, "Verify SubInventoryTransfer link is Present")
                break;


        }
    },
    SelectButton: function (txt) {
        switch (txt) {
            case 'List':
                actions.Click(btn_List, 'Select List Button');
                break;
            case 'Receive_all':
                actions.Click(btn_Receive_All, 'Select Receive All Button');
                break;
            case 'Back':
                actions.Click(btn_Back, 'Select Back Button');
                break;
            case 'Exit':
                actions.Click(btn_Exit, 'Select Exit Button');
                break;
            case 'Done':
                actions.Click(btn_Done, 'Select Done Button');
                break;
        }
    },

    Validate_element: function (txt) {
        switch (txt) {
            case 'success':
                actions.AssertText(ele_Success_Message, "Success", "Validate Success message")
                break;
        }
    },
    getUnicSerialAndLotNumber: function (Lot_Ser_item) {
        var currentdate = new Date();
        var LotOrSerNumber = Lot_Ser_item
            + currentdate.getDate() + "-"
            + (currentdate.getMonth() + 1)
            + currentdate.getFullYear()
            + currentdate.getHours()
            + currentdate.getMinutes()
            + currentdate.getSeconds()
            + currentdate.getMilliseconds();

        return LotOrSerNumber;
    }

}