import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';

export const mealGetById = async (id: string) => {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
  const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

  const meal = meals.find((meal) => meal.id === id);

  return meal;
};
