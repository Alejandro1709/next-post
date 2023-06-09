import { useState } from 'react';
import { prisma } from '../utils/prisma';
import Form from '../components/Form';
import Layout from '../components/Layout';
import List from '../components/List';
import PropTypes from 'prop-types';

export default function Home({ posts }) {
  const parsedPosts = JSON.parse(posts);

  const [allPosts, setAllPosts] = useState(parsedPosts);

  return (
    <Layout
      title='uninot | Share with the world'
      description='This app allows you to share your thoughts easily'
    >
      <section className='max-w-screen-md mx-auto pt-10'>
        <Form onSubmit={setAllPosts} posts={allPosts} />
        <List posts={allPosts} />
      </section>
    </Layout>
  );
}

Home.propTypes = {
  posts: PropTypes.string,
};

export async function getServerSideProps() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return {
    props: {
      posts: JSON.stringify(posts),
    },
  };
}
