export const fetchFromFirebase = (events) => {
  return {
    type: 'FETCH_EVENT_DATA',
    events
  };
};

export const postToStore = (firebaseData) => {
  return {
    type: 'POST_TO_STORE',
    firebaseData
  };
};

export const userCompetitions = (comp) => {
  return {
    type: 'USER_COMPETITON',
    comp
  };
};
