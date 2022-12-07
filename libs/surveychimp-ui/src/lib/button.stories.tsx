import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Button', variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Button', variant: "secondary" };