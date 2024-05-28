Feature: Kinopoisk main page
Background:
  Given I am on the main page
@1
Scenario: As a User, I want to move to login page
  When I click on the loginButton button on the header
  Then I should make sure there is the Login field, Login button, and Email button
@2
Scenario Outline: As a User, I want to find a specific film in the Search field
  When I enter <film_name> in the search field
  Then I see dropdown with relevant films
  When I click on the first film in the list
  Then I should see the <film_name> page
  Examples:
    | film_name    |
    | The Simpsons |
    | Green Book   |
@3
Scenario: As a User, I want to move to online-cinema page
  When I click on the OnlineCinema button on the header
  Then I should be redirected to the online-cinema page
@4
Scenario: As a User, I want to move to Media page
  When I click on the Media button
  Then I should be redirected to the Media page and the All_Materials button should be visible and styled in black color
@5
Scenario:  As a user I want to move to specific series page via 250 top series 
  When I click on the Series button
  Then Then I should see a page with series categories, including a visible Series button styled in gray
  When I click on the 250 top series button
  Then I should be redirected to the page displaying the top 250 series, and the text Top_250_Best_Series should be visible
  When I click on the Breaking Bad serial
  Then I should be redirected to the page for the selected series Breaking_Bad with its details block displayed
