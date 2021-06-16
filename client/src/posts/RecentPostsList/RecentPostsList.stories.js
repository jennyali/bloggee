import React from 'react';

import RecentPostsList from './RecentPostsList';

const Template = (args) => <RecentPostsList {...args} />;

export default {
  title: 'Recent Posts',
  component: RecentPostsList,
};

export const BasicPostsList = Template.bind({});
BasicPostsList.args = {};
