import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/appError';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';
import { mealsGetAll } from './mealsGetAll';

export const mealUpdate = async (newMealData: MealStorageDTO) => {
  try {
    const storedMeals = await mealsGetAll();

    const tempStorage = storedMeals.filter(
      (meal) => meal.id !== newMealData.id,
    );
    const storage = JSON.stringify([...tempStorage, newMealData]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw new AppError('Houve um erro ao atualizar refeição.');
  }
};
