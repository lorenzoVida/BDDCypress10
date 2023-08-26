Feature: login user background

Background: user in login form
Given enter the login form2
  Scenario: Login with bad user
    When type user and password an login2
    | user                 | pass |
    | Adminstrador         | admin123   |
    Then show message user or password wrong2

    Scenario: Login with bad password
    When type user and password an login2
    | user                 | pass |
    | Admin        | admin123!   |
    Then show message user or password wrong2
    Scenario: Login successful
    When type user and password an login2
    | user                 | pass |
    | Admin         | admin123   |
    Then show principal dashboard2