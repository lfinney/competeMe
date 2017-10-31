import { userCompetitions } from '../Main/mainActions';

export const handleSubmit = (liveUser, activePopup) => {
  if (!liveUser) {
    activePopup(true);
    return;
  }
};

export const joinComp = (comp, activeUser) => {
  activeUser.competitions.has(comp) ?
    activeUser.competitions.delete(comp) :
    activeUser.competitions.add(comp);
  return (dispatch) => dispatch(userCompetitions(activeUser.competitions));
};
