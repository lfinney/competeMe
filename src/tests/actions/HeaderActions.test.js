import * as actions from '../../Header/headerActions';

describe('actions', () => {

  it('should process a user object', () => {
    const mockUser = {
      name: 'Gizmo',
      email: 'Stumper4lyfe@doggos.com'
    };
    const expected = {
      type: 'USER_LOGIN',
      user: mockUser
    };
    const expectation = actions.activeUser(mockUser);

    expect(expectation).toEqual(expected);
  });

  it('should process a user and competition object', () => {
    const mockUser = {
      name: 'Gizmo',
      email: 'Stumper4lyfe@doggos.com'
    };
    const mockCompeition = {
      name: 'Friz',
      sport: 'Frisbee',
      players: 22
    };
    const expected = {
      type: 'USER_COMPETITON',
      comp: mockCompeition,
      user: mockUser
    };
    const expectation = actions.userCompetitions(mockCompeition, mockUser);

    expect(expectation).toEqual(expected);
  });
});
