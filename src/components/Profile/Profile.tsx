import Lottie from 'react-lottie';
import animationData from '../../../assets/images/89033-star-in-hand-baby-astronaut.json';
import * as Style from './Profile.style';
import { ProfileProps } from './Profile.types';
import { Button } from '@src/components';

const Profile = ({
  description = 'Default Description',
  buttonTitle = 'Follow',
  subTitle = 'Default Subscription',
  title = 'Default Title',
}: ProfileProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Style.Container>
      <Style.AvatarAdapter>
        <Style.Avatar>
          <Lottie options={defaultOptions} height={100} width={100} />
        </Style.Avatar>
      </Style.AvatarAdapter>
      <Style.Title>{title}</Style.Title>
      <Style.Subtitle>{subTitle}</Style.Subtitle>
      <Style.Description>{description}</Style.Description>

      <Style.ButtonAdapter>
        <Button buttonTitle={buttonTitle} />
      </Style.ButtonAdapter>
    </Style.Container>
  );
};

export default Profile;
