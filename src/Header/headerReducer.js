export function activeUser(state = {}, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return action.user;

  case 'USER_COMPETITON':
    return Object.assign({}, action.user, {competitions: action.comp});
  default:
    return state;
  }
}
