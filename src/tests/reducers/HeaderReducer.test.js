import * as mainReducer from '../../Header/headerReducer';

describe('users reducer', () => {
  it('should return a user object', () => {
    const action = {
      type: 'USER_LOGIN',
      user: {
        name: 'Gizmo'
      }
    };
    const expectation = action.user;

    expect(mainReducer.activeUser(undefined, action)).toEqual(expectation);
  });

  it('should return an object of the user', () => {
    const action = {
      type: 'USER_COMPETITON',
      user: {
        name: 'Gizmo'
      }
    };
    const expectation = action.user;

    expect(mainReducer.activeUser(undefined, action)).toEqual(expectation);
  });
});
