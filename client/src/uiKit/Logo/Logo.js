import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import logoImg from '../../images/logo.png';
import './Logo.css';

const Logo = ({ size }) => {
  return (
    <>
      <img
        className={classnames(
          'logo',
          { '--large': size === 'large' },
          { '--small': size === 'small' },
          { '': size === 'default' }
        )}
        src={logoImg}
        alt="Logo"
      />
    </>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['large', 'small', 'default']),
};

Logo.defaultProps = {
  size: 'default',
};

export default Logo;
