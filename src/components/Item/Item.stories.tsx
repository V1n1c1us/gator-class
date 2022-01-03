import { Story } from '@storybook/react';
import { FaReact, FaHtml5, FaJsSquare, FaJenkins, FaJava, FaLaravel, FaNodeJs, FaPhp } from 'react-icons/fa';
import { ItemProps, IconStorybook } from './Item.types';
import { Item } from '@src/components';
import themes from '@src/themes';
const icons: IconStorybook = {
  FaHtml5,
  FaJava,
  FaJenkins,
  FaJsSquare,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
};

export default {
  title: 'Components/Item',
  component: Item,
  argTypes: {
    Icon: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
      defaultValue: Object.keys(icons)[0],
    },
    title: {
      control: 'text',
      defaultValue: 'Title',
    },
    color: {
      control: 'color',
      defaultValue: `${themes.colors.white}`,
    },
    hoverColor: {
      control: 'color',
      defaultValue: `${themes.colors.white}`,
    },
    followers: {
      control: 'text',
      defaultValue: '10k',
    },
  },
};

const Template: Story<ItemProps> = (args) => (
  <div>
    <Item {...args} Icon={icons[args.Icon as unknown as keyof IconStorybook]} />
  </div>
);

export const Default = Template.bind({});
