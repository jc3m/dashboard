import Head from 'next/head';

import '../styles/index.scss';

export const withLayout = (Page) => (props) => (
  <>
    <Head>
      <title>Dashboard</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" />
    </Head>
    <Page {...props} />
  </>
);
