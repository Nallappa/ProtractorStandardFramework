requireLibrary('Locator');

var txt_Subinventory = locatorXpath("//td[contains(text(),'Subinventory')]");

module.exports = {


    ValidateElement: function (txt, testData) {
        switch (txt) {

            case 'SubInventoryText':
                actions.VerifyElementPresent(txt_Subinventory, true, 'SubInventory Text is Present');
                break;



        }



    },

    SelectOption: function (Option, log) {
        browser.sleep(5000);
        var var_PO = locatorXpath("//table[@id='lstScreen']//td[contains(text(),'" + Option + "')]");
        actions.Click(var_PO, log);
    }
}


