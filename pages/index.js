import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout
      title='uninot | Share with the world'
      description='This app allows you to share your thoughts easily'
    >
      <section className='max-w-screen-md mx-auto pt-10'>
        <form className='flex shadow-lg border'>
          <input
            className='p-2 flex-1 outline-none'
            type='text'
            placeholder='What are you thinking???'
          />
          <button className='p-2 px-4 bg-blue-500 hover:bg-blue-600 text-white'>
            Share
          </button>
        </form>
        <ul>
          <li className='shadow-lg border bg-white my-4 p-4'>
            <h2 className='text-lg'>uninot</h2>
          </li>
          <li className='shadow-lg border bg-white my-4 p-4'>
            <h2 className='text-lg'>uninot</h2>
          </li>
          <li className='shadow-lg border bg-white my-4 p-4'>
            <h2 className='text-lg'>uninot</h2>
          </li>
          <li className='shadow-lg border bg-white my-4 p-4'>
            <h2 className='text-lg'>uninot</h2>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
