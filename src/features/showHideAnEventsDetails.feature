Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default. 
        Given the user is viewing the list of events
        When the user does not click on an event
        Then the user should not see event details
    Scenario: User can expand an event to see details.
        Given the user is viewing a list of events
        When the user selects an event 
        Then the details of said event should be displayed
    Scenario: User can collapse an event to hide details.
        Given the user is viewing the details of an event
        When the user clicks “hide details” of the event
        Then the details of the event should be hidden