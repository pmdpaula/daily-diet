import { MealStorageDTO } from '../storage/meal/MealStorageDTO';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        percent: number;
      };
      new_meal: undefined;
      meal_feedback: {
        isOnDiet: boolean;
      };
      meal_details: {
        meal: MealStorageDTO;
      };
      meal_edit: {
        mealId: string;
      };
    }
  }
}
