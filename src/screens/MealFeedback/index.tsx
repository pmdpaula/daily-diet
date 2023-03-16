import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { Image, Text, View } from 'react-native';

import { DDButtton } from '@components/DDButtton';
import { DDText } from '@components/DDText';

// import { DarkButton } from '@components/DarkButton';
import OnDietImg from '@assets/onDietImage.png';
import OutDietImg from '@assets/outDietImage.png';

import { Container } from './styles';

type RouteParams = {
  isOnDiet: boolean;
};

export const MealFeedback = () => {
  const route = useRoute();
  const theme = useTheme();
  const { navigate } = useNavigation();

  const { isOnDiet } = route.params as RouteParams;

  const title = isOnDiet ? 'Continue Assim!' : 'Que pena!';

  const SubTitleOnDiet = () => (
    <Text
      style={{
        textAlign: 'center',
        lineHeight: 20,
        fontFamily: theme.font_family.regular,
      }}
    >
      Você continua <Text style={{ fontWeight: 'bold' }}>dentro da dieta.</Text>{' '}
      Muito bem!
    </Text>
  );

  const SubTitleOutDiet = () => (
    <Text
      style={{
        textAlign: 'center',
        lineHeight: 20,
        fontFamily: theme.font_family.regular,
      }}
    >
      Você <Text style={{ fontWeight: 'bold' }}>saiu da dieta</Text> dessa vez,
      mas continue {'\n'} se esforçando e não desista!
    </Text>
  );

  const image = isOnDiet ? OnDietImg : OutDietImg;

  function handleBackToHome() {
    navigate('home');
  }

  return (
    <Container>
      <DDText
        align="center"
        size="xl"
        color={
          isOnDiet ? theme.colors.secondary.dark : theme.colors.primary.dark
        }
        weight="bold"
        style={{ marginBottom: 16 }}
      >
        {title}
      </DDText>
      <View style={{ height: 36, flexWrap: 'wrap' }}>
        {isOnDiet ? <SubTitleOnDiet /> : <SubTitleOutDiet />}
      </View>

      <Image source={image} style={{ marginVertical: 36 }} />

      <DDButtton
        title="Ir para a página inicial"
        // iconType=''
        onPress={handleBackToHome}
        style={{ width: 190 }}
      />
    </Container>
  );
};
