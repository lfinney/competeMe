export function userLogin(state = {}, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return action.activeUser;

  default:
    return state;
  }
}
