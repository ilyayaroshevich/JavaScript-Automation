@All

Feature: Kinopoisk main page
Background:
  Given I am on the main page
@1
Scenario: As a User, I want to move to login page
  When I click on the loginButton button on the header
  Then I should validate that login form displaying correctly
@2
Scenario Outline: As a User, I want to find a specific film in the Search field
  When I enter <film_name> in the search field
  Then I see dropdown with relevant films
  When I click on the firstFilm button on the header
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
  When I click on the media button on the main
  Then I should be redirected to the Media page
  And  All_Materials button should be visible 
  And  All_Materials button styled in black
@5
Scenario:  As a user I want to move to specific series page via 250 top series 
  When I click on the series button on the main
  Then I should see a page with series categories
  And  Series button is visible
  And  Series button is styled in gray
  When I click on the top250Series button on the lists
  Then I should be redirected to the top 250 series page
  And  The text Top 250 Best Series is correct
  When I click on the breakingBadSeries button on the series
  Then I should be redirected to the Breaking Bad page
  And  Details block is displayed
