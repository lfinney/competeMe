export const submitComp = (newComp) => {
  return {
    type: 'SUBMIT_NEW_COMPETITION',
    newComp
  };
};

export const loginRequired = (bool) => {
  return {
    type: 'LOGIN_REQUIRED',
    activePopup: bool
  };
};
