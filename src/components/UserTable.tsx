import { connect } from 'react-redux';
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import { getUsers } from '../actions/user';
import { User, UserState, UserProps } from '../types/user';
import UserItem from './UserItem';

const UserTable: FC<UserProps> = ({ users, loading, getUsers }) => {
  const [filtered, setFiltered] = useState<User[] | null>(null);

  const text = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect((): void => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  useEffect((): void => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered]);

  const handleSearch = () => {
    // Find if search bar has any string
    if (text.current.value !== '') {
      const { value } = text.current;
      // Incase of any backslash it replaces it with empty string
      value.replace(/\\/g, '');

      // filtering usering at search
      const filteredUser = users.filter((user) => {
        const regex = new RegExp(`${value}`, 'gi');
        return user.name.match(regex);
      });

      // set filtered list of users
      setFiltered(filteredUser);
    } else {
      // otherwise set filter as null to list all of users
      setFiltered(null);
    }
  };

  return (
    <main className='user-wrapper'>
      <h1>Users</h1>
      <div className='user-table'>
        <div className='user-search'>
          <input
            ref={text}
            type='text'
            placeholder='Search Users'
            onChange={handleSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {filtered
              ? filtered.map((user: User, index: number) => (
                  <UserItem key={user.id} index={index} user={user} />
                ))
              : users &&
                !loading &&
                users.map((user: User, index: number) => (
                  <UserItem key={user.id} index={index} user={user} />
                ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

const mapStateToProps = (state: UserState) => ({
  users: state.user.users,
  loading: state.user.loading,
});

export default connect(mapStateToProps, {
  getUsers,
})(UserTable);
