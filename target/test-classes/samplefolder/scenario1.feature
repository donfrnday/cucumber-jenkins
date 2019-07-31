Feature: Login functionality

Description: Registered user login to th application by entering valid username and password.
Example Mapping: John would like to access the online shopping page. He should be registered and then logged in to application.

Scenario: Login with valid combination
Given user opens newtours application on chrome browser
When user enters "mercury" in username and pasword field
And Click on signin Button
Then verify login result as success