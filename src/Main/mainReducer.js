export function fetchFromFirebase(state = [], action) {
  switch (action.type) {
  case 'FETCH_EVENT_DATA':
    return [action.events];

  default:
    return state;
  }
}
