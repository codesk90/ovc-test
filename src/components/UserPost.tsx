import React, { FC } from 'react';
import { UserPostProps } from '../types/post';

const UserPost: FC<UserPostProps> = ({ post, index }) => {
  return (
    <tr className={index % 2 === 0 ? 'bg-gray' : ''}>
      <td>{post.title}</td>
      <td>{post.body}</td>
    </tr>
  );
};

export default UserPost;
