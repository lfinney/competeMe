export const fetchFromFirebase = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_EVENT_DATA':
    return action.events;

  case 'POST_TO_STORE':
    return action.firebaseData;

  default:
    return state;
  }
};


export const userLocation = (state ={}, action) => {
  switch (action.type) {
  case 'USER_LOCATION':
    return action.location;

  default:
    return state;
  }
};
