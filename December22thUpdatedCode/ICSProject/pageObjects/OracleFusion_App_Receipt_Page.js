requireLibrary('Locator');

//TextBox Locators
var txt_Organization = locatorXpath('//input[contains(@id,\'orgCodeId::content\')]');
var txt_PurchaseOrder = locatorXpath('//input[contains(@id,\'value10::content\')]');

//Button Locators
var btn_ok = locatorXpath('//button[contains(@id,\'d1::ok\')]');
var btn_FindTaskIcon = locatorXpath('//img[contains(@id,\'FndTaskList::icon\')]');
var btn_Search = locatorXpath('//button[contains(@id,\'delQry::search\')]');
var btn_Search_Inspect = locatorXpath('//button[contains(@id,\'insQry::search\')]');

//Link Locators
var lnk_PutawayReceipt = locatorLinkText('Put Away Receipts');
var lnk_InspectReceipt = locatorLinkText('Inspect Receipts');

//Element Locators
var ele_ReceiptNumber = locatorXpath('//a[contains(@id,\'put:0:rcptnm\')]');
var ele_ReceiptNumber_Inspect = locatorXpath('//a[contains(@id,\'commandLink1\')]');

module.exports = {
    TextBox: function (txt, testData) {
        switch (txt) {
            case 'Organization':
                actions.SetText(txt_Organization, testData, "Enter OrganizationCode");
                break;
            case 'PurchaseOrder':
                actions.SetText(txt_PurchaseOrder, testData, "Enter PO Number");
                break;
        }
    },
    SelectButton: function (txt) {
        switch (txt) {
            case 'OK':
                actions.Click(btn_ok, 'Select List Button');
                break;
        }
    },

    GetReceiptNumber: function (PONumber) {
        actions.PauseExecution(2000);
        actions.Click(btn_FindTaskIcon, 'Select Find Task Icon');
        actions.Click(lnk_PutawayReceipt, 'Select Putaway Receipt');
        actions.SetText(txt_PurchaseOrder, PONumber, "Enter PO Number");
        actions.Click(btn_Search, 'Select Search Button');

        //Get Receipt Number
        actions.GetText(ele_ReceiptNumber, "Get Receipt Number");
        return actions.GetElementText(ele_ReceiptNumber, "Get Receipt Number");

    },
    GetInspectReceiptNumber: function (PONumber) {
        actions.PauseExecution(2000);
        actions.Click(btn_FindTaskIcon, 'Select Find Task Icon');
        actions.Click(lnk_InspectReceipt, 'Select Inspect Receipt');
        actions.SetText(txt_PurchaseOrder, PONumber, "Enter PO Number");
        actions.Click(btn_Search_Inspect, 'Select Search Button');

        //Get Receipt Number
        actions.GetText(ele_ReceiptNumber_Inspect, "Get Receipt Number");
        return actions.GetElementText(ele_ReceiptNumber_Inspect, "Get Receipt Number");

    }
}