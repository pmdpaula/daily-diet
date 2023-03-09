import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { MealFeedback } from '@screens/MealFeedback';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="new_meal"
  >
    <Screen name="home" component={Home} />
    <Screen name="statistics" component={Statistics} />
    <Screen name="new_meal" component={NewMeal} />
    <Screen name="meal_feedback" component={MealFeedback} />
  </Navigator>
);
