import { Story } from '@storybook/react';

import { ProfileProps } from './Profile.types';
import { Profile } from '@src/components';

export default {
  title: 'Components/Profile',
  component: Profile,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Default Title',
    },
    subTitle: {
      control: 'text',
      defaultValue: 'Default Subtitle',
    },
    description: {
      control: 'text',
      defaultValue: 'Default Description',
    },
    buttonLabel: {
      control: 'text',
      defaultValue: 'Default Label',
    },
  },
};

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
