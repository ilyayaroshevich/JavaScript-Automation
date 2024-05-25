# @All
# Feature: Kinopoisk

# @DisplayingLoginPage
#   Scenario: As a user, I want to see login page

#     Given I am on the main page
#     When I click on <username> and <password>
#     Then I should see a flash message saying <message>

#     Examples:
#       | username | password             | message                        |
#       | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#       | foobar   | barfoo               | Your username is invalid!      |

@All
Feature: Kinopoisk main page

@1
Scenario: As a User, I want to move to login page

    Given I am on the main page
    When I click on the Login button
    Then I should see the login page
@2
Scenario Outline: As a User, I want to find a specific film in the Search field

    Given I am on the main page
    When I click on the Search field
    And  I enter the <film_name>
    Then I see dropdown with relevant films
    And I click on the first film in the list
    Then I should see the page about selected film

    Examples:
      | film_name      |
      | Simpsons       |
      | Зеленая книгаt |
      | Я – легенда    |
@3
Scenario: As a User, I want to move to online-cinema page

  Given I am on the main page
  When I click on the Онлайн-кинотеатр button
  Then I should see Online-cinema page
@4
Scenario: As a User, I want to move to Media page and read any article

  Given I am on the main page
  When I click on the Media button
  Then I should see the Media page
  When I click on any article
  Then I should the topick of selected article
@5
Scenario:  As a user I want to move to specific serial page via 250 top serials 
  Given I am on the main page
  When I click on the 'Serials' button
  Then I should see the page with list of serials categories
  When I click on the '250 top serials' button
  Then I should see the page with 250 top serials
  When I click on any serial
  Then I should see the page with selected serial