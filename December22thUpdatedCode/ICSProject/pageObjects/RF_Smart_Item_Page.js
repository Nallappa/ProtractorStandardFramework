requireLibrary('Locator');

var item = locatorXpath("//*[@id='lstScreen']/tbody/tr[2]/td[2]");
var inpt_Quantity=locatorId("txt");
var txt_Menu_Item=locatorXpath("//h1");

var txt_Item=locatorXpath("//td[contains(text(),'Item')]");
var txt_Description=locatorXpath("//td[contains(text(),'Description')]");
var txt_Qty=locatorXpath("//td[contains(text(),'Qty')]");

var txt_UOM=locatorXpath("//td[contains(text(),'UOM')]");
//var txt_ReceiptNumber=locatorId("l_lbl3Receipt Number_DT1");
var txt_ReceiptNumber=locatorXpath("//*[contains(text(),'Receipt Number_')]");

module.exports = {
        
        SelectItem: function(txt,testData)
        {
            switch (txt) {

                case 'Item':
                actions.Click(item,'Select Item');
                actions.VerifyElementPresent(inpt_Quantity,true);

            }
        },

        VerifyItemsElement:function(txt,testData)
        {
             switch (txt) {

          case  'MenuItem':
                 actions.VerifyElementPresent(txt_Menu_Item,true,'Verify Menu Item Text');
                 break;

           case  'Item':
                  actions.VerifyElementPresent(txt_Item,true,'Verify Item Text');
                  break;
           case   'Description':
                  actions.VerifyElementPresent(txt_Description,true,'Verify Description Text');
                  break;
           case   'QTY':
                  actions.VerifyElementPresent(txt_Qty,true,'Verify Quantity Text');
                  break;
           case    'UOM':
                   actions.VerifyElementPresent(txt_UOM,true,'Verify UON Text');
                   break; 


            }
        }
}