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

export const loadUserComps = (activeUser, activeCompetitions) => {

  const joinedCompetitions = activeCompetitions.filter( (comp) => {
    return (comp.activePlayers.includes(activeUser.userId));
  });

  console.log(joinedCompetitions);

  // joinedCompetitions create a new action/reducer that will simply take this array and populate into the activeUsers's competitions array as soon as they clcik the button to go to that path. The function should only fire if the activeUsers competions array is currently empty
};
