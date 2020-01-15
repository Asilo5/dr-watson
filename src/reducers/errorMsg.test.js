import { errorMsg } from './errorMsg';

describe('errorMsg', () => {
    it('should return the initial state', () => {
       const expected = '';
       const result = errorMsg(undefined, '');

       expect(result).toEqual(expected);
    })

    it('should return the correct state when HAS_ERRORED is passed in the action object', () => {
       const initialState = '';

       const action = {
           type: 'HAS_ERRORED',
           errorMsg: 'ERROR!'
       };

       const result = errorMsg(initialState, action);
       const expected = 'ERROR!';
       expect(result).toEqual(expected);
    })
})