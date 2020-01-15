import { messages } from './messages';

describe('messages', () => {

    it('should return the initial state', () => {
      const expected = [];
      const result = messages(undefined, []);

      expect(result).toEqual(expected);
    })

    it('should return the correct state when ADD_NEW_MESSAGE is passed in the action object', () => {
        const initialState = [];

        const action = {
            type: 'ADD_NEW_MESSAGE',
            newMessage: {
                message: 'AHHHH',
                isUser: true
            }
        };

        const result = messages(initialState, action);
        const expected = [{
            message: 'AHHHH',
            isUser: true
        }];
        expect(result).toEqual(expected);
    })

    it('should return the correct state when DELETE_MESSAGE is passed in the action object', () => {
        const initialState = [{
            message: 'AHHHH',
            isUser: true
        }];

        const action = {
            type: 'DELETE_MESSAGE',
            clear: {}
        };

        const result = messages(initialState, action);
        const expected = {};
        expect(result).toEqual(expected);
    })
})