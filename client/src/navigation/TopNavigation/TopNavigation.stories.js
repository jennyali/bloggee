import React from 'react';

import TopNavigation from './TopNavigation';

const Template = (args) => <TopNavigation {...args} />;

export default {
  title: 'Top Navigation',
  component: TopNavigation,
};

export const AdminTopNavigation = Template.bind({});
AdminTopNavigation.args = {};
