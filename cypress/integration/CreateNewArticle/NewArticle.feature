Feature: Create New Article & Publish


    Background:
        Given user clicks to New Post button

    @smoke
    Scenario Outline: create an article
        When user types "<articletitle>"  what is this article "<about>"   and enters "<write>" "<tag>"
        And user clicks publish article button
        Then user should be able to successfuly create a New Article and Publish "<articletitle>" 

        Examples:
            | articletitle          | about                         | write                   | tag         |
            | My Diet               | Junk Food                     | Healthy food            | food        |
            | Worst Time Ever       | Depression during the pandemy | Corona                  | vaccination |
            | The World was in Fire | Second World War              | The Netherland in II WW | war         |

          
