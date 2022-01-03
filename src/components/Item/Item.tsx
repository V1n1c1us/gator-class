import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import * as Style from './Item.style';
import { ItemProps } from './Item.types';

const Item = ({ Icon, title = 'Default Title', color = '#fff', followers = '0', hoverColor }: ItemProps) => {
  const themeContext = useContext(ThemeContext);
  return (
    <Style.Container>
      <Style.IconAdapter color={color || themeContext.colors.white} hoverColor={hoverColor || themeContext.colors.gray}>
        <Icon />
      </Style.IconAdapter>
      <Style.Title>{title}</Style.Title>
      <Style.Followers>{followers}</Style.Followers>
    </Style.Container>
  );
};

export default Item;
