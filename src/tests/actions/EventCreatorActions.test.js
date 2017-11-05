import * as actions from '../../EventCreator/eventCreatorActions';

describe('actions', () => {

  it('should process an object top send to firbease', () => {
    const mockComp = {
      name: 'Friz',
      sport: 'Frisbee',
      players: 22
    };
    const expected = {
      type: 'SUBMIT_NEW_COMPETITION',
      newComp: mockComp
    };
    const expectation = actions.submitComp(mockComp);

    expect(expectation).toEqual(expected);
  });

  it('should return a boolean to indiciate status of popup', () => {
    const expected = {
      type: 'ACTIVE_POPUP',
      activePopup: false
    };
    const expectation = actions.activePopup(false);

    expect(expectation).toEqual(expected);
  });

  it('should return an object of users location', () => {
    const mockParks = [
      {
        name: 'Washington Park',
        lat: 35.345,
        lng: 120.234
      },
      {
        name: 'Concluence Park',
        lat: 36.345,
        lng: 122.234
      }
    ];
    const expected = {
      type: 'PARK_SEARCH',
      searchResults: mockParks
    };
    const expectation = actions.parkSearch(mockParks);

    expect(expectation).toEqual(expected);
  });
});
