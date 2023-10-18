import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user has not specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        given('the user has not specified or filtered the number of events', () => {

        });

        when('the user is on the home page', () => {

        });

        then('the default number of events should be shown', () => {

        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        given('the user has specified or filtered the number of events', () => {

        });

        when('the user specifies or filter the number of events', () => {

        });

        then('the number of events displayed should be updated according to what the user selected', () => {

        });
    });
});