import Post from './Post';
import PropTypes from 'prop-types';

export default function List({ posts }) {
  return (
    <ul>
      {posts && posts.length > 0
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : null}
    </ul>
  );
}

List.propTypes = {
  posts: PropTypes.array,
};
