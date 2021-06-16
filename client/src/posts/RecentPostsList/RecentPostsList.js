import React from 'react';
import _ from 'lodash';
import './RecentPostsList.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const RecentPostsList = ({ title, content, numberOf, className }) => {
  const sampledList = _.sampleSize(content, numberOf);

  const renderedList = _.map(sampledList, function (item, i) {
    return <li key={i}>{item}</li>;
  });

  return (
    <div className={classnames('post-list', 'default', className)}>
      <h3 className="post-list__title">{title}</h3>
      <ul className="post-list__list primary_li">{renderedList}</ul>
    </div>
  );
};

RecentPostsList.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  numberOf: PropTypes.number,
  className: PropTypes.string,
};

RecentPostsList.defaultProps = {
  title: 'Recent Posts',
  content: [],
  numberOf: 0,
  className: null,
};

export default RecentPostsList;
