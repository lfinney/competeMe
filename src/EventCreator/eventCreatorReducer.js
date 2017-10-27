export function submitComp(state = {}, action) {
  switch (action.type) {
  case 'SUBMIT_NEW_COMPETITION':
    return action.newComp;

  default:
    return state;
  }
}
