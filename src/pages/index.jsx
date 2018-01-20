import React from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';

import styles from './home.module.scss';
import HomepageHeader from '../components/HomepageHeader';
import PageContent from '../components/PageContent';

const IndexPage = () => (
  <main className={classnames(styles.main, styles.homepageMain)}>
    <div className={classnames(styles.mainHeader, styles.homepageMainHeader)} />
    <HomepageHeader>
      <h1 className={styles.heading}>JakartaJS</h1>
    </HomepageHeader>
    <PageContent>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link href="/page-2/" to="/page-2/">Go to page 2</Link>
    </PageContent>
  </main>
);

export default IndexPage;
