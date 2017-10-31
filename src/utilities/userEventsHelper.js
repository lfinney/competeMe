import { userCompetitions } from '../Main/mainActions';

export const handleSubmit = (liveUser, activePopup) => {
  if (!liveUser) {
    activePopup(true);
    return;
  }
};

export const joinComp = (comp, activeUser) => {
  console.log('in helper', activeUser);
  return (dispatch) => dispatch(userCompetitions(comp));
};
