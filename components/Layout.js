import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen bg-slate-50'>{children}</main>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: 'Next.js Tailwind Starter',
  description: 'A starter template for Next.js with Tailwind CSS',
};
