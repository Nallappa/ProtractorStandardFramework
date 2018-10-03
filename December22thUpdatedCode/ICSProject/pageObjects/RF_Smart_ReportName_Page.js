requireLibrary('Locator');

//Link Locators
var lnk_ExecuteReports = locatorXpath("//table[@id='lstScreen']//td[text()='Execute Reports']");
var lnk_Exit = locatorId("btnF3");
//Element Locators
var ele_Success_Message = locatorXpath("//article[@class='success mini']//h3");
var ele_back = locatorId("btnF4");

module.exports = {
    SelectLink: function (txt) {
        switch (txt) {
            case 'ExecuteReports':
                actions.Click(lnk_ExecuteReports, 'Select ExecuteReports link');
                break;
        }
    },
    SelectElement: function (txt) {
        switch (txt) {
            case 'back':
                actions.Click(ele_back, 'Select ExecuteReports link');
                break;
            case 'Exit':
                actions.Click(lnk_Exit,'Select Exit link');
                break;
                
                
        }
    },
       Validate_element: function (txt) {
        switch (txt) {
            case 'success':
            actions.AssertText(ele_Success_Message,"Success","Validate Success message")
                break;
        }
    },  
}