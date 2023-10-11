import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsComponent; 
    beforeEach(() => {
        NumberOfEventsComponent = render( <NumberofEvents  /> );
    });
    
    test('render text input', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    test('render default number of event to 32', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toHaveValue('32');
    });

    test('updates number of event correctly when user types in textbox', async () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        await userEvent.type(input, '{backspace}{backspace}10');
        expect(input).toHaveValue('10');
    })
})