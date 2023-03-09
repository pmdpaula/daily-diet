import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { View } from 'react-native';

import { AppRoutes } from './app.routes';

export const Routes = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.gray[700],
        width: '100%',
      }}
    >
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};
