Feature: Booking.com Hotels
  This feature is for testing hotel booking in Booking.com.

  Scenario Outline: As a user, I can book a hotel at <destination>
  This scenario tests a simple hotel booking in Booking.com.

    Given I am on the home page
    And I have closed Genius sign in modal dialog
    When I select <destination> as the destination
    And I select <checkIn> days from today as my check-in date with a stay of <stay> days
    And I submit the search
    Then I can see destination <destination> on the results page title

    Examples:
      | destination | checkIn | stay |
      | Madrid      | 14      | 7    |
      | Barcelona   | 21      | 5    |
