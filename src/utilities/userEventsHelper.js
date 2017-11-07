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

  return (dispatch) => dispatch(userCompetitions(newComps, activeUser));
};

export const locationDefaults = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition( position => {
      dispatch(userLocation(position.coords));
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

export const mapDimensions = { height: '300px', width: '300px'};
export const defaultMapPlacement = { lat:39.7508006, lng:-104.9965947 };
