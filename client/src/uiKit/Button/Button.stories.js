import React from 'react';

import { BsFillAwardFill } from 'react-icons/bs';
import Button from './Button';

const Template = (args) => <Button {...args} />;

export default {
  title: 'Button',
  component: Button,
};

export const ButtonJustText = Template.bind({});
ButtonJustText.args = {
  text: 'Button',
  theme: 'primary',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  text: 'Button',
  icon: <BsFillAwardFill />,
};

export const ButtonOnlyIcon = Template.bind({});
ButtonOnlyIcon.args = {
  icon: <BsFillAwardFill />,
};
