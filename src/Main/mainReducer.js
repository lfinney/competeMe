export function fetchFromFirebase(state = [], action) {
  switch (action.type) {
  case 'FETCH_EVENT_DATA':
    return action.events;

  default:
    return state;
  }
}

export function storeData(state = [], action) {
  switch (action.type) {
  case 'POST_TO_STORE':
    return action.firebaseData;

  default:
    return state;
  }
}
