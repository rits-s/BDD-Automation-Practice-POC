$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Update personal information(First Name) in my account.feature");
formatter.feature({
  "line": 1,
  "name": "Update personal Information",
  "description": "",
  "id": "update-personal-information",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Update personal information(First Name) in my account",
  "description": "",
  "id": "update-personal-information;update-personal-information(first-name)-in-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username \"automationpractice25@gmail.com\" and password \"test@1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on My Personal Information button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter \"newtestuserrrr\" in firstname input box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters \"test@1234\" in Current password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"test@1234\" in New Password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"test@1234\" in Confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Save",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate message \"Your personal information has been successfully updated.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefition.Open_browser()"
});
formatter.result({
  "duration": 4096578300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefition.User_click_on_Sign_In_link()"
});
formatter.result({
  "duration": 10088677600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Sign in\u0027)]\"}\n  (Session info: chrome\u003d89.0.4389.128)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-CG5M29G\u0027, ip: \u0027192.168.20.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.128, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Rits\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54963}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 51c3a978e59bb10ecdf5a55419353677\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Sign in\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat com.automationpractice.pages.HomePage.clickSignIn(HomePage.java:24)\r\n\tat com.automationpractice.stepdefinition.StepDefition.User_click_on_Sign_In_link(StepDefition.java:47)\r\n\tat ✽.When User click on Sign In link(Update personal information(First Name) in my account.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "automationpractice25@gmail.com",
      "offset": 21
    },
    {
      "val": "test@1234",
      "offset": 67
    }
  ],
  "location": "StepDefition.User_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefition.Click_on_SignIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefition.User_clicks_on_My_Personal_Information_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "newtestuserrrr",
      "offset": 12
    }
  ],
  "location": "StepDefition.User_enter_in_firstname_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@1234",
      "offset": 13
    }
  ],
  "location": "StepDefition.User_enters_in_Current_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@1234",
      "offset": 13
    }
  ],
  "location": "StepDefition.User_enters_in_New_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@1234",
      "offset": 13
    }
  ],
  "location": "StepDefition.User_enters_in_Confirmation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefition.Click_on_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your personal information has been successfully updated.",
      "offset": 18
    }
  ],
  "location": "StepDefition.Validate_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1117971000,
  "status": "passed"
});
});