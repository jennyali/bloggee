import React from 'react';
import _ from 'lodash';
import './RecentPostsList.css';

const RecentPostsList = ({ title, content, numberOf }) => {
  const sampledList = _.sampleSize(content, numberOf);

  const renderedList = _.map(sampledList, function (item, i) {
    return <li key={i}>{item}</li>;
  });

  return (
    <div className="post-list default">
      <h3 className="post-list__title">{title}</h3>
      <ul className="post-list__list primary_li">{renderedList}</ul>
    </div>
  );
};

export default RecentPostsList;
