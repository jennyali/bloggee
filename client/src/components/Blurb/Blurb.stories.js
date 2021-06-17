import React from 'react';

import Blurb from './Blurb';

const Template = (args) => <Blurb {...args} />;

export default {
  title: 'Blurb',
  component: Blurb,
};

export const BlurbExample = Template.bind({});
BlurbExample.args = {};
