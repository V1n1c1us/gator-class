import { ButtonProps } from './Button.types';
import * as Style from './Button.style';

const Button = ({ buttonTitle = 'Default title' }: ButtonProps) => (
  <Style.ButtonAdapter>
    <Style.Button>{buttonTitle}</Style.Button>
  </Style.ButtonAdapter>
);

export default Button;
