/*
code repository:
https://github.com/adegard/P5-js-Pop-up-gsheet-GAS-
@adegard
*/



// Use this code for Google Docs, Forms, or new Sheets.
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('Dialog')
      .addItem('Open', 'openDialog')
      .addToUi();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('demo')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setWidth(810)
      .setHeight(500);      
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'P5 js in dialog pop up');
}

//https://developers.google.com/apps-script/reference/base/ui#showModalDialog(Object,String)