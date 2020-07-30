$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TestEnv.feature");
formatter.feature({
  "line": 1,
  "name": "Test Environment",
  "description": "",
  "id": "test-environment",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7370604400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Register Account for new User",
  "description": "",
  "id": "test-environment;register-account-for-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@registerTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on TEST Environment page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Register",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User fills Register form with below information",
  "rows": [
    {
      "cells": [
        "firstName",
        "LastName",
        "E-mail",
        "Telephone",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "Jack",
        "MA",
        "jacky.Ma@alibaba.com",
        "2025058899",
        "alibaba"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User select \u0027yes\u0027 for Subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click privacy and policy button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see message  \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefiniton.user_is_on_TEST_Environment_page()"
});
formatter.result({
  "duration": 3123755500,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 89292500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_click_on_Register()"
});
formatter.result({
  "duration": 2956452100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_fills_Register_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 1249376900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 13
    }
  ],
  "location": "RegisterStepDefinition.user_select_yes_for_Subscribe(String)"
});
formatter.result({
  "duration": 214086900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_click_privacy_and_policy_button()"
});
formatter.result({
  "duration": 485057500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_click_Continue_button()"
});
formatter.result({
  "duration": 1431273400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 26
    }
  ],
  "location": "RegisterStepDefinition.user_should_see_message_Your_Account_Has_Been_Created(String)"
});
formatter.result({
  "duration": 5405032700,
  "status": "passed"
});
formatter.after({
  "duration": 951447400,
  "status": "passed"
});
});