requireLibrary('Locator');

//Element Locators
var ele_CreateOrderPlus = locatorXpath("(//*[contains(@id, ':_ATp:create::icon')])[1]");
var ele_AutoSuggestion_Container = locatorXpath("//*[contains(@class,'AFAutoSuggestItemsContainer')]");
var ele_Select_Item = locatorXpath("//*[contains(@id,'Item::_afrautosuggestpopup')]//li[1]");
var ele_supplierAutoSuggestions = locatorXpath("//li[contains(@class,'AFAutoSuggestItem')]");
var ele_OrderCreate = locatorXpath("//button[contains(text(),'Create')]");
var ele_OrderNumber = locatorXpath("//*[contains(@id,'panelLabelAndMessage14')]/td[2]");
var ele_AddRow = locatorXpath("//*[contains(@id,':_ATp:create::icon')]");
var ele_Schedules = locatorXpath("//*[contains(@id,'showDetailItem3::disAcr')]");
var ele_Lines = locatorXpath("//*[contains(@id,'lineDetailItemId::disAcr')]");
var ele_AutoSuggession = locatorXpath("//div[contains(@class,'AFAutoSuggestBusyStyle')]");
var ele_Date_Logo = locatorXpath("//*[contains(@id,'NeedByDate::glyph')]");

//Textbox Locators
var txt_SupplierInput = locatorXpath("//input[contains(@id,'Supplier::content')]");
var txt_item = locatorXpath("//*[contains(@id,'Item::content')]");
var txt_OrderQty = locatorXpath("//*[contains(@id,'Quantity::content')]");
var txt_OrderPrice = locatorXpath("//*[contains(@id,'UnitPrice::content')]");
var txt_Requested_Delivery_Date = locatorXpath("//*[contains(@id,'NeedByDate::content')]");

//Button Locators
var btn_Save = locatorXpath("//span[text()='Save']");
var btn_Submit = locatorXpath("//button[text()='Sub']");


module.exports = {
        SelectButton: function (button) {
                switch (button) {
                        case 'save':
                                actions.Click(btn_Save, 'Select Save');
                                break;
                        case 'submit':
                                actions.Click(btn_Submit, 'Select Submit');
                                break;
                }
        },
        CreatePO: function (supplier) {
                actions.Click(ele_CreateOrderPlus, 'createOrderPlus');
                actions.PauseExecution(3000);
                actions.SetText(txt_SupplierInput, supplier, "Supplier Input Field");
                actions.waitForElementNotDisplayed(ele_AutoSuggession);
                actions.Click(ele_supplierAutoSuggestions, 'supplierAutoSuggestions');
                actions.PauseExecution(3000);
                actions.Click(ele_OrderCreate, 'OrderCreate');
                actions.GetText(ele_OrderNumber,"Get Order Number");
                return actions.GetElementText(ele_OrderNumber,"Get orderNumber");
        },
        Assign_Additional_Info_To_PO: function (itemType, order_Qty, order_Price) {
                actions.Click(ele_AddRow, 'AddRow');
                actions.PauseExecution("5000");
                actions.waitForElementExist(ele_Date_Logo);
                actions.SetText(txt_item, itemType, "Supplier Item name");
                actions.waitForElementNotDisplayed(ele_AutoSuggession);
                actions.waitForElementExist(ele_AutoSuggestion_Container);
                actions.PauseExecution(3000);
                actions.Click(ele_Select_Item, "Select item");
                 actions.PauseExecution("4000");
                actions.SetText(txt_OrderQty, order_Qty, "Enter Order Quantity");
                actions.SetText(txt_OrderPrice, order_Price, "Enter Order Price");

                var _date=GetDate();
                actions.SetText(txt_Requested_Delivery_Date, _date, "Enter Date:"+_date);
        },
         Assign_Routing_Info_To_PO: function (itemType, receiptRuting) {
                actions.Click(ele_Schedules, 'Select Schedules');
                var ele_Item = locatorXpath("//*[contains(text(),'"+itemType+"')]");
                actions.Click(ele_Item, 'Select Item');
                actions.PauseExecution(3000);
                var drdwn_ReceiptRouting = locatorXpath("//*[contains(@id,'RcvRoutingId::content')]//option[text()='"+receiptRuting+"']");
                actions.Click(drdwn_ReceiptRouting, 'Select Receipt Type'+itemType+"With........"+receiptRuting);
                actions.PauseExecution(3000);
        }
}

function GetDate(addDays) {
        addDays=3;
        var currentdate = new Date();
        var datetime = (currentdate.getMonth()+1)
                + "/" + (currentdate.getDate()+addDays)
                + "/" + currentdate.getFullYear();
        return datetime;
}

