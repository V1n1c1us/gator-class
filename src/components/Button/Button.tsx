import { ButtonProps } from './Button.types';
import * as Style from './Button.style';

const Button = ({ buttonTitle = 'Default title' }: ButtonProps) => <Style.Button>{buttonTitle}</Style.Button>;

export default Button;
