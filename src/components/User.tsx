import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/post';
import { PostState, PostProps, Post } from '../types/post';
import UserPost from './UserPost';

const User: FC<PostProps> = ({ posts, loading, getPosts, match }) => {
  const { params } = match;

  useEffect((): void => {
    getPosts(params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <main className="post-wrapper">
      <h1>User's Posts</h1>
      <div className="post-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              !loading &&
              posts.map((post: Post, index: number) => (
                <UserPost post={post} index={index} />
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

const mapStateToProps = (state: PostState) => ({
  posts: state.post.posts,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { getPosts })(User);
