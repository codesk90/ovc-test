import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { UserItemProp } from '../types/user';

const UserItem: FC<UserItemProp & RouteComponentProps> = ({
  user,
  index,
  history,
}) => {
  const handleClick = () => {
    history.push({
      pathname: `/user/${user.id}`,
    });
  };

  return (
    <tr className={index % 2 === 0 ? 'bg-gray' : ''} onClick={handleClick}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address.city}</td>
      <td>{user.company.name}</td>
    </tr>
  );
};

export default withRouter(UserItem);
