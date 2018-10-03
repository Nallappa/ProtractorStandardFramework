/*global document, window, alert, console, require, browser,jasmine,
 describe, it, beforeEach, forEach, by, expect, driver, element, protractor, $element, $elements,
 requireUtils, elements, elementang*/
/**
 * Action library
 */
'use strict';
var fs = require("fs"),
    Base64 = require("Base64"),
    reporter = requireLibrary('reporter'),
    SelectWrapper = function (selector) {
        this.webElement = element(selector);
    };

beforeEach(function () {
    jasmine.addMatchers({
        toReport: function () {
            return {
                compare: function (actual, expected, msg) {
                    var result = { pass: actual == expected };
                    result.message = msg;
                    return result;
                }
            }
        }
    });
});

SelectWrapper.prototype.getOptions = function () {
    return this.webElement.all(by.tagName('option'));
};
SelectWrapper.prototype.getSelectedOptions = function () {
    return this.webElement.all(by.css('option[selected="selected"]'));
};
SelectWrapper.prototype.selectByValue = function (value) {
    return this.webElement.all(by.css('option[value="' + value + '"]')).click();
};
SelectWrapper.prototype.selectByPartialText = function (text) {
    return this.webElement.all(by.cssContainingText('option', text)).click();
};
SelectWrapper.prototype.selectByText = function (text) {
    return this.webElement.all(by.xpath('option[.="' + text + '"]')).click();
};

module.exports = {

    Get: function (url) {
        browser.ignoreSynchronization = true;
        browser.get(url).then(function () {
            browser.navigate().refresh().then(function () {
                Long_Wait();
                reporter.appendTest('Open URL', 'Successfully Opened URL: ' + url, "PASS");
            }, function (err) {
                reporter.appendTest('Browser Refresh', 'Performing Browser Refresh', "FAIL");
            }, function (err) {
                reporter.appendTest('Open URL', 'Opening Application URL', "FAIL");
            });
        });
    },

    SetText: function (locator, value, logname) {
        myfunction(locator);
        element(locator).clear().then(function () {
            element(locator).click().sendKeys(value).then(function () {
                reporter.appendTest('EnteringValue', 'Entered ' + value + ' in the Input Field ' + logname, "PASS");
            }, function (err) {
                reporter.appendTest('EnteringValue', 'Entered ' + value + ' in the Input Field ' + logname, "FAIL");
                expect(false).toReport(true, "Unable to perform SetText operation on '" + logname + "' because of " + err.message);
            });
        }, function (err) {
            console.log("error*****************************");
            console.log(err);
            reporter.appendTest('ClearingValue', 'Clearing value in the Input Field: ' + logname + 'Error: ' + err.message, "FAIL");
            expect(false).toReport(true, "Unable to perform SetText operation on '" + logname + "' because of " + err.message);
        });
        PauseExe(1000);
    },

    GetText: function (locator, logname, callback) {
        myfunction(locator);
        element(locator).getText().then(function (text) {
            reporter.appendTest('Get Text', 'Performed Get Text from' + logname + ' Text is: ' + text, "PASS");
             return text;
            //callback(text);
        }, function (err) {
            reporter.appendTest('Get Text', 'Performing Get Text: ' + locator, "FAIL");
            expect(false).toReport(true, "Unable to perform GetText operation because of " + err.message);
        });
        PauseExe(1000);
    },
    GetElementText: function (locator, logname) {
        myfunction(locator);
        return element(locator).getText();
    },

    GetAttribute: function (locator, attributeName, logname, callback) {
        element(locator).getAttribute(attributeName).then(function (value) {
            reporter.appendTest('Get Attribute', 'Performed Get Attribute from' + logname + 'on Attribute:' + attributeName + ' and Attribute Value is: ' + value, "PASS");
            // return value;
            callback(value);
        }, function (err) {
            reporter.appendTest('Get Attribute', 'Performing Get Attribute: ' + locator + 'on Attribute:' + attributeName, "FAIL");
            expect(false).toReport(true, "Unable to perform GetAttribute operation because of " + err.message);
        });
    },

    Click: function (locator, logname) {
        //demo(locator, logname);
        myfunction(locator);
        element(locator).click().then(function () {
            reporter.appendTest('PerformedClick', 'Performed Clicking of ' + logname, "PASS");
        }, function (err) {
            reporter.appendTest('PerformedClick', 'Performed Clicking of ' + logname, "FAIL");
            expect(false).toReport(true, "Unable to perform Click operation on '" + logname + "' because of " + err.message);
        });
        PauseExe(1000);
    },

    selectByPartialText: function (locator, value, logname) {
        var mySelect = new SelectWrapper(locator);
        mySelect.selectByPartialText(value).then(function () {
            reporter.appendTest('Selecting DropDown Value', 'Selecting ' + value + ' from: ' + logname, "PASS");
        }, function (err) {
            reporter.appendTest('Selecting DropDown Value', 'Selecting ' + value + ' from: ' + logname, "FAIL");
            expect(false).toReport(true, "Unable to perform selectByPartialText operation on '" + logname + "' because of " + err.message);
        });

    },

    AssertText: function (locator, actualText, logName) {
         myfunction(locator);
        element(locator).getText().then(function (text) {
            actualText = '' + actualText;
            text = '' + text;
            if (actualText.toUpperCase().trim() === text.toUpperCase().trim()) {
                reporter.appendTest('Expected Text in  \'' + logName.trim() + '\' is \'' + actualText.trim() + '\'', 'Displayed Text in  \'' + logName.trim() + '\' is \'' + text.trim() + '\'', "PASS");
            } else {
                reporter.appendTest('Expected Text in  \'' + logName.trim() + '\' is \'' + actualText.trim() + '\'', 'Displayed Text in  \'' + logName.trim() + '\' is \'' + text.trim() + '\'', "FAIL");
            }
        }, function (err) {
            reporter.appendTest('Expected Text is ' + actualText.trim(), 'Unable to Get Text from ' + locator, "FAIL");
            //logger.Log(err.stack);
        });
    },

  /*  VerifyElementPresentText:function(el,ExpectedResult,logName)
    {
    var text=expect(el.getText()).to.eventually.contain(ExpectedResult);
    if(text==true)
    {
    reporter.appendTest('Element Present', 'Verify Element Present: ' + logName, "PASS");
    }

},*/



    VerifyElementPresent: function (locator, ExpectedResult,logName) {
        element(locator).isPresent().then(function (status) {
            if (status === ExpectedResult) {
                reporter.appendTest('Element Present', 'Verify Element Present: ' + logName, "PASS");
            }
            else {
                reporter.appendTest('Element Present', 'Verifying Element Present: ' + logName, "FAIL");
            }
        });
        expect(element(locator).isPresent()).toReport(ExpectedResult, "Verifying Element Present FAILED for: " + logName.toString());
    },
    moveMouseOnMenuItem: function (mainMenuLocator, menuName) {
        try {
            console.log()
            var menuItem = browser.element.all(mainMenuLocator).filter(function (items) {
                return items.getText().then(function (text) {
                    return text.indexOf(menuName) === 0;
                })
            }, function (err) {
                reporter.appendTest('Open Main Menu', 'Opening Main Menu: ' + menuName, "FAIL");
            }).first();
            browser.actions().mouseMove(menuItem).perform().then(function () {
                reporter.appendTest('Open Main Menu', 'Successfully Opened Main Menu: ' + menuName, "PASS");
            }, function (err) {
                reporter.appendTest('Open Main Menu', 'Opening Main Menu: ' + menuName, "FAIL");
            });
        } catch (err) {
            reporter.appendTest('Open Main Menu', 'Opening Main Menu: ' + menuName, "FAIL");
        }
        ;

    },
    VerifyTextFieldEnabled: function (locator, logname, expectedStatus) {
        element(locator).sendKeys("Testing").then(function () {
            if (expectedStatus === true) {
                reporter.appendTest('VerifyTextFieldEnabled', 'Verifying if Textfield Enabled status is: ' + expectedStatus, "PASS");
            }
            else {
                reporter.appendTest('VerifyTextFieldEnabled', 'Verifying if Textfield Enabled status is: ' + expectedStatus, "FAIL");
            }
            expect(expectedStatus).toReport(true, "Verifying if Textfield Enabled status is: " + expectedStatus);
        }, function (err) {
            if (expectedStatus === true) {
                reporter.appendTest('VerifyTextFieldEnabled', 'Verifying if Textfield Enabled status is: ' + expectedStatus, "FAIL");
            } else {
                reporter.appendTest('VerifyTextFieldEnabled', 'Verifying if Textfield Enabled status is: ' + expectedStatus, "PASS");
            }
            expect(expectedStatus).toReport(false, "Verifying if Textfield Enabled status is:  " + expectedStatus);
        });
    },
    waitForElementNotDisplayed: function (locator) {
        PauseExe(2000);
         var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(locator), 20000));
    },
    waitForElementExist: function (locator) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(element(locator), 20000));
        if (element(locator).isPresent())
            return true;
        else
            return false
    },
    PauseExecution: function (millisec) {
       browser.sleep(millisec);
    }
    
};


function myfunction(locator) {
    //PauseExe(3000);
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(element(locator), 10000));
}

function GettextFromApp(locator) {
    myfunction(locator);
    return element(locator).getText();
}
function PauseExe(millisec){
    browser.sleep(millisec);
}




