import { postToStore } from '../Main/mainActions';
import firebase from '../firebase.js';
import { joinComp } from './userEventsHelper'

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
  const joinedCompetitions = activeCompetitions.map( (comp) => {
    if (comp.activePlayers.map( player => player === activeUser.userId)) {
      console.log(activeUser);
      joinComp(comp, activeUser);
    }
    return;
  });
  console.log(joinedCompetitions);
};
