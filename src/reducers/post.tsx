import { GET_POSTS } from '../actions/types';
import { ActionProps } from '../types/types';

const initialState = {
  loading: true,
  filtered: null,
  posts: [],
};

const post = (state = initialState, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        packs: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default post;
