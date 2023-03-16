import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/appError';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';
import { mealsGetAll } from './mealsGetAll';

export const mealDelete = async (mealId: string) => {
  try {
    const storedMeals = await mealsGetAll();

    const storage = storedMeals.filter((meal) => meal.id !== mealId);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
  } catch (error) {
    throw new AppError('Houve um erro ao atualizar refeição.');
  }
};
