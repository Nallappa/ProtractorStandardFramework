requireLibrary('Locator');

//Element Locators
var ele_OracleLogo = locatorId('pt1:_UIScil1u');
var ele_Procurement = locatorXpath('//*[contains(@id,\'grp_groupNode_procurement::icon\')]');
var ele_WarehouseOperations = locatorXpath('//a[contains(@id,\'grp_groupNode_warehouse_operations\') and text()=\'Warehouse Operations\']');
var ele_Purchasing = locatorXpath('//a[contains(@id,\'procurement_purchasing\') and text()=\'Purchasing\']');
var ele_Receipt = locatorXpath('//a[contains(@id,\'warehouse_operations_receipts\') and text()=\'Receipts\']');

module.exports = {
        SelectPurchaseOrder: function () {

                actions.Click(ele_OracleLogo, 'Select oracleLogo');
                actions.Click(ele_Procurement, 'Select procurement');
                //actions.PauseExecution(3000);
                //browser.sleep(3000);
                actions.Click(ele_Purchasing, 'Select Purchasing');
        },
        SelectWarehouseOperations: function (txt) {
                actions.Click(ele_OracleLogo, 'Select oracleLogo');
                actions.Click(ele_WarehouseOperations, 'Select Warehouse Operations');

                switch (txt) {
                        case 'Receipt':
                                actions.Click(ele_Receipt, 'Select Receipt');
                                break;
                }

        }
}