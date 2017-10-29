import firebase, { auth, provider, database } from '../firebase.js';

export const fetchFromFirebase = () => {
  return (dispatch) => {
    firebase.database().ref('comps').on('value', snapshot => {
      const dataObjects = Object.entries(snapshot.val());
      return dataObjects.map(([key, value]) =>
        Object.assign({ key: key}, value));
    });
  };
};
