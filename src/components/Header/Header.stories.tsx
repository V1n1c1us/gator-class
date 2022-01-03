import { Story } from '@storybook/react';
import { HeaderProps } from './Header.types';
import Header from '@src/components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    active: {
      control: 'boolean',
      defaultValue: false,
    },
    handleHeart: {
      action: 'onClick',
    },
  },
};

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
