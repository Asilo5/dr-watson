export const createUser = user => ({
  type: 'CREATE_USER',
  user
});

export const removeUser = () => ({
  type: 'REMOVE_USER'
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
});

export const addNewMessage = (newMessage) => ({
  type: 'ADD_NEW_MESSAGE',
  newMessage
});

export const deleteMessages = (clear) => ({
  type: 'DELETE_MESSAGE',
  clear
});