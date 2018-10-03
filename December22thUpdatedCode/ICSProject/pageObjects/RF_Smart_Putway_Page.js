requireLibrary('Locator');

//Link Locators
var lnk_Manufacturing = locatorId("Manufacturing");
var lnk_WarehouseManager = locatorXpath("//div[@id='mainplaceholder']//a[text()='Warehouse Manager']");
var txt_RFSmartMenu = locatorXpath("//h1");
var lnk_RunReports = locatorId("RunReports_Default");
var lnk_Home = locatorXpath("//*[@id='rfs_home_link']");
var lnk_Receiving = locatorId("Receiving_Default");
var lnk_Exit = locatorId("btnF3");
var txt_element = locatorXpath("//h1");
var backBtn = locatorId("btnF4");
var lnk_Exit = locatorId("btnF3");
var btn_List = locatorId("btnF1");
var txt_Organization_Code = locatorId("txt");
var input_Element = locatorId("txt");
var txt_ErrorMesseage = locatorXpath("//h3");
var btn_Back = locatorId("btnF4");
var ele_Success_Message = locatorXpath("//article[@class='success mini']//h3");
var btn_Exit = locatorId("btnF3");


module.exports = {

    Set_SerialNumber() {
        var serItem = getUnicSerialAndLotNumber("SERITEM");
        actions.SetText(txt_Organization_Code, serItem, "Enter Serial Number");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        return serItem;
        
    },
    //To Enter Unique Lot number
    Set_LotNumber() {
        var lotItem = getUnicSerialAndLotNumber("LOTITEM");
        actions.SetText(txt_Organization_Code, lotItem, "Enter Lot Number");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        return lotItem;
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
    VerifyElement: function (txt, testData, errMesseageData) {

        switch (txt) {

            case 'InputdataIsEmpty':
                actions.SetText(input_Element, protractor.Key.ENTER, "Click Enter Button With Item NUmber  is Empty");
                actions.AssertText(txt_ErrorMesseage, testData, 'Required');
                break;
        }
    },
    Select_Item: function (Item) {
        SelectOption(Item, "Select:" + Item + ":Item");
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
    },

    Set_UOM: function (Item) {
        actions.SetText(txt_Organization_Code, Item, "Enter UOM:" + Item);
    },
    Set_Quality: function (Item) {
        actions.SetText(txt_Organization_Code, Item, "Enter UOM:" + Item);
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
            case 'EnterQtyOfLables':
                actions.SetText(txt_Organization_Code, testData, "Enter Quantity of Labels");
                break;
            case 'EnterReceiptNumber':
                actions.SetText(txt_Organization_Code, testData, "Enter Receipt Number");
                break;
        }
    },



    VerifyElemet: function (element_Path, testdata) {
        actions.AssertText(element_Path, testdata, 'element present in this page');
    },
    VerifyRFSmartAndSubMenu: function () {
        //actions.VerifyElementPresent(txt_RFSmartMenu,true);
        actions.AssertText(txt_RFSmartMenu, 'Menu', 'RF Smart Menu');
        actions.Click(lnk_WarehouseManager, 'Select WarehouseManager');
    },
    VerifyMenuPageElemet: function (txt) {
        switch (txt) {

            case 'Menu':
                actions.AssertText(txt_RFSmartMenu, 'Menu', 'RF Smart Menu');

                break;
            case 'Exit':
                actions.AssertText(lnk_Exit, 'Exit', 'RF Smart Exit');
                break;
            case 'Putaway':
                actions.AssertText(txt_element, 'Putaway', 'RF Smart Exit');
                break;
            case 'BackBtn':
                actions.VerifyElementPresent(backBtn, true, "Back button is present");
                break;
            case 'List':
                actions.AssertText(btn_List, 'List', 'element present in this page');

        }

    },
    VerifyRegElement: function (txt, testData, errMesseageData) {

        switch (txt) {


            case 'List':
                actions.Click(btn_List, 'Click List button');
                break;
            case 'Quantity':
                actions.VerifyElementPresent(input_Element, true);
                break;

            case 'Quantity0':
                actions.SetText(input_Element, testData, "Quantity as 0");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Error Message Cannot be zero');
                break;
            case 'ValidQuantity':

                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'ValidUOM':
                actions.SetText(input_Element, testData, "Valid UOM");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(btn_List, true, 'Verify List Button');
                break;
            case 'UOMEmpty':
                element(input_Element).clear();
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, testData, 'Verify Error Message Required');
                break;
            case 'UOMEach':
                element(input_Element).clear();
                actions.SetText(input_Element, testData, "UOM as Each");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Verify Error Message Invalid');
                break;

            case 'QuantityZERO':
                actions.SetText(input_Element, testData, "Quantity as ZERO");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Error Message Cannot be zero');
                break;


            case 'InputST':
                actions.SetText(input_Element, testData, "Input as ST");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
        }
    },
    Select_Sub_Inventary: function (SubInventary) {
        SelectOption(SubInventary, "Select Sub Inventary:" + SubInventary);

    },
    Select_Locator: function (Locator) {

        SelectOption(Locator, "Select Locator:" + Locator);
    },
    ValidateElement: function (txt, testData) {
        switch (txt) {
            case 'success_message':
                actions.AssertText(ele_Success_Message, testData, "Validate Success message");
                break;
            case 'List_Button':
                actions.AssertText(btn_List, testData, "Validate Success message");
                break;
        }
    },
}
function SelectOption(Option, log) {
    browser.sleep(5000);
    var var_PO = locatorXpath("//table[@id='lstScreen']//td[contains(text(),'" + Option + "')]");
    actions.Click(var_PO, log);
}
function getUnicSerialAndLotNumber(Lot_Ser_item) {
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
function getUnicSerialAndLotNumberr(Lot_Ser_item) {
    var currentdate = new Date();
    var LotOrSerNumber = Lot_Ser_item
        + currentdate.getDate() + "-"
        + (currentdate.getMonth() + 1)
        + currentdate.getFullYear()
        + currentdate.getHours()
        + currentdate.getMinutes();

    return LotOrSerNumber;
}