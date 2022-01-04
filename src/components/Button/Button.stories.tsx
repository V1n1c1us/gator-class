import { Story } from '@storybook/react';
import { ButtonProps } from './Button.types';
import Button from '@src/components/Button';
import themes from '@src/themes';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    buttonLabel: {
      control: 'text',
      defaultValue: 'Default Label',
    },
    textColor: {
      control: 'color',
      defaultValue: `${themes.colors.secondary}`,
    },
    bgColor: {
      control: 'color',
      defaultValue: `${themes.colors.secondary}`,
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
