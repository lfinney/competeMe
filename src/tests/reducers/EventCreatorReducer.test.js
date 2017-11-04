import * as userReducer from '../../EventCreator/eventCreatorReducer';

describe('users reducer', () => {
  it('should return an object in an array', () => {
    const action = {
      type: 'SUBMIT_NEW_COMPETITION',
      newComp: {
        title: 'Frisbee in the park'
      }
    };
    const expectation = [action.newComp];

    expect(userReducer.submitComp(undefined, action)).toEqual(expectation);
  });

  it('should return a boolean indicating the status of a popup', () => {
    const action = {
      type: 'ACTIVE_POPUP',
      activePopup: true
    };
    const expectation = action.activePopup;

    expect(userReducer.activePopup(undefined, action)).toEqual(expectation);
  });

  it('should return an array with parks in it', () => {
    const action = {
      type: 'PARK_SEARCH',
      searchResults: {
        name: 'Skyline Park'
      }
    };
    const expectation = action.searchResults;

    expect(userReducer.nearbyParks(undefined, action)).toEqual(expectation);
  });
});
