requireLibrary('Locator');
var txt_Menu = locatorXpath("//h1");
var btn_List = locatorId("btnF1");
var txt_Organization_Code = locatorId("txt");
//TextBox Locators
var txt_Accepted_Quantity = locatorId("txt");
var txt_Exit = locatorId("btnF3");
var input_Element = locatorId("txt");
var txt_ErrorMesseage = locatorXpath("//h3");
var inpt_OrganizationCode = locatorId("txt");

module.exports = {
    TextBox: function (testData) {
    

      actions.SetText(input_Element, testData,'Data Enterd Sucessfully');
                 
    },
  EnterQunatity:function(testData)
  {  
         actions.SetText(input_Element, testData, "Enter Order Quantity:" + testData);
  },
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
                actions.SetText(txt_Organization_Code, testData, "Enter Order Quantity");
                break;
            case 'EnterAcceptedQuantity':
                actions.SetText(txt_Organization_Code, testData, "EnterAcceptedQuantity Quantity");
            case 'EnterQtyOfLables':
                actions.SetText(txt_Organization_Code, testData, "Enter Quantity of Labels");
                break;
            case 'EnterReceiptNumber':
                actions.SetText(txt_Organization_Code, testData, "Enter Receipt Number");
                break;
        }
    },
    Select_Item: function (Item) {
        SelectOption(Item, "Select:" + Item + ":Item");
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
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
        }
    },
    VerifyElemet: function (txt, testdata) {
        switch (txt) {
            case 'Menu':
                actions.AssertText(txt_Menu, testdata, 'element present in this page');
                break;
            case 'Exit':
                actions.AssertText(txt_Exit, testdata, 'element present in this page');
                break;

            case 'ReceiptEmpty':
                actions.SetText(input_Element, protractor.Key.ENTER, "Click Enter Button With Item NUmber  is Empty");
                actions.AssertText(txt_ErrorMesseage, testdata, 'Required Text');
                break;
            case 'ReceiptEmpty':
                actions.SetText(input_Element, protractor.Key.ENTER, "Click Enter Button With Item NUmber  is Empty");
                actions.AssertText(txt_ErrorMesseage, testdata, 'Required Text');
                break;
            case 'ReceiptWith@#$%^':
                actions.SetText(input_Element, protractor.Key.ENTER, "Click Enter Button With Item NUmber  is Empty");
                actions.AssertText(txt_ErrorMesseage, testdata, 'Required Text');
                break;
            case 'QA-SER-ITEM-PO01':
                actions.SetText(input_Element, testdata, "Element Present with QA-SER-ITEM-PO01");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, "Invalid Item", 'Verify Error Message Invalid Item');
                break;
            case 'AcceptedQuantityWithOne':
                actions.AssertText(txt_ErrorMesseage, testdata, 'Required Text');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, testdata, 'Verify Error Message Invalid Item');
                break;
            case 'AcceptedQuantityWith100':
                actions.AssertText(txt_ErrorMesseage, testdata, 'Required Text');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, testdata, 'Verify Error Message Invalid Item');
                break;

        }

    },
    VerifyElement: function (txt, testData, errMesseageData) {

        switch (txt) {

            case 'ReceivingAndExit':
                actions.AssertText(txt_Receiving, testData, 'Receiving Text');
                actions.AssertText(lnk_Exit, testData, 'Exit Link');
                break;
            case 'OrganizationCodeEmpty':

                actions.SetText(inpt_OrganizationCode, protractor.Key.ENTER, "Click Enter Button With OrganizationCode as Empty");
                actions.AssertText(txt_ErrorMesseage, testData, 'Required Text');
                break;
            case 'OrganizationCodeABC':
                actions.SetText(inpt_OrganizationCode, testData, "Organization Code As ABC");
                actions.SetText(inpt_OrganizationCode, protractor.Key.ENTER, "Click Enter Button");
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Verify Error Messeage Invalid Record Text');
                break;
            case 'OrganizationCodeJAX3':
                actions.SetText(inpt_OrganizationCode, testData, "Organization Code As JAX3");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'InputdataIsEmpty':

                actions.SetText(input_Element, protractor.Key.ENTER, "Click Enter Button With Item NUmber  is Empty");
                actions.AssertText(txt_ErrorMesseage, testData, 'Required');
                break;
            



        }
    },

  ValidateElement:function(testData,errMessageData)
    {
             actions.SetText(input_Element, testData, "ElementValidateSucessfully");
             browser.actions().sendKeys(protractor.Key.ENTER).perform();
              actions.AssertText(txt_ErrorMesseage, errMessageData, testData);
    },
    
 VerifyRegElement: function (txt, testData, errMesseageData) {
 
switch (txt) {

           case 'Quantity':
                actions.SetText(input_Element, testData, "Quantity as 0");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Error Message Cannot be zero');
                break;
            case 'OrganizationCodeWithABC':
                actions.SetText(input_Element, testData, "OrganizationCodeWithABC");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Invalid Record Text');
               

}

},


}

function SelectOption(Option, log) {
    browser.sleep(5000);
    var var_PO = locatorXpath("//table[@id='lstScreen']//td[contains(text(),'" + Option + "')]");
    actions.Click(var_PO, log);
}
