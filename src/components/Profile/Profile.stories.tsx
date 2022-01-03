import { Story } from '@storybook/react';
import { ProfileProps } from './Profile.types';
import { Profile } from '@src/components';

export default {
  title: 'Components/Profile',
  component: Profile,
  argTypes: {
    titile: {
      control: 'text',
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
