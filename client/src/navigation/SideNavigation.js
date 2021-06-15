import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../uiKit/Button';
import './SideNavigation.css';

const SideNavigation = ({ closeIcon, menuIcon, logo, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderedMenu = isOpen ? (
    <Button
      icon={closeIcon}
      type="grey-altcolor"
      variant="transparent"
      onClick={toggleMenu}
      large
    />
  ) : (
    <Button icon={menuIcon} type="grey-altcolor" variant="transparent" onClick={toggleMenu} large />
  );

  const sideNavRef = useRef(null);

  useEffect(() => {
    if (sideNavRef.current) {
      const sideNavWidth = sideNavRef.current.offsetWidth;

      if (sideNavWidth >= 400) {
        return setIsOpen(true);
      }
    }
  }, [sideNavRef]);

  return (
    <div className="side-nav" ref={sideNavRef}>
      <div className="col-one">
        {logo}
        {renderedMenu}
      </div>
      <div className={classnames('col-two', { open: isOpen })}>{children}</div>
    </div>
  );
};

SideNavigation.propTypes = {
  closeIcon: PropTypes.element,
  menuIcon: PropTypes.element,
  logo: PropTypes.element,
  children: PropTypes.node,
};

SideNavigation.defaultProps = {
  closeIcon: null,
  menuIcon: null,
  logo: null,
  children: null,
};

export default SideNavigation;
