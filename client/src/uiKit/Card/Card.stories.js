import React from 'react';

import Card from './Card';
import Avatar from '../Avatar';

const Template = (args) => <Card {...args} />;

export default {
  title: 'Card',
  component: Card,
};

export const CardExampleOne = Template.bind({});
CardExampleOne.args = {
  props: {
    children: <Avatar />,
  },
};

export const CardExampleTwo = Template.bind({});
CardExampleTwo.args = {
  props: {
    children: 'Content goes here.',
  },
};
