Feature: login user
  Scenario: Login with bad user
    Given enter the login form
    When type user and password an login
    | user                 | pass |
    | Adminstrador         | admin123   |
    Then show message user or password wrong

    Scenario: Login with bad password
    Given enter the login form
    When type user and password an login
    | user                 | pass |
    | Admin        | admin123!   |
    Then show message user or password wrong
    Scenario: Login successful
    Given enter the login form
    When type user and password an login
    | user                 | pass |
    | Admin         | admin123   |
    Then show principal dashboard