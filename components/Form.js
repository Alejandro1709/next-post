import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({ onSubmit, posts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      const post = await res.json();

      onSubmit([...posts, post]);

      setTitle('');
      setContent('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='flex shadow-lg border' onSubmit={handleSubmit}>
      <input
        className='p-2 flex-1 outline-none'
        type='text'
        placeholder='Post Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className='p-2 flex-1 outline-none'
        type='text'
        placeholder='What are you thinking???'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className='p-2 px-4 bg-blue-500 hover:bg-blue-600 text-white'>
        Share
      </button>
    </form>
  );
}

Form.propTypes = {
  posts: PropTypes.array,
  onSubmit: PropTypes.func,
};
