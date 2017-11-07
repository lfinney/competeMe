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

export const userLocation = (location) => {
  return {
    type: 'USER_LOCATION',
    location
  };
};


//Youre in the middle of writing an action fo post the user's pre-joined competitions to the display container
