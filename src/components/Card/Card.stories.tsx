import { Story } from '@storybook/react';
import { Card } from '@src/components';

export default {
  title: 'Card',
  component: Card,
};

const Template: Story = (args) => <Card {...args} />;

export const Default = Template.bind({});
