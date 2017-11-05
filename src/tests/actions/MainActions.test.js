import * as actions from '../../Main/mainActions';

describe('actions', () => {

  it('should process an array of event objects', () => {
    const mockEvents = [
      {
        name: 'Friz',
        sport: 'Frisbee',
        players: 22
      },
      {
        name: '3v3',
        sport: 'Soccer',
        players: 6
      }
    ];
    const expected = {
      type: 'FETCH_EVENT_DATA',
      events: mockEvents
    };
    const expectation = actions.fetchFromFirebase(mockEvents);

    expect(expectation).toEqual(expected);
  });

  it('should send an event object to the store', () => {
    const mockCompeition = {
      name: 'Friz',
      sport: 'Frisbee',
      players: 22
    };
    const expected = {
      type: 'POST_TO_STORE',
      firebaseData: mockCompeition
    };
    const expectation = actions.postToStore(mockCompeition);

    expect(expectation).toEqual(expected);
  });

  it('should return an object of users location', () => {
    const mockLocation = {
      lat: 35.345,
      lng: 120.234
    };
    const expected = {
      type: 'USER_LOCATION',
      location: mockLocation
    };
    const expectation = actions.userLocation(mockLocation);

    expect(expectation).toEqual(expected);
  });
});
