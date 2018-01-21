import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Footer.module.scss';

const Footer = ({ siteName }) => (
  <footer className={classnames(styles.root)}>
    <p>
      <small>&copy; {siteName} 2018</small>
    </p>
  </footer>
);

Footer.propTypes = {
  siteName: PropTypes.string.isRequired,
};

export default Footer;
