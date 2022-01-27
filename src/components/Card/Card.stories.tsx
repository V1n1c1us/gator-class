import { Story } from '@storybook/react';
import { CardProps } from './Card.types';
import { Card } from '@src/components';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    description: {
      control: 'text',
      defaultValue: 'Default description',
    },
    subTitle: {
      control: 'text',
      defaultValue: 'Default Subtitle',
    },
    title: {
      control: 'text',
      defaultValue: 'Default title',
    },
  },
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
