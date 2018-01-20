import React from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';

import styles from './home.module.scss';
import HomepageHeader from '../components/HomepageHeader';
import PageContent from '../components/PageContent';

const SecondPage = () => (
  <main className={classnames(styles.main, styles.homepageMain)}>
    <div className={classnames(styles.mainHeader)} />
    <HomepageHeader>
      <h1 className={styles.heading}>Hi from the second page</h1>
    </HomepageHeader>
    <PageContent>
      <p>Welcome to page 2</p>
      <Link href="/" to="/">Go back to the homepage</Link>
    </PageContent>
  </main>
);

export default SecondPage;
