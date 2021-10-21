import { GET_USERS } from '../actions/types';
import { ActionProps } from '../types/types';

const initialState = {
  loading: true,
  filtered: null,
  users: [],
};

const user = (state = initialState, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default user;
