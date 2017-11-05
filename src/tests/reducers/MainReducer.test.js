import * as mainReducer from '../../Main/mainReducer';

describe('users reducer', () => {
  it('should return objects in array', () => {
    const action = {
      type: 'FETCH_EVENT_DATA',
      events: [
        {
          title: '3v3 Soccer tourny'
        },
        {
          title: 'Flag-football'
        }
      ]
    };
    const expectation = action.events;

    expect(mainReducer.fetchFromFirebase(undefined,
      action)).toEqual(expectation);
  });

  it('should return objects in array', () => {
    const action = {
      type: 'POST_TO_STORE',
      firebaseData: [
        {
          title: '3v3 Soccer tourny'
        },
        {
          title: 'Flag-football'
        }
      ]
    };
    const expectation = action.firebaseData;

    expect(mainReducer.fetchFromFirebase(undefined,
      action)).toEqual(expectation);
  });

  it('should return an object', () => {
    const action = {
      type: 'USER_LOCATION',
      location: {
        lat: '45.582',
        lng: '105.345'
      }
    };
    const expectation = action.location;

    expect(mainReducer.userLocation(undefined, action)).toEqual(expectation);
  });
});
