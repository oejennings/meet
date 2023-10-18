Feature: Specify Number of Events
    Scenario: When user has not specified a number, 32 events are shown by default.
        Given the user has not specified or filtered the number of events
        When the user is on the home page
        Then the default number of events should be shown 
    Scenario: User can change the number of events displayed.
        Given the user has specified or filtered the number of events
        When the user specifies or filter the number of events
        Then the number of events displayed should be updated according to what the user selected