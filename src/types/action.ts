import { Post } from './post';
import { User } from './user';

interface Actions {
  GET_POSTS: string;
  GET_USERS: string;
  CLEAR_POSTS: string;
}

export interface GetUsers {
  type: Actions['GET_USERS'];
  payload: User[];
}

export interface GetPosts {
  type: Actions['GET_POSTS'];
  payload: Post[];
}

export interface ClearPosts {
  type: Actions['CLEAR_POSTS'];
}
