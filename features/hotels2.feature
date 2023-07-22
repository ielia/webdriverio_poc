Feature: Booking.com Hotels 2
  This feature is for testing hotel booking in Booking.com.

  Scenario: As a user, I can book a hotel
  This scenario tests a simple hotel booking in Booking.com.

    Given I am on the home page
    And I have closed Genius sign in modal dialog
    When I select Ushuaia as the destination
    And I select 14 days from today as my check-in date with a stay of 3 days
    And I submit the search
    Then I can see destination Ushuaia on the results page title

  Scenario: As a user, I can book a hotel
  This scenario tests a simple hotel booking in Booking.com.

    Given I am on the home page
    And I have closed Genius sign in modal dialog
    When I select Mar del Plata as the destination
    And I select 14 days from today as my check-in date with a stay of 3 days
    And I submit the search
    Then I can see destination Mar del Plata on the results page title
