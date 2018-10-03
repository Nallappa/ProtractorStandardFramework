requireLibrary('Locator');

//Link Locators
var lnk_Manufacturing = locatorId("Manufacturing");
var lnk_WarehouseManager = locatorXpath("//div[@id='mainplaceholder']//a[text()='Warehouse Manager']");
var txt_RFSmartMenu=locatorXpath("//h1");
var lnk_RunReports= locatorId("RunReports_Default");
var lnk_Home=locatorXpath("//*[@id='rfs_home_link']");
var lnk_Receiving=locatorId("Receiving_Default");
var lnk_Exit=locatorId("btnF3");
var lnk_AccountAlies_Issue=locatorId("AccountAliasIssue_Default");
var lnk_Cycle_Count_Manual=locatorId("CycleCountManual_Default");


module.exports = {
    SelectLink: function (txt) {
        switch (txt) {
            case 'Manufacturing':
                actions.Click(lnk_Manufacturing, 'Select Manufacturing');
                break;
            case 'WarehouseManager':
                actions.Click(lnk_WarehouseManager, 'Select WarehouseManager');
                break;
            case 'Home':
                actions.Click(lnk_Home, 'Select Home');
                break;
        }
    },
    ValidateElement: function (txt, testData) {
        switch (txt) {
            case 'AccountAliasIssue':
                actions.VerifyElementPresent(lnk_AccountAlies_Issue,true,"Verify Account Alies Issue link is Present")
                break;
            case 'List_Button':
                actions.AssertText(btn_List, testData, "Validate Success message");
                break;
            case 'CycleCountManual':
              actions.VerifyElementPresent(lnk_Cycle_Count_Manual,true,"Verify Cycle Count Manaul link is Present")
              break;
        }
    },
  VerifyElemet: function(element_Path,testdata)
   {
       actions.AssertText(element_Path,testdata,'element present in this page');
   },
    VerifyRFSmartAndSubMenu: function () {
        //actions.VerifyElementPresent(txt_RFSmartMenu,true);
        actions.AssertText(txt_RFSmartMenu, 'Menu', 'RF Smart Menu');
        actions.Click(lnk_WarehouseManager, 'Select WarehouseManager');
    },
    VerifyMenuPageElemet: function (txt) {
        switch (txt) {

            case 'MenuExit':
                actions.AssertText(txt_RFSmartMenu, 'Menu', 'RF Smart Menu');
                actions.AssertText(lnk_Exit, 'Exit', 'RF Smart Exit');
                break;
            case 'Receiving':
                actions.AssertText(lnk_Receiving, 'Receiving', 'RF Smart Receiving');
                break;
            case 'Warehouse Manager':
                actions.AssertText(lnk_WarehouseManager, 'Warehouse Manager', 'WarehouseManager');
                break;
                
        }

    },
    SelectSubMenu: function (txt) {
        switch (txt) {
            case 'Run Reports':
                actions.Click(lnk_RunReports, 'Select RunReports');
                break;
            case 'Receiving':
                actions.Click(lnk_Receiving, 'Select Receiving');
                break;
            case 'CycleCountManual':
                actions.Click(lnk_Cycle_Count_Manual, 'Select Cycle Count Manual');
                break;


        }


    }

}