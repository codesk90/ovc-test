import { Dispatch } from 'react';
import { GET_USERS } from './types';
import { GetUsers } from '../types/action';

export const getUsers = () => async (dispatch: Dispatch<GetUsers>) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (response) => response.json()
  );
  dispatch({ type: GET_USERS, payload: res });
};
