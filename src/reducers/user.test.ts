import user from './user';
import { GET_USERS } from '../actions/types';

describe('User reducer test', () => {
  it('Check User initial state', () => {
    expect(
      user({ loading: true, users: [] }, { type: '', payload: {} })
    ).toEqual({
      // empty post & loading
      loading: true,
      users: [],
    });
  });

  it('Check if fetched data response is equal', async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
      (response) => response.json()
    );

    expect(
      user(undefined, { type: GET_USERS, payload: res.slice(0, 2) })
    ).toEqual({
      loading: false,
      users: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
              lat: '-43.9509',
              lng: '-34.4618',
            },
          },
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
          },
        },
      ],
    });
  });
});
