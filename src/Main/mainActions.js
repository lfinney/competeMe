export const fetchFromFirebase = (events) => {
  return {
    type: 'FETCH_EVENT_DATA',
    events
  };
};
