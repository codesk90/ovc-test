import { CLEAR_POSTS, GET_POSTS } from '../actions/types';
import { ActionProps } from '../types/types';

const initialState = {
  loading: true,
  posts: [],
};

const post = (state = initialState, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case CLEAR_POSTS:
      return {
        posts: [],
        loading: true,
      };
    default:
      return state;
  }
};

export default post;
