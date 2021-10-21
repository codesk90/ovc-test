import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, useLocation, withRouter } from 'react-router';
import { compose } from 'redux';
import { getPosts } from '../actions/post';
import { PostState, PostProps } from '../types/post';

const User: FC<PostProps> = ({ posts, loading, getPosts, match }) => {
  const { params } = match;

  useEffect((): void => {
    getPosts(params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <h1>User's Posts</h1>
      <div className='post-table'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{posts && !loading && posts.map()}</tbody>
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
