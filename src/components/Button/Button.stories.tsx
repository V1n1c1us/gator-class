import { Story } from '@storybook/react';
import { ButtonProps } from './Button.types';
import Button from '@src/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Default',
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
