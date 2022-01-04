import { ButtonProps } from './Button.types';
import * as Style from './Button.style';
const Button = ({ buttonLabel = 'Default Label', bgColor, textColor }: ButtonProps) => (
  <Style.Button bgColor={bgColor} textColor={textColor}>
    {buttonLabel}
  </Style.Button>
);

export default Button;
