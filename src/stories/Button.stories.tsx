import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps & { disabled: boolean }> = (args) => (
  <Button {...args}>My button</Button>
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
};
