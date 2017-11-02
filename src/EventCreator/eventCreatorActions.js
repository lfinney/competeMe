export const submitComp = (newComp) => {
  return {
    type: 'SUBMIT_NEW_COMPETITION',
    newComp
  };
};

export const activePopup = (bool) => {
  return {
    type: 'ACTIVE_POPUP',
    activePopup: bool
  };
};

export const parkSearch = (searchResults) => {
  return {
    type: 'PARK_SEARCH',
    searchResults
  };
};
