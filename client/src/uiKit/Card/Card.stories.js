import React from 'react';

import Card from './Card';

const Template = (args) => <Card {...args} />;

export default {
  title: 'Card',
  component: Card,
};

export const CardExample = Template.bind({});
CardExample.args = {
  props: {
    children: 'New content added.',
  },
};
