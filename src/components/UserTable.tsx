import { connect } from 'react-redux';
import { FC, FormEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import { getUsers } from '../actions/user';
import { User } from '../types/user';
import UserItem from './UserItem';

interface UserProps {
  users: User[];
  loading: boolean;
  getUsers: () => void;
}

interface UserTableState {
  user: {
    users: User[];
    loading: boolean;
  };
}

const UserTable: FC<UserProps> = ({ users, loading, getUsers }) => {
  const [filtered, setFiltered] = useState<User[] | null>(null)

  const text = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect((): void => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  useEffect((): void => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered])

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    if (text.current.value !== '') {
      const {value} = text.current;
      value.replace(/\\/g, '');

      const filteredUser = users.filter(user => {
        const regex = new RegExp(`${value}`, 'gi')
        return (
          user.name.match(regex)
        )
      })

      setFiltered(filteredUser)
    } else {
      setFiltered(null)
    }
  }

  return (
    <main className="user-wrapper">
      <h1>Users</h1>
      <div className="user-table">
        <div className="user-search">
          <input
            ref={text}
            type="text"
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
            {
              filtered ?
              filtered.map((user: User, index: number) => (
                <UserItem key={user.id} index={index} user={user} />
              )) :
              users &&
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

const mapStateToProps = (state: UserTableState) => ({
  users: state.user.users,
  loading: state.user.loading,
});

export default connect(mapStateToProps, {
  getUsers,
})(UserTable);
