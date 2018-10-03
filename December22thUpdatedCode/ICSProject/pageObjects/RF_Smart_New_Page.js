requireLibrary('Locator');


var txt_Item_Number = locatorXpath('//label[contains(text(),\'Item Number\')]');
var txt_Sub_Locator = locatorXpath('//label[contains(text(),\'Sub/Locator\')]')
var btn_Exit = locatorId("btnF3");
var txt_Cycle_Count = locatorXpath('//h1');
var inpt_ItemNumber = locatorXpath('//input[@placeholder=\'Item Number\']');
var inpt_Quantity = locatorXpath('//input[@placeholder=\'Quantity\']');


module.exports = {


    TextBox: function (txt, testData) {
        switch (txt) {


            case 'QunatityInput':
                actions.SetText(inpt_Quantity, testData, "Enter Item Number");
                break;

        }
    },
    ValidateElement: function (txt, testData) {
        switch (txt) {

            case 'ExitButton':
                actions.VerifyElementPresent(btn_Exit, true, "Verify Exit Button is Present");
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

            case 'ItemNumberInput':
                actions.VerifyElementPresent(inpt_ItemNumber, true, "Verify Item Number input is Present");
                break;
            case 'ItemNumberText':
                actions.VerifyElementPresent(txt_Item_Number, true, "Verify Item Number Text is Present");
                break;
            case 'SubinventoryLocatorText':
                actions.VerifyElementPresent(txt_Sub_Locator, true, "Verify Subinventory and Locator Text is Present");
                break;









        }
    }
}