import { userCompetitions } from '../Main/mainActions';

export const handleSubmit = (liveUser, activePopup) => {
  if (!liveUser) {
    activePopup(true);
    return;
  }
};

export const joinComp = (comp, activeUser) => {
  console.log(activeUser.competitions);
  activeUser.competitions.has(comp) ?
    activeUser.competitions.delete(comp) :
    activeUser.competitions.add(comp);
  return (dispatch) => dispatch(userCompetitions(activeUser.competitions));
};



// export const joinComp = (comp, activeUser) => {
//   let newComps = [];
//   activeUser.competitions.includes(comp) ?
//     newComps = activeUser.competitions.filter( item => item !== comp) :
//     newComps = [...activeUser.competitions, comp];
//   console.log(activeUser.competitions);
//   return (dispatch) => dispatch(userCompetitions(newComps));
// };
