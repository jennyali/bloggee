import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../uiKit/Button';
import Avatar from '../../uiKit/Avatar';

import './TopNavigation.css';

const TopNavigation = ({ menuIcon, menuText, userIcon, userText, buttonText, className }) => {
  return (
    <div className={classnames('top-navigation', 'secondary', className)}>
      <div className="menu">
        <a className="menu-link" href="/">
          <span className="link-text">{menuText}</span>
          <span className="link-icon">{menuIcon}</span>
        </a>
        <a className="menu-link" href="/">
          <span className="link-text">{userText}</span>
          <span className="link-icon">{userIcon}</span>
        </a>
      </div>
      <div className="sign-out">
        <Button text={buttonText} type="primary" variant="default" small />
        <Avatar small />
      </div>
    </div>
  );
};

TopNavigation.propTypes = {
  menuIcon: PropTypes.element,
  userIcon: PropTypes.element,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  menuText: PropTypes.string,
  userText: PropTypes.string,
};

TopNavigation.defaultProps = {
  menuIcon: <AiOutlineDashboard />,
  userIcon: <BiUser />,
  buttonText: 'Sign Out',
  className: null,
  menuText: 'Dashboard',
  userText: 'User View',
};

export default TopNavigation;
