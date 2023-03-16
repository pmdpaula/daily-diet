import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

export const storageClearAll = async () => {
  AsyncStorage.removeItem(MEAL_COLLECTION);
};
