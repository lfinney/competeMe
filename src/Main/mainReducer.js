export function fetchFromFirebase(state = [], action) {
  switch (action.type) {
  case 'FETCH_EVENT_DATA':
    return action.events;

  case 'POST_TO_STORE':
    return action.firebaseData;

  default:
    return state;
  }
}

export function userCompetitions(state = [], action) {
  switch (action.type) {
  case 'USER_COMPETITON':
    return action.comp;

  default:
    return state;
  }
}
