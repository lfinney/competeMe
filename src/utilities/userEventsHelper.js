import { userCompetitions } from '../Header/headerActions';

export const handleSubmit = (liveUser, activePopup) => {
  if (!liveUser) {
    activePopup(true);
    return;
  }
};

export const joinComp = (comp, activeUser) => {
  let newComps = activeUser.competitions.includes(comp) ?
    activeUser.competitions.filter( item => item !== comp) :
    [...activeUser.competitions, comp];
  return (dispatch) => dispatch(userCompetitions(newComps, activeUser));
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
