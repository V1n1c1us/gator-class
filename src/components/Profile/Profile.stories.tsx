import { Story } from '@storybook/react';
import { ProfileProps } from './Profile.types';
import { Profile } from '@src/components';

export default {
  title: 'Components/Profile',
  component: Profile,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Default',
    },
    subTitle: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
};

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
