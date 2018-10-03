requireLibrary('Locator');

//TextBox Locators
var txt_Organization_Code = locatorId("txt");

//Button Locators
var btn_List = locatorId("btnF1");
var btn_Done = locatorId("btnF2");
var btn_Exit = locatorId("btnF3");
var btn_Receive_All = locatorId("btnF6");
var tbl_ListItems = locatorId("lstScreen");
var btn_Back = locatorId("btnF4");


var ele_Success_Message = locatorXpath("//article[@class='success mini']//h3");
var inpt_OrganizationCode = locatorId("txt");
var txt_Receiving = locatorXpath("//*[@id='nav_bar']//h1");
var lnk_Exit = locatorId("btnF3");
var txt_ErrorMesseage = locatorXpath("//h3");
var inpt_Element = locatorId("txt");
var btn_Done1 = locatorId("btnF5");
var txt_OrderNumber = locatorXpath("//label[contains(text(),'Order Number')]");
var val_OrderNumber = locatorXpath("//article[1]/dl/dd");
var txt_Locator = locatorXpath("//*[@id='lstScreen']/tbody/tr[2]/td[2]");
var txt_Quantity = locatorXpath("//label[contains(text(),'Quantity')]");
var inpt_UOM = locatorXpath("//input[@placeholder='UOM']");
var inpt_Subinventory = locatorXpath("//input[@placeholder='Subinventory']");
var txt_QAStore = locatorXpath("//dd[contains(text(),'QA Stores')]");
var inpt_Locator = locatorXpath("//input[@placeholder='Locator']");
var inpt_Quality_Labels = locatorXpath("//input[@placeholder='Quantity of labels']");
var txt_Item_Number = locatorXpath("//label[contains(text(),'Item Number')]");
var inpt_Lot_Number = locatorXpath("//input[@placeholder='Lot Number']");
var txt_Line_Quantity = locatorXpath("//label[contains(text(),'Line Quantity')]");
var inpt_Serial_Numnber = locatorXpath("//input[@placeholder='Serial Number']");
var txt_Scanned_Serials = locatorXpath("//label[contains(text(),'Scanned Serials')]");
var serItemNumber;
var lotItem;

//Element Locators
var ele_Success_Message = locatorXpath("//article[@class='success mini']//h3");


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
    //To select particular item
    Select_Item: function (Item) {
        SelectOption(Item, "Select:" + Item + ":Item");
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
    },

    //To Select the  SubInventary

    Select_Sub_Inventary: function (SubInventary) {
        SelectOption(SubInventary, "Select Sub Inventary:" + SubInventary);

    },
    //To Select the  Locator
    Select_Locator: function (Locator) {

        SelectOption(Locator, "Select Locator:" + Locator);
    },
    Set_SerialNumber() {
        var serItem = getUnicSerialAndLotNumber("SERITEM");
        actions.SetText(txt_Organization_Code, serItem, "Enter Serial Number");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    },
    //To Enter Unique Lot number
    Set_LotNumber() {
        var lotItem = getUnicSerialAndLotNumber("LOTITEM");
        actions.SetText(txt_Organization_Code, lotItem, "Enter Lot Number");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
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
    VerifyRegElement: function (txt, testData, errMesseageData) {

        switch (txt) {

            case 'SelectRegItem':
                SelectOption(testData, 'Select Serial Item');
                actions.VerifyElementPresent(txt_Line_Quantity, true, 'Verify Line Quantity Text');
                break;
            case 'RegPuchaseOrder':
                actions.SetText(inpt_Element, testData, "Regular Purchase Order");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'RegPuchaseOrderEmpty':
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, testData, 'Required Text');
                break;
            case 'RegPuchaseOrder@#$%^':
                actions.SetText(inpt_Element, testData, "RegPuchaseOrder As @#$%^");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Invalid Record Text');
                break;
            case 'ValidRegPuchaseOrder':
                actions.SetText(inpt_Element, testData, "Valid RegPuchaseOrder");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(btn_List, true, 'Verify List Button');
                actions.VerifyElementPresent(btn_Done1, true, 'Verify Done Button');
                actions.VerifyElementPresent(lnk_Exit, true, 'Verify Exit Link');
                actions.VerifyElementPresent(txt_OrderNumber, true, 'Verify Order Number');
                break;
            case 'Done':
                actions.Click(btn_Done1, 'Done button');
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Error Messeage No lines to commit.');
                break;
            case 'List':
                actions.Click(btn_List, 'Click List button');
                break;
            case 'Quantity':
                actions.VerifyElementPresent(inpt_Element, true);
                break;
            case 'QuantityEmpty':
                element(inpt_Element).clear();
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, testData, 'Error Messege Required');
                break;
            case 'Quantity!@#$%^':
                actions.SetText(inpt_Element, testData, "Quantity as !@#$% ");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Invalid Input Type');
                break;

            case 'Quantity0':
                actions.SetText(inpt_Element, testData, "Quantity as 0");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Error Message Cannot be zero');
                break;
            case 'ValidQuantity':

                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'ValidUOM':
                actions.SetText(inpt_UOM, testData, "Valid UOM");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(btn_List, true, 'Verify List Button');
                break;
            case 'UOMEmpty':
                element(inpt_UOM).clear();
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, testData, 'Verify Error Message Required');
                break;
            case 'UOMEach':
                element(inpt_UOM).clear();
                actions.SetText(inpt_UOM, testData, "UOM as Each");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Verify Error Message Invalid');
                break;

            case 'SubinventoryEmpty':
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, testData, 'Verify Error Message Required');
                break;
            case 'SubinventoryInvalid':
                actions.SetText(inpt_Subinventory, testData, "Subinventory as Invalid");
                browser.sleep(5000);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Verify Error Message Invalid Record');
                break;
            case 'ValidSubinventory':
                actions.SetText(inpt_Subinventory, testData, "Valid Subinventory");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(txt_QAStore, true, 'Verify QAStore Text');
                break;
            case 'LocatorEmty':
                actions.SetText(inpt_Locator, protractor.Key.ENTER, "Click Enter Button With Locator as Empty");
                browser.sleep(5000);
                actions.AssertText(txt_ErrorMesseage, errMesseageData, ' Verify Error Message Required');
                break;
            case 'LocatorInvalid':
                actions.SetText(inpt_Locator, testData, "Locator as invalid");
                browser.sleep(5000);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Verify Error Message Invalid Record');
                break;
            case 'QuantityofLabels!@#$%^':
                actions.SetText(inpt_Quality_Labels, testData, 'Quantity Labels As !@#$%^');
                browser.sleep(5000);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Verify Error Message Invalid Record');
                break;
            case 'QuantityofLabels0':
                actions.SetText(inpt_Quality_Labels, testData, 'Quantity Labels As 0');
                browser.sleep(5000);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(btn_List, true, 'Verify List Button');
                break;
            case 'ValidLocator':
                actions.SetText(inpt_Locator, testData, 'Provide Valid Locator');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'QuantityZERO':
                actions.SetText(input_Element, testData, "Quantity as ZERO");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Error Message Cannot be zero');
                break;

            case 'ValidLocator':
                actions.SetText(inpt_Locator, testData, 'Provide Valid Locator');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'InputST':
                actions.SetText(input_Element, testData, "Input as ST");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;

        }
    },
    VerifyLotItem: function (txt, testData, errMesseageData) {
        switch (txt) {
            case 'SelectLotItem':
                actions.Click(btn_List, 'Click List button');
                SelectOption(testData, 'Select Lot Item');
                actions.VerifyElementPresent(txt_Item_Number, true, 'Verify Item Number Text');
                break;
            case 'LotItemNumberEmpty':
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, 'Verify Error Message Required');
                break;
            case 'LotNumber':
                lotItem = getUnicSerialAndLotNumber("LOTITEM");
                actions.SetText(inpt_Lot_Number, lotItem, 'Provide valid Lot Number');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(txt_Line_Quantity, true, 'Verify Line Quantity Text');
                break;
            case 'ValidQuantity':
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(txt_Quantity, true, 'Verify  Quantity Text');
                break;
            case 'ValidUOM':
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(txt_Item_Number, true, 'Verify Item Number Text');
                break;
            case 'ValidSubinventory':
                actions.SetText(inpt_Subinventory, testData, "Valid Subinventory");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(txt_QAStore, true, 'Verify QAStore Text');
                break;
            case 'ValidLocator':
                actions.SetText(inpt_Locator, testData, 'Provide Valid Locator');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'QuantityofLabels0':
                actions.SetText(inpt_Quality_Labels, testData, 'Quantity Labels As 0');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(btn_List, true, 'Verify List Button');
                break;



        }


    },
    VerifySerialItem: function (txt, testData, errMesseageData) {
        switch (txt) {

            case 'SelectSerialItem':
                actions.Click(btn_List, 'Click List button');
                SelectOption(testData, 'Select Serial Item');
                actions.VerifyElementPresent(txt_Line_Quantity, true, 'Verify Line Quantity Text');
                break;
            case 'SerialNumberEmpty':
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, ' Verify Error Message Required');
                break;
            case 'ValidSerialNumber':
                serItemNumber = getUnicSerialAndLotNumber("SERITEM");
                actions.SetText(inpt_Serial_Numnber, serItemNumber, 'Provide Valid Serial Number');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(txt_Scanned_Serials, true, 'Verify Scanned Serials Text');
                break;
            case 'SameSerialNumber':
                actions.SetText(inpt_Serial_Numnber, serItemNumber, 'Provide Valid Serial Number');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.AssertText(txt_ErrorMesseage, errMesseageData, ' Verify Error Message Already Scanned');
                break;
            case 'Done':
                actions.Click(btn_Done, 'Done button');
                actions.VerifyElementPresent(btn_List, true, 'Verify List Button');
                break;
            case 'ValidSubinventory':
                actions.SetText(inpt_Subinventory, testData, "Valid Subinventory");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(txt_QAStore, true, 'Verify QAStore Text');
                break;
            case 'ValidLocator':
                actions.SetText(inpt_Locator, testData, 'Provide Valid Locator');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'QuantityofLabels0':
                actions.SetText(inpt_Quality_Labels, testData, 'Quantity Labels As 0');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(btn_List, true, 'Verify List Button');
                break;

        }
    },
    VerifyLotSerialItem: function (txt, testData, errMesseageData) {
        switch (txt) {

            case 'SelectLotSerialItem':
                actions.Click(btn_List, 'Click List button');
                SelectOption(testData, 'Select Lot Serial Item');
                actions.VerifyElementPresent(txt_Item_Number, true, 'Verify Item Number Text');
                break;
            case 'LotNumber':
                lotItem = getUnicSerialAndLotNumber("LOTITEM");
                actions.SetText(inpt_Lot_Number, lotItem, 'Provide valid Lot Number');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(txt_Line_Quantity, true, 'Verify Line Quantity Text');
                break;
            case 'ValidSerialNumber':
                serItemNumber = getUnicSerialAndLotNumber("SERITEM");
                actions.SetText(inpt_Serial_Numnber, serItemNumber, 'Provide Valid Serial Number');
                //browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(txt_Scanned_Serials, true, 'Verify Scanned Serials Text');
                break;
            case 'Done':
                actions.Click(btn_Done, 'Done button');
                actions.VerifyElementPresent(btn_List, true, 'Verify List Button');
                break;
            case 'ValidSubinventory':
                actions.SetText(inpt_Subinventory, testData, "Valid Subinventory");
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(txt_QAStore, true, 'Verify QAStore Text');
                break;
            case 'ValidLocator':
                actions.SetText(inpt_Locator, testData, 'Provide Valid Locator');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                break;
            case 'QuantityofLabels0':
                actions.SetText(inpt_Quality_Labels, testData, 'Quantity Labels As 0');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                actions.VerifyElementPresent(btn_List, true, 'Verify List Button');
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
        }
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
    SelectParticularPO: function (order_Item) {
        //var rows = tbl_ListItems.element(by.tagName('tr'));
        var tabledata = element.all(by.id("lstScreen"));

        //Get Rows 

        var rows = tabledata.all(by.tagName("tr"));

        for (var i = 1; i < rows.count; i++) {
            var columns = rows[i].all(by.tagName("tr"));

            for (var j = 1; j < columns.count; j++) {
                var data = columns[j].getText();
            }
        }
        //Get cells values

        //var cells = rows.all(by.tagName("td"));

        reporter.appendTest('VerifyTextFieldEnabled', 'Verifying if Textfield Enabled status is: ' + cells.get(0).getText(), "PASS");

    },

    //Receive Direct Routing Items
    Receive_SerialItem_With_Direcct_or_Standard: function (Ser_Item, SubInventary, Locator) {
        SelectOption(Ser_Item, "Select: " + Ser_Item + ":Item");

        var serItem = getUnicSerialAndLotNumber("SERITEM");
        //Enter Serial Number
        actions.SetText(txt_Organization_Code, serItem, "Enter Serial Number");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        //Select Sub Inventary
        actions.Click(btn_List, 'Select List Button');
        SelectOption(SubInventary, "Select Sub Inventary:" + SubInventary);

        //Select Locator
        actions.Click(btn_List, 'Select List Button');
        SelectOption(Locator, "Select Locator:" + Locator);
    },
    Receive_RegularItem_With_Direcct_or_Standard: function (Reg_Item, Qty, Uom, SubInventary, Locator) {
        SelectOption(Reg_Item, "Select:" + Reg_Item + ":Item");

        actions.SetText(txt_Organization_Code, Qty, "Enter Order Quantity:" + Qty);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        //Select Sub Inventary
        actions.Click(btn_List, 'Select List Button');
        SelectOption(SubInventary, "Select Sub Inventary:" + SubInventary);

        //Select Locator
        actions.Click(btn_List, 'Select List Button');
        SelectOption(Locator, "Select Locator:" + Locator);

    },
    Receive_LotItem_With_Direcct_or_Standard: function (Lot_Item, Qty, Uom, SubInventary, Locator) {
        SelectOption(Lot_Item, "Select PO Item:" + Lot_Item);

        var lotItem = getUnicSerialAndLotNumber("LOTITEM");
        //Enter Lot Number
        actions.SetText(txt_Organization_Code, lotItem, "Enter Lot Number");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        actions.SetText(txt_Organization_Code, Qty, "Enter Order Quantity:" + Qty);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        actions.SetText(txt_Organization_Code, Uom, "Enter UOM:" + Uom);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        //Select Sub Inventary
        actions.Click(btn_List, 'Select List Button');
        SelectOption(SubInventary, "Select Sub Inventary:" + SubInventary);

        //Select Locator
        actions.Click(btn_List, 'Select List Button');
        SelectOption(Locator, "Select Locator:" + Locator);
    },
    Receive_LotSerialItem_With_Direcct_or_Standard: function (Lot_Ser_Item, SubInventary, Locator) {
        SelectOption(Lot_Ser_Item, "Select " + Lot_Ser_Item + " Item");

        //Enter Lot Number
        var lotItem = getUnicSerialAndLotNumber("LOTITEM");
        actions.SetText(txt_Organization_Code, lotItem, "Enter Lot Number");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        //Enter Serial Number
        var serItem = getUnicSerialAndLotNumber("SERITEM");
        actions.SetText(txt_Organization_Code, serItem, "Enter Serial Number");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        //Select Sub Inventary
        actions.Click(btn_List, 'Select List Button');
        SelectOption(SubInventary, "Select Sub Inventary:" + SubInventary);

        //Select Locator
        actions.Click(btn_List, 'Select List Button');
        SelectOption(Locator, "Select Locator:" + Locator);

        //actions.SetText(txt_Organization_Code, Qty_Of_Lables, "Enter Quantity of Labels:" + Qty_Of_Lables);
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
    },

    //Receive Inspection Routing Items
    Receive_RegularItem_With_Inspection: function (Reg_Item, Qty, Uom, SubInventary) {
        SelectOption(Reg_Item, "Select PO Item" + Reg_Item);

        actions.SetText(txt_Organization_Code, Qty, "Enter Order Quantity");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        actions.SetText(txt_Organization_Code, Uom, "Enter UOM");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        //Select Sub Inventary
        actions.Click(btn_List, 'Select List Button');
        SelectOption(SubInventary, "Select Sub Inventary");
    },
    Receive_Item_With_Inspection: function (_Item, Qty, SubInventary) {
        SelectOption(_Item, "Select PO Item" + _Item);

        //added
        actions.SetText(txt_Organization_Code, Qty, "Enter Order Quantity");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        //Select Sub Inventary
        actions.Click(btn_List, 'Select List Button');
        SelectOption(SubInventary, "Select Sub Inventary");

        //Enter Quantity of Lables
        //actions.SetText(txt_Organization_Code, Qty_Lables, "Enter Quantity of Labels");
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
    },
    //Receive Inspection Routing Items
    Receive_RegularItem_With_Standard: function (Reg_Item, Qty, Uom) {
        SelectOption(Reg_Item, "Select PO Item");

        actions.SetText(txt_Organization_Code, Qty, "Enter Order Quantity");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        actions.SetText(txt_Organization_Code, Uom, "Enter UOM");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    },
    Receive_Item_With_Standard: function (_Item, Qty) {
        SelectOption(_Item, "Select PO Item");

        //Added
        actions.SetText(txt_Organization_Code, Qty, "Enter Order Quantity");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }
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
