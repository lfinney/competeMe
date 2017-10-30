export function removePopup(state = false, action) {
  switch (action.type) {
  case 'REMOVE_POPUP':
    return action.bool;

  default:
    return state;
  }
}
