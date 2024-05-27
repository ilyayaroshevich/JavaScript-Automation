Feature: Kinopoisk main page

  @1
  Scenario: As a User, I want to move to login page

    Given I am on the main page
    When I click on the login button
    Then I should see the login page


#   @2
#   Scenario Outline: As a User, I want to find a specific film in the Search field
#     Given I am on the main page
#     When I click on the Search field
#     And I enter the <film_name>
#     Then I see dropdown with relevant films
#     And I click on the first film in the list
#     But I should see the page about selected film

#     Examples:
#       | film_name    |
#       | The Simpsons |
#       | Green Book   |
#       | I Am Legend  |
# @3
# Scenario: As a User, I want to move to online-cinema page
#   Given I am on the main page
#   When I click on the Online-cinema button
#   Then I should see Online-cinema page
# @4
# Scenario: As a User, I want to move to Media page
#   Given I am on the main page
#   When I click on the Media button
#   Then I should see the Media page
# @5
# Scenario:  As a user I want to move to specific series page via 250 top series 
#   Given I am on the main page
#   When I click on the 'Series' button
#   Then I should see the page with list of series categories
#   And I click on the '250 top series' button
#   But I should see the page with 250 top series
#   And I click on any serial
#   But I should see the page with selected series
