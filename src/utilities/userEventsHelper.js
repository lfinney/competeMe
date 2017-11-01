import { userCompetitions } from '../Header/headerActions';
import { userLocation } from '../Main/mainActions';

export const handleSubmit = (liveUser, activePopup) => {
  if (!liveUser) {
    activePopup(true);
    return;
  }
};

export const joinComp = (comp, activeUser) => {
  let newComps = activeUser.competitions.includes(comp) ?
    activeUser.competitions.filter( item => item.id !== comp.id) :
    [...activeUser.competitions, comp];
    console.log(newComps);
  return (dispatch) => dispatch(userCompetitions(newComps, activeUser));
};

export const locationDefaults = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition( position => {
      console.log(position.cords);
      dispatch(userLocation(position.coords))
    }
    );
  };
};

export const defaultUserFormState = {
  compName: '',
  sport: '',
  players: '',
  competitiveness: 'Casual',
  date: '2017-11-01',
  time: '15:00',
  details: '',
  location: '',
  creator: '',
  activePlayers: null
};

// export const joinComp = (comp, activeUser) => {
//   activeUser.competitions.has(comp) ?
//     activeUser.competitions.delete(comp) :
//     activeUser.competitions.add(comp);
//   return (dispatch) => dispatch(userCompetitions(activeUser.competitions));
// };
