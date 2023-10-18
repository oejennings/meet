import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the user is viewing the list of events', () => {

        });

        when('the user does not click on an event', () => {

        });

        then('the user should not see event details', () => {

        });
    });
    
    test('User can expand an event to see details.', ({ given, when, then }) => {
        given('the user is viewing a list of events', () => {

        });

        when('the user selects an event', () => {

        });

        then('the details of said event should be displayed', () => {

        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        given('the user is viewing the details of an event', () => {

        });

        when('the user clicks “hide details” of the event', () => {

        });

        then('the details of the event should be hidden', () => {

        });
    });
});
