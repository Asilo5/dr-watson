export const messages = ( state=[], action ) => {
    switch(action.type) {
        case 'ADD_NEW_MESSAGE':
          return [...state, action.newMessage];
        case 'DELETE_MESSAGE':
          return action.clear;
        default:
          return state;
    } 
}