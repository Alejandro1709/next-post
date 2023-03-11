import Form from '../components/Form';
import Layout from '../components/Layout';
import List from '../components/List';

export default function Home() {
  return (
    <Layout
      title='uninot | Share with the world'
      description='This app allows you to share your thoughts easily'
    >
      <section className='max-w-screen-md mx-auto pt-10'>
        <Form />
        <List />
      </section>
    </Layout>
  );
}
