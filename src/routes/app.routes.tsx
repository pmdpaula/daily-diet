import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EditMeal } from '@screens/EditMeal';
import { Home } from '@screens/Home';
import { MealDetails } from '@screens/MealDetails';
import { MealFeedback } from '@screens/MealFeedback';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="home"
  >
    <Screen name="home" component={Home} />
    <Screen name="statistics" component={Statistics} />
    <Screen name="new_meal" component={NewMeal} />
    <Screen name="meal_feedback" component={MealFeedback} />
    <Screen name="meal_details" component={MealDetails} />
    <Screen name="meal_edit" component={EditMeal} />
  </Navigator>
);
