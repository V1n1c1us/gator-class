import { useState, useCallback, useContext } from 'react';
import { FaJsSquare, FaReact, FaHtml5 } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import { Header, Profile, Item } from '..';
import * as Style from './Card.style';
import { CardProps } from './Card.types';

const Card = ({
  description = 'Default Description',
  subTitle = 'Default SubTitle',
  title = 'Default Title',
}: CardProps) => {
  const [active, setActive] = useState(false);
  const themeContext = useContext(ThemeContext);

  const handleHeart = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <Style.Container>
      <Style.Wrapper>
        <Header active={active} handleHeart={handleHeart} />
        <Profile title={title} subTitle={subTitle} description={description} />
        <Style.Footer>
          <Item title="Html5" Icon={FaHtml5} followers="10k" hoverColor={themeContext.colors.techs.html5} />
          <Item title="Javascript" Icon={FaJsSquare} followers="10k" hoverColor={themeContext.colors.techs.js} />
          <Item title="React" Icon={FaReact} followers="10k" hoverColor={themeContext.colors.techs.react} />
        </Style.Footer>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default Card;
