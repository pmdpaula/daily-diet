import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/appError';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';
import { mealsGetAll } from './mealsGetAll';

export const mealCreate = async (newMeal: MealStorageDTO) => {
  try {
    const storedMeals = await mealsGetAll();

    const storage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw new AppError('Houve um erro ao cadastrar refeição.');
  }
};
