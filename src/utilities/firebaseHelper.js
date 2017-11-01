import { postToStore } from '../Main/mainActions';
import firebase from '../firebase.js';

export const fetchFromFirebase = () => {
  return (dispatch) => {
    firebase.database().ref('comps').on('value', snapshot => {
      if (snapshot.val() !== null) {
        const dataObjects = Object.entries(snapshot.val());
        const retrievedData = dataObjects.map(([key, value]) =>
          Object.assign({ key: key}, value));
        dispatch(postToStore(retrievedData));
      }
    });
  };
};
