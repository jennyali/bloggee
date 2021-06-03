import ButtonComponent from './Button';

export default {
  title: 'Button',
  component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template;

export const ButtonWithText = Template.bind({});

ButtonWithText.args = {
  text: 'Foo',
};
