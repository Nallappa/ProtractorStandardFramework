requireLibrary('Locator');

var txt_Lacator=locatorXpath("//td[contains(text(),'Locator')]");

module.exports = {


    ValidateElement: function (txt, testData) {
        switch (txt) {

            case 'LacatorText':
                actions.VerifyElementPresent(txt_Lacator, true, 'Lacator Text is Present');
                break;



        }



    },
    SelectOption: function (Option, log) {
        browser.sleep(5000);
        var var_PO = locatorXpath("//table[@id='lstScreen']//td[contains(text(),'" + Option + "')]");
        actions.Click(var_PO, log);
    }
}


