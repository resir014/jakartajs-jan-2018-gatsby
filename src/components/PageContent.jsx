import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './PageContent.module.scss';

const PageContent = ({ children }) => (
  <div className={classnames(styles.root)}>
    {children}
  </div>
);

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
