export function submitComp(state = [], action) {
  switch (action.type) {
  case 'SUBMIT_NEW_COMPETITION':
    return [...state, action.newComp];

  default:
    return state;
  }
}
