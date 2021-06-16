import React from 'react';

import SideNavigation from './SideNavigation';

const Template = (args) => <SideNavigation {...args} />;

export default {
  title: 'Side Navigation',
  component: SideNavigation,
};

export const UserSideNavigation = Template.bind({});
UserSideNavigation.args = {};
