export interface User {
  id: number;
  name: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface UserListItemProp {
  user: User;
  index: number;
  history: object;
}

export interface UserState {
  user: {
    users: User[];
    loading: boolean;
  };
}

export interface UserProps {
  users: User[];
  loading: boolean;
  getUsers: () => void;
  clearPosts: () => void;
}
