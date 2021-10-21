import { Dispatch } from 'react';
import { GET_POSTS } from './types';
import { GetPosts } from '../types/action';

export const getPosts =
  (id: number) => async (dispatch: Dispatch<GetPosts>) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    ).then((response) => response.json());

    dispatch({ type: GET_POSTS, payload: res });
  };
