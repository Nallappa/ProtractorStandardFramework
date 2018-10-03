requireLibrary('Locator');

//Link Locators
var lnk_Receiving = locatorId("Receiving_Default");
var lnk_Putaway = locatorId("PutAwayReceipt_Default");
var lnk_RunReports = locatorId("RunReports_Default");
var lnk_Inspect = locatorId("InspectReceipt_Default");
var lnk_AccountAliasIssue= locatorId("AccountAliasIssue_Default");
var lnk_SubInventory_Transfer = locatorId("SubinventoryTransfer_Default");

module.exports = {
    SelectLink: function (txt) {
        switch (txt) {
            case 'Receiving':
                actions.Click(lnk_Receiving, 'Select Receiving link');
                break;
            case 'Putaway':
                actions.Click(lnk_Putaway, 'Select Putaway link');
                break;
            case 'RunReports':
                actions.Click(lnk_RunReports, 'Select RunReports link');
                break;
            case 'InspectReceipt':
                actions.Click(lnk_Inspect, 'Select RunReports link');
                break;
            case 'AccountAliasIssue':
                actions.Click(lnk_AccountAliasIssue, 'Select AccountAliasIssue link');
                break;
            case 'SubInventoryTransfer':
                actions.Click(lnk_SubInventory_Transfer, 'Select SubInventoryTransfer link');
                break;
        }
    },
        
}