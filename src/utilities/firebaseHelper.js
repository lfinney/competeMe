import { postToStore} from '../Main/mainActions';
import { updateUserComps } from '../Header/headerActions';
import firebase, { auth, provider } from '../firebase.js';

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
  return (dispatch) => {
    const joinedCompetitions = activeCompetitions.filter( (comp) => {
      return (comp.activePlayers.includes(activeUser.userId));
    });
    dispatch(updateUserComps(joinedCompetitions, activeUser));
  };
};

// export const userLogin = firebase => {
//   auth.signInWithPopup(provider)
//     .then((result) => result = result.user)
//     .then((userData) => cleanUserData(userData));
// };
//
// const cleanUserData = user => {
//   return {
//     userId: user.uid,
//     displayName: user.displayName.split(' ')[0],
//     email: user.email,
//     competitions: []
//   };
// };
