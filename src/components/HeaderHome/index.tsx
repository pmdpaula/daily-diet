import LogoImg from '@assets/logo.png';

import { Container, Logo, Photo, UserButton } from './styles';

export const HeaderHome = () => {
  return (
    <Container>
      <Logo source={LogoImg} />
      <UserButton>
        {/* <UserIcon /> */}
        <Photo
          source={{ uri: 'https://avatars.githubusercontent.com/u/19227876' }}
        />
      </UserButton>
    </Container>
  );
};
