import { useState, useCallback } from 'react';
import { Header, Profile } from '..';
import * as Style from './Card.style';

const Card = () => {
  const [active, setActive] = useState(false);

  const handleHeart = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <Style.Container>
      <Style.Wrapper>
        <Header active={active} handleHeart={handleHeart} />
        <Style.Header>
          <Profile description="Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!" />
        </Style.Header>
        <Style.Footer>Footer</Style.Footer>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default Card;
