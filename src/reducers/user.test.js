import { user } from './user';

describe('user', () => {

    it('should return the initial state', () => {
       const expected = null;
       const result = user(undefined, {});

       expect(result).toEqual(expected);
    })

    it('should return the correct state when CREATE_USER is passed in the action object', () => {
      const initialState = {};

      const action = {
          type: 'CREATE_USER',
          user: {
            id:1579111947816,
            firstName:"Consuelo",
            lastName:"Sierra",
            feeling:"happy"
          }
      };

      const result = user(initialState, action);
      const expected = {
        id:1579111947816,
        firstName:"Consuelo",
        lastName:"Sierra",
        feeling:"happy"
       };
       expect(result).toEqual(expected);
    })

    it('should return the correct state when REMOVE_USER is passed in the action object', () => {
        const initialState = {
            id:1579111947816,
            firstName:"Consuelo",
            lastName:"Sierra",
            feeling:"happy"
          };

      const action = {
          type: 'REMOVE_USER',
          object: null
      };

      const result = user(initialState, action);
      const expected = null;
       expect(result).toEqual(expected);
    })
})