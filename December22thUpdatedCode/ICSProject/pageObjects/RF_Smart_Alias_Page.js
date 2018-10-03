requireLibrary('Locator');

var item = locatorXpath("//*[@id='lstScreen']/tbody/tr[2]/td[2]");
var txt_Return = locatorXpath("//td[contains(text(),'RETURN')]");
var txt_Issue = locatorXpath("//td[contains(text(),'ISSUE')]");
var txt_InvAdj = locatorXpath("//td[contains(text(),'INV ADJ')]");
var inpt_Item_Number = locatorXpath("//*[@placeholder='Item Number']")

module.exports = {



    ValidateElement: function (txt, testData) {
        switch (txt) {

            case 'Return':
                actions.VerifyElementPresent(txt_Return, true, 'Verify RETURN Text is Present');
                break;
            case 'Issue':
                actions.VerifyElementPresent(txt_Issue, true, 'Verify ISSUE Text is Present');
                break;
            case 'InvAdj':
                actions.VerifyElementPresent(txt_InvAdj, true, 'Verify INVADJ Text is Present');
                break;
            case 'ItemsScreen':
                actions.VerifyElementPresent(inpt_Item_Number, true, 'Verify Item Number Screen is Present');
                break;



        }
    },

    SelectOption: function (txt, Option, log) {
        switch (txt) {
            case 'RETURN':
                browser.sleep(5000);
                var var_PO = locatorXpath("//table[@id='lstScreen']//td[contains(text(),'" + Option + "')]");
                actions.Click(var_PO, log);
                break;
            case 'ISSUE':
                browser.sleep(5000);
                var var_PO = locatorXpath("//table[@id='lstScreen']//td[contains(text(),'" + Option + "')]");
                actions.Click(var_PO, log);
                break;
            case 'INVADJ':
                browser.sleep(5000);
                var var_PO = locatorXpath("//table[@id='lstScreen']//td[contains(text(),'" + Option + "')]");
                actions.Click(var_PO, log);
                break;

        }
    }
}