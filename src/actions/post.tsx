import { Dispatch } from 'react';
import { CLEAR_POSTS, GET_POSTS } from './types';
import { ClearPosts, GetPosts } from '../types/action';

export const getPosts =
  (userId: number) => async (dispatch: Dispatch<GetPosts>) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    ).then((response) => response.json());

    dispatch({ type: GET_POSTS, payload: res });
  };

export const clearPosts = () => async (dispatch: Dispatch<ClearPosts>) => {
  dispatch({ type: CLEAR_POSTS });
};
