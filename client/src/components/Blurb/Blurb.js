import React from 'react';
import './Blurb.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import defaultImage from '../../images/site-icon-border.png';

const blurbDefaultText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac augue sodales, interdum lectus vitae, egestas sapien. Duis condimentum arcu sit amet tincidunt ornare. Sed pellentesque lacus in elit pharetra feugiat. Aenean vel nisl gravida, mollis mi vitae, rhoncus elit.';

const Blurb = ({ content, image, className }) => {
  return (
    <div className={classnames('blurb', 'primary', className)}>
      {image && <img className="blurb__image" src={image} alt="site icon" />}
      <p className="blurb__text">{content}</p>
    </div>
  );
};

Blurb.propTypes = {
  content: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
};

Blurb.defaultProps = {
  content: blurbDefaultText,
  image: defaultImage,
  className: null,
};

export default Blurb;
