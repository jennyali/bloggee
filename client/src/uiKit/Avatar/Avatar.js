import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import avatarImg from '../../images/site-icon-border.png';

import './Avatar.css';

const Avatar = ({ size }) => {
  return <img className={classnames('avatar', `--${size}`)} src={avatarImg} alt="avatar icon" />;
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['large', 'small', 'default']),
};

Avatar.defaultProps = {
  size: 'default',
};

export default Avatar;
