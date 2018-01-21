import React from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';

import styles from './home.module.scss';
import HomepageHeader from '../components/HomepageHeader';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';

const IndexPage = () => (
  <main className={classnames(styles.main, styles.homepageMain)}>
    <div className={classnames(styles.mainHeader, styles.homepageMainHeader)} />
    <HomepageHeader>
      <h1 className={styles.heading}>JakartaJS</h1>
    </HomepageHeader>
    <PageContainer>
      <Card className={styles.titleCard}>
        <h2 className={styles.subtitle}>Jakarta JavaScript User Group</h2>
        <p>
          Come and meet other developers interested in JavaScript and its ecosystem in the Greater
          Jakarta area.
        </p>
        <Link href="/about/" to="/about/">About Us</Link>
      </Card>
    </PageContainer>
  </main>
);

export default IndexPage;
