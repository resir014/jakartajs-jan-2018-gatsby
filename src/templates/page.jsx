import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'gatsby-link';

import styles from '../pages/home.module.scss';
import HomepageHeader from '../components/HomepageHeader';
import PageContent from '../components/PageContent';

const PageTemplate = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <main className={classnames(styles.main, styles.homepageMain)}>
      <div className={classnames(styles.mainHeader)} />
      <HomepageHeader>
        <h1 className={styles.heading}>{markdownRemark.frontmatter.title}</h1>
      </HomepageHeader>
      <PageContent>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </PageContent>
    </main>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      excerpt: PropTypes.string,
      fields: PropTypes.shape({
        slug: PropTypes.string,
        layout: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PageQuery($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
        layout
      }
      frontmatter {
        title
      }
    }
  }
`;
