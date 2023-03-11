import PropTypes from 'prop-types';

export default function Post({ post }) {
  return (
    <li className='shadow-lg border bg-white my-4 p-4'>
      <h2 className='text-lg font-bold'>{post.title}</h2>
      <p className='text-sm text-gray-500'>{post.content}</p>
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
