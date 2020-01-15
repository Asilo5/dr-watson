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
       it('should return an object containing type: REMOVE_USER and the object', () => {
          const mockObject = {};

          const expectedAction = {
              type: 'REMOVE_USER',
              object: {}
          };

          const result = actions.removeUser(mockObject);
          expect(result).toEqual(expectedAction);
       })
    })

    describe('hasErrored', () => {
        it('should return an object containing type: HAS_ERRORED and the errorMsg', () => {
           const mockError = 'ERROR!';

           const expectedAction = {
               type: 'HAS_ERRORED',
               errorMsg: 'ERROR!'
           };

           const result = actions.hasErrored(mockError);
           expect(result).toEqual(expectedAction);
        })
    })

    describe('addNewMessage', () => {
        it('should return an object containing type: CADD_NEW_MESSAGE and the newMessage', () => {
           const mockMessage = {
               message: 'Hey there!',
               isUser: false
           };

           const expectedAction = {
               type: 'ADD_NEW_MESSAGE',
               newMessage:  {
                message: 'Hey there!',
                isUser: false
               }
           };

           const result = actions.addNewMessage(mockMessage);
           expect(result).toEqual(expectedAction);
        })
    })

    describe('deleteMessages', () => {
        it('should return an object containing type: DELETE_MESSAGE and the clear', () => {
            const mockMessage = {};
 
            const expectedAction = {
                type: 'DELETE_MESSAGE',
                clear: {}
            };
 
            const result = actions.deleteMessages(mockMessage);
            expect(result).toEqual(expectedAction);
        }) 
    })

})