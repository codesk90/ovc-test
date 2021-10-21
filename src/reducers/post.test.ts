import post from './post';
import { CLEAR_POSTS, GET_POSTS } from '../actions/types';

describe('Post reducer test', () => {
  it('Clear posts should return initial state', () => {
    expect(
      post({ loading: true, posts: [] }, { type: CLEAR_POSTS, payload: {} })
    ).toEqual({
      // empty post & loading
      loading: true,
      posts: [],
    });
  });

  it('Check if fetched data response is equal', async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=1`
    ).then((response) => response.json());

    expect(
      post(undefined, { type: GET_POSTS, payload: res.slice(0, 2) })
    ).toEqual({
      loading: false,
      posts: [
        {
          userId: 1,
          id: 1,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        },
      ],
    });
  });
});
