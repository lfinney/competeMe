export function submitComp(state = [], action) {
  switch (action.type) {
  case 'SUBMIT_NEW_COMPETITION':
    return [...state, action.newComp];

  default:
    return state;
  }
}

export const loginRequired = (state = false, action) => {
  switch (action.type) {
  case 'LOGIN_REQUIRED':
    return action.activePopup;

  default:
    return state;
  }
};
