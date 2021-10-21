import { Dispatch } from 'react';
import { GET_USERS } from './types';

export const getUsers = () => async (dispatch: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (response) => response.json()
  );
  dispatch({ type: GET_USERS, payload: res });
};
