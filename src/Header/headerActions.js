export const activeUser = (user) => {
  return {
    type: 'USER_LOGIN',
    user
  };
};

export const updateUserComps = (joinedCompetitions, activeUser) => {
  return {
    type: 'UPDATE_USER_COMPS',
    joinedCompetitions,
    activeUser
  };
};

export const userCompetitions = (comp, activeUser) => {
  return {
    type: 'USER_COMPETITON',
    comp,
    user: activeUser
  };
};
