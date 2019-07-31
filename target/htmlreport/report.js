$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/samplefolder/scenario2.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "Description: Registered user login to th application by entering valid username and password.\nExample Mapping: John would like to access the online shopping page. He should be registered and then logged in to application.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid combination",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens newtours application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Sam2Class.user_opens_newtours_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"mercury\" in username and pasword field",
  "keyword": "When "
});
formatter.match({
  "location": "Sam2Class.user_enters_in_username_and_pasword_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Signin Button",
  "keyword": "And "
});
formatter.match({
  "location": "Sam2Class.click_on_Signin_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify login result as success",
  "keyword": "Then "
});
formatter.match({
  "location": "Sam2Class.verify_login_result_as_success()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid combination",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens newtours application on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Sam2Class.user_opens_newtours_application_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"ac123\" in username and pasword field",
  "keyword": "When "
});
formatter.match({
  "location": "Sam2Class.user_enters_in_username_and_pasword_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Signin Button",
  "keyword": "And "
});
formatter.match({
  "location": "Sam2Class.click_on_Signin_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify login result as fail",
  "keyword": "Then "
});
formatter.match({
  "location": "Sam2Class.verify_login_result_as_fail()"
});
formatter.result({
  "status": "passed"
});
});