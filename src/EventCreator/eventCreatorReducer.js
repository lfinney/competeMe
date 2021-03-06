export function submitComp(state = [], action) {
  switch (action.type) {
  case 'SUBMIT_NEW_COMPETITION':
    return [...state, action.newComp];

  default:
    return state;
  }
}

export const activePopup = (state = false, action) => {
  switch (action.type) {
  case 'ACTIVE_POPUP':
    return action.activePopup;

  default:
    return state;
  }
};

export const nearbyParks = (state = [], action) => {
  switch (action.type) {
  case 'PARK_SEARCH':
    return action.searchResults;

  default:
    return state;
  }
};
