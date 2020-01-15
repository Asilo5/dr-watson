import * as actions from './index';

describe('Actions test', () => {

    describe('createUser', () => {
       it('should return an object containing type: CREATE_USER and the user', () => {
           const mockUser = {
            id :1579109011725,
            firstName :"Consuelo",
            lastName:"Sierra",
            feeling:"stressed"
           };

           const expectedAction = {
               type: 'CREATE_USER',
               user : {
                id :1579109011725,
                firstName :"Consuelo",
                lastName:"Sierra",
                feeling:"stressed"
               }
           };

           const result = actions.createUser(mockUser);
           expect(result).toEqual(expectedAction);
       })
    })

    describe('removeUser', () => {
    
    })

    describe('hasErrored', () => {
    
    })

    describe('addNewMessage', () => {
    
    })

    describe('deleteMessages', () => {
    
    })

})