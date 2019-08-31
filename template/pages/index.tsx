
/* IMPORT */

import React from 'react';
import Button from '@components/button';
import Layout from '@layouts/layout';

/* INDEX */

const SEO = {
  title: '{{_ "startCase" name}}',
  titleTemplate: '%s'
};

const Index = () => (
  <Layout className="home" seo={SEO}>
    <Button href="/">Home</Button>
  </Layout>
);

/* EXPORT */

export default Index;
