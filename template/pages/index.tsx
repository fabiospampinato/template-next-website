
/* IMPORT */

import React from 'react';
import Button from '@components/button';
import Layout from '@layouts/layout';

/* INDEX */

const SEO = {
  title: 'Home'
};

const Index = () => (
  <Layout className="home" seo={SEO}>
    <Button href="/">Home</Button>
  </Layout>
);

/* EXPORT */

export default Index;
