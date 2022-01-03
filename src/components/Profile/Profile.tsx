import Lottie from 'react-lottie';
import animationData from '../../../assets/images/89033-star-in-hand-baby-astronaut.json';
import * as Style from './Profile.style';
import { ProfileProps } from './Profile.types';

const Profile = ({
  description = 'Default Description',
  follow = 'Follow',
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
      <Lottie options={defaultOptions} height={100} width={100} />

      <Style.Wrapper>
        <Style.Title>{title}</Style.Title>
        <Style.Subtitle>{subTitle}</Style.Subtitle>
        <Style.Description>{description}</Style.Description>

        <Style.ButtonAdapter>
          <Style.Follow>{follow}</Style.Follow>
        </Style.ButtonAdapter>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default Profile;
