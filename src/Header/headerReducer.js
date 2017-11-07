export function activeUser(state = {}, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return action.user;

  case 'UPDATE_USER_COMPS':
    return Object.assign({}, action.activeUser, {competitions: [...action.joinedCompetitions]});

  case 'USER_COMPETITON':
    return Object.assign({}, action.user, {competitions: action.comp});
  default:
    return state;
  }
}
