requireLibrary('Locator');

var btn_Back = locatorId("btnF4");
var inpt_OrganizationCode = locatorXpath('//input[@placeholder=\'Organization Code\']');
var btn_Exit = locatorId("btnF3");
var txt_Cycle_Count = locatorXpath('//h1');
var btn_List = locatorId("btnF1");
var btn_Done = locatorId("btnF2");
var txt_Name = locatorXpath('//*[@id=\'nav_bar\']//h1')
var inpt_Subinventory = locatorXpath('//input[@placeholder=\'Subinventory\']');
var inpt_Locator = locatorXpath('//input[@placeholder=\'Locator\']');
var inpt_ItemNumber = locatorXpath('//input[@placeholder=\'Item Number\']');
var inpt_Quantity = locatorXpath('//input[@placeholder=\'Quantity\']');
var inpt_UOM = locatorXpath('//input[@placeholder=\'UOM\']');
var ele_Success_Message = locatorXpath("//article[@class='success mini']//h3");
var txt_Sub_Locator = locatorXpath('//label[contains(text(),\'Sub/Locator\')]')
var txt_Item_Number = locatorXpath('//label[contains(text(),\'Item Number\')]');
var inpt_Lot_Number = locatorXpath('//input[@placeholder=\'Lot Number\']');
var inpt_SerialNumber = locatorXpath('//input[@placeholder=\'Serial Number\']');



module.exports = {


    TextBox: function (txt, testData) {
        switch (txt) {

            case 'OrganizationCode':
                actions.SetText(inpt_OrganizationCode, testData, "Enter OrganizationCode");
                break;
            case 'Selectenter':
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'ItemNumberInput':
                actions.SetText(inpt_ItemNumber, testData, "Enter Item Number");
                break;
            case 'QunatityInput':
                actions.SetText(inpt_ItemNumber, testData, "Enter Qunatity ");
                break;
            case 'LotNumberInput':
                actions.SetText(inpt_Lot_Number, testData, "Enter Lot Number");
                break;
            case 'SerialNumberInput':
                actions.SetText(inpt_SerialNumber, testData, "Enter Serial Number");
                break;



        }
    },
    ValidateElement: function (txt, testData) {
        switch (txt) {
            case 'BackButton':
                actions.VerifyElementPresent(btn_Back, true, "Verify Back Button is Present");
                break;
            case 'ExitButton':
                actions.VerifyElementPresent(btn_Exit, true, "Verify Exit Button is Present");
                break;
            case 'OrganizationCode':
                actions.VerifyElementPresent(inpt_OrganizationCode, true, "Verify OrganizationCode input is Present");
                break;
            case 'CycleCount':
                actions.VerifyElementPresent(txt_Cycle_Count, true, "Verify Cycle Count Text is Present");
                break;

            case 'ListButton':
                actions.VerifyElementPresent(btn_List, true, "Verify List Button is Present");
                break;
            case 'Name':
                actions.VerifyElementPresent(txt_Name, true, "Verify Name Text is Present");
                break;
            case 'Subinventory':
                actions.VerifyElementPresent(inpt_Subinventory, true, "Verify Subinventory input is Present");
                break;
            case 'LocatorInput':
                actions.VerifyElementPresent(inpt_Locator, true, "Verify Locator input is Present");
                break;
            case 'ItemNumberInput':
                actions.VerifyElementPresent(inpt_ItemNumber, true, "Verify Item Number input is Present");
                break;
            case 'UOMInput':
                actions.VerifyElementPresent(inpt_UOM, true, "Verify UOM input is Present");
                break;
            case 'SubinventoryLocatorText':
                actions.VerifyElementPresent(txt_Sub_Locator, true, "Verify Subinventory and Locator Text is Present");
                break;
            case 'ItemNumberText':
                actions.VerifyElementPresent(txt_Item_Number, true, "Verify Item Number Text is Present");
                break;
            case 'success':
                actions.AssertText(ele_Success_Message, "Success", "Validate Success message")
                break;

            case 'SerialNumberInput':
                actions.VerifyElementPresent(inpt_SerialNumber, true, "Verify Serial Input is Present");
                break;
            case 'LotNumberInput':
                actions.VerifyElementPresent(inpt_Lot_Number, true, "Verify Lot Item Input is Present");
                break;





        }
    },
    SelectButton: function (txt) {
        switch (txt) {
            case 'List':
                actions.Click(btn_List, 'Select List Button');
                break;
            case 'Done':
                actions.Click(btn_Done, 'Select Done Button');
                break;


        }
    },
    SelectOption: function (Option, log) {
        browser.sleep(5000);
        var var_PO = locatorXpath("//table[@id='lstScreen']//td[contains(text(),'" + Option + "')]");
        actions.Click(var_PO, log);
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


