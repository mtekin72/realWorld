Feature: Login Test Suite

    Valid and Invali Login Cases
Background:
Given user navigates to homepage


Scenario Outline: Login with valid Cridentials  
When user enters valid "<email>" and "<password>"
Then user should be able to successfuly login

Examples:
            | email              | password |
            | testuser@iptiq.com | test1234 |

        
Scenario Outline: Login with empty password  
When user enters invalid "<email>"
Then user should not be able to successfuly login

Examples:
            | email              | password |
            | testuser@iptiq.com | test1234 |


Scenario Outline: Login with invalid Cridentials  
When user enters invalid "<email>" and "<password>"
Then user should see an error message

Examples:
            | email              | password |
            | testuser@iptiq.com | test1234 |