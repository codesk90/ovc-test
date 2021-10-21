export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  post: {
    posts: Post[];
    loading: boolean;
  };
}

export interface PostProps {
  posts: Post[];
  loading: boolean;
  getPosts: (id: number) => void;
  match: {
    params: {
      id: number;
    };
  };
}

export interface UserPostProps {
  post: Post;
  index: number;
}
