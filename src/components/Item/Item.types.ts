export type ItemProps = {
  color?: string;
  followers?: string;
  hoverColor?: string;
  // eslint-disable-next-line no-undef
  Icon?: React.FC<any>;
  title?: string;
};

export type IconStorybook = {
  // eslint-disable-next-line no-undef
  [key: string]: React.FC<any>;
};
