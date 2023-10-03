# Meet app
This is a serverless, progressive web application built with React using the test-driven development technique. It displays a list of events, fetching them from the Google Calender API.
## Features & Senarios 
**Feature 1: Filter Events by City**
As a user,
I should be able to filter events by city,
So that I can see a list of events taking place in that city.
- Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.
    - Given: user hasn’t searched for any city
    - When: the user opens the app
    - Then: the user should see a list of upcoming events 
- Scenario 2: User should see a list of suggestions when they search for a city.
	- Given: the main page is open
	- When: user starts typing in the city textbox
	- Then: the user should receive a list of cities (suggestions) that match what they have typed
- Scenario 3: User can select a city from the suggested list
	- Given: user was typing “Berlin” in the city textbox AND the list of suggested cities is showing
	- When: the user selects a city (“Berlin, Germany”) from the list
	- Then: their city should be changed to that city (“Berlin, Germany”) AND the user should receive list of upcoming events in that city
**Feature 2: Show/Hide Event Details**
As a user,
I should be able to show/hide event details
So that I can see/hide the details of an event
- Scenario 1: An event element is collapsed by default. 
	- Given: the user is viewing the list of events
	- When: the user does not click on an event
	- Then: the user should not see event details
- Scenario 2: User can expand an event to see details.
	- Given: the user is viewing a list of events
	- When: the user selects an event 
	- Then: the details of said event should be displayed
- Scenario 3: User can collapse an event to hide details.
	- Given: the user is viewing the details of an event
	- When: the user clicks “hide details” of the event
	- Then: the details of the event should be hidden

**Feature 3: Specify Number of Events**
As a user,
I should be able to specify number of events
So that I can see a specific number of events at once
- Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
	- Given: the user hasn’t specified or filtered the number of events
	- When: the user is on the home page
	- Then: the default number of events should be shown 
- Scenario 2: User can change the number of events displayed.
	- Given: the user has specified or filtered the number of events
	- When: the user specifies or filter the number of events
	- Then: the number of events displayed should be updated according to what the user selected

**Feature 4: Use the App When Offline**
As a user, 
I should be able to use the app when offline
So that I can see data when I am offline
- Scenario 1: Show cached data when there’s no internet connection.
	- Given: the user has no internet connection
	- When: the user opens the app
	- Then: the user should still see the cached data in the app
- Scenario 2: Show error when user changes search settings (city, number of events).
	- Given: the user has no internet connection
	- When: the user changes the search settings
	- Then: the user should receive an error message

**Feature 5: Add an App Shortcut to the Home Screen**
As a user, 
I should be able to install the app as a shortcut on my device home screen
So that I can open the app directly on my device home screen 
- Scenario 1: User can install the meet app as a shortcut on their device home screen.
	- Given: the user wants to install the app 
	- When: the user chooses to install the app to their device home screen 
	- Then: a shortcut for the app should be created on the user’s device home screen 

**Feature 6: Display Charts Visualizing Event Details**
As a user, 
I should be able to display a chart visualizing event details
So that I can see a chart with the number of events in each city
- Scenario 1: Show a chart with the number of upcoming events in each city.
	- Given: the user is on the events page
	- When: the user click to see a chart of the upcoming events in each city
	- Then: the user should see a chart with the number of upcoming events in each city 