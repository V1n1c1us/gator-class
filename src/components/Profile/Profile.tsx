import Lottie from 'react-lottie';
import { useMemo, useState } from 'react';
import avatar1 from '../../../assets/images/1.json';
import avatar2 from '../../../assets/images/2.json';
import avatar3 from '../../../assets/images/3.json';
import avatar4 from '../../../assets/images/4.json';
import * as Style from './Profile.style';
import { ProfileProps } from './Profile.types';
import { Button } from '@src/components';
const Profile = ({
  description = 'Default Description',
  buttonLabel = 'Default Label',
  subTitle = 'Default Subscription',
  title = 'Default Title',
}: ProfileProps) => {
  const [avatarRandom] = useState(Math.floor(Math.random() * (3 - 0 + 1) + 0));

  const dataAnimation = useMemo(() => {
    return [avatar1, avatar2, avatar3, avatar4];
  }, []);

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: dataAnimation[avatarRandom],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  }, [avatarRandom, dataAnimation]);

  return (
    <Style.Container>
      <Style.AvatarAdapter>
        <Style.Avatar>
          <Lottie options={defaultOptions} height={120} width={120} />
        </Style.Avatar>
      </Style.AvatarAdapter>
      <Style.Title>{title}</Style.Title>
      <Style.Subtitle>{subTitle}</Style.Subtitle>
      <Style.Description>{description}</Style.Description>

      <Style.ButtonAdapter>
        <Button buttonLabel={buttonLabel} />
      </Style.ButtonAdapter>
    </Style.Container>
  );
};

export default Profile;
