import React from 'react';

import Logo from './Logo';

const Template = (args) => <Logo {...args} />;

export default {
  title: 'Logo',
  component: Logo,
};

export const LogoImage = Template.bind({});
