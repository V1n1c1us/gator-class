import { FaHeart } from 'react-icons/fa';
import * as Style from './Header.style';
import { HeaderProps } from './Header.types';

const Header = ({ handleHeart, active }: HeaderProps) => {
  return (
    <Style.Container>
      <Style.IconArrowLeft size={16} />
      <Style.Options>
        {active ? (
          <FaHeart size={16} color="red" onClick={handleHeart} />
        ) : (
          <Style.IconHeart size={16} onClick={handleHeart} />
        )}
        <Style.IconElipsiV size={16} />
      </Style.Options>
    </Style.Container>
  );
};

export default Header;
