export const activeUser = (user) => {
  return {
    type: 'USER_LOGIN',
    user
  };
};


export const userCompetitions = (comp, activeUser) => {
  return {
    type: 'USER_COMPETITON',
    comp,
    user: activeUser
  };
};
