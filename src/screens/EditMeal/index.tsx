// import DateTimePicker, {
//   DateTimePickerAndroid,
//   DateTimePickerEvent,
// } from '@react-native-community/datetimepicker';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { AppError } from '@utils/appError';
import { Control, Controller, FieldValues, useForm } from 'react-hook-form';
import uuid from 'react-native-uuid';
import { useTheme } from 'styled-components/native';

import { useCallback, useEffect, useState } from 'react';

import {
  ActivityIndicator,
  Alert,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { mealCreate } from '@storage/meal/mealCreate';
import { mealDelete } from '@storage/meal/mealDelete';
import { mealGetById } from '@storage/meal/mealGetById';
import { mealUpdate } from '@storage/meal/mealUpdate';

import { DDButtton } from '@components/DDButtton';
import { DDText } from '@components/DDText';
import { DDInput } from '@components/Form/DDInput';
import {
  OnDietCheckButton,
  OnDietTypeProps,
} from '@components/Form/OnDietCheckButton';

import {
  Container,
  Content,
  Fields,
  Form,
  Header,
  Icon,
  ViewRow,
} from './styles';

type FormDataProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
};

type RouteParams = {
  mealId: string;
};

export const EditMeal = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [onDietType, setOnDietType] = useState<OnDietTypeProps | null>();
  const [meal, setMeal] = useState<MealStorageDTO | undefined>(
    {} as MealStorageDTO,
  );
  const [mealName, setMealName] = useState<string>(meal?.name || '');
  const [mealDescription, setMealDescription] = useState<string>(
    meal?.description || '',
  );
  const [mealDate, setMealDate] = useState<string>(meal?.date || '');
  const [mealTime, setMealTime] = useState<string>(meal?.time || '');
  const [mealIsOnDiet, setMealIsOnDiet] = useState<boolean>(
    meal?.isOnDiet || false,
  );
  // const [datePickerMode, setDatePickerMode] = useState<'date' | 'time'>('date');
  // const [showDatePicker, setShowDatePicker] = useState(false);

  const route = useRoute();
  const { mealId } = route.params as RouteParams;
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();

  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    defaultValues: {
      name: meal?.name,
      description: meal?.description,
      date: meal?.date,
      time: meal?.time,
      isOnDiet: meal?.isOnDiet,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const controlForm = control as unknown as Control<FieldValues, any>;

  // function onChange(event: any, arg: any) {
  //   return arg.nativeEvent.text;
  // }
  async function getMealDetails() {
    setIsLoading(true);
    const mealDetails = await mealGetById(mealId);

    if (mealDetails) {
      setMeal(mealDetails);
      setMealName(mealDetails.name);
      setMealDescription(mealDetails.description);
      setMealDate(mealDetails.date);
      setMealTime(mealDetails.time);
      setMealIsOnDiet(mealDetails.isOnDiet);
    }

    setIsLoading(false);
  }

  async function submitEditMeal(formData: FormDataProps) {
    if (!mealIsOnDiet) Alert.alert('Selecione se está dentro da dieta');

    console.log(formData);

    const updatedMeal: MealStorageDTO = {
      id: meal?.id || uuid.v4().toString(),
      name: formData.name,
      description: formData.description,
      date: mealDate,
      time: mealTime,
      isOnDiet: mealIsOnDiet,
      // date: format(parse(formData.date + formData.time, 'dd/MM/yyyy HH:mm', new Date()), 'yyyy-MM-dd HH:mm'),
    };

    console.log(updatedMeal);

    try {
      await mealUpdate(updatedMeal);

      Keyboard.dismiss();
      // const storedMeals = mealsGetAll();
      // console.log(
      //   '🚀 ~ file: index.tsx:101 ~ submitEditMeal ~ storedMeals:',
      //   storedMeals,
      // );
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Atualizar Refeição', error.message);
      } else {
        Alert.alert(
          'Atualizar Refeição',
          'Não foi possível adicionar a refeição.',
        );
      }
    }

    navigate('meal_details', { meal: updatedMeal });
  }

  function handleOnDietSelect(type: OnDietTypeProps) {
    // setOnDietType(type);
    setMealIsOnDiet(type === 'on');
  }

  function handleBackButtom() {
    // navigate('home');
    goBack();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // function onChangeDate(event: DateTimePickerEvent, selectedDate: any) {
  //   const currentDate = selectedDate || mealDate;

  //   setMealDate(currentDate);
  // }

  // const handlerDatetimePicker = (currentMode: typeof datePickerMode) => {
  //   if (Platform.OS === 'android') {
  //     DateTimePickerAndroid.open({
  //       value: new Date(mealDate),
  //       onChange: onChangeDate,
  //       mode: currentMode,
  //       is24Hour: true,
  //     });
  //     setShowDatePicker(false);
  //     // for iOS, add a button that closes the picker
  //   }
  //   setDatePickerMode(currentMode);
  // };
  useFocusEffect(
    useCallback(() => {
      getMealDetails();
    }, []),
  );

  useEffect(() => {
    getMealDetails();
  }, []);

  if (isLoading)
    return <ActivityIndicator size="large" color={colors.secondary.medium} />;

  return (
    <Container bgColor={colors.gray[500]}>
      <Header>
        <TouchableOpacity style={{ width: 32 }} onPress={handleBackButtom}>
          <Icon color={colors.gray[200]} />
        </TouchableOpacity>
        <DDText color={colors.gray[100]} size="lg" weight="bold" align="center">
          Editar refeição
        </DDText>
        <View style={{ width: 32 }} />
      </Header>
      <Content>
        <Form>
          <Fields>
            <Controller
              control={controlForm}
              name="id"
              // rules={{ required: true }}
              defaultValue={meal?.id}
              render={({ field: { onChange, onBlur, value } }) => (
                <DDInput
                  title="Identificador"
                  onBlur={onBlur}
                  onChange={onChange}
                  // onChangeText={setMealName}
                  value={meal?.id}
                  readOnly
                />
              )}
            />
            <Controller
              control={controlForm}
              name="name"
              rules={{ required: true }}
              defaultValue={mealName}
              render={({ field: { onChange, onBlur, value } }) => (
                <DDInput
                  title="Nome"
                  onBlur={onBlur}
                  onChange={onChange}
                  onChangeText={setMealName}
                  value={mealName}
                />
              )}
            />

            <Controller
              control={controlForm}
              name="description"
              defaultValue={mealDescription}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DDInput
                  title="Descrição"
                  onBlur={onBlur}
                  onChange={onChange}
                  onChangeText={setMealDescription}
                  value={mealDescription}
                  numberOfLines={3}
                />
              )}
            />

            <ViewRow>
              <Controller
                control={controlForm}
                name="date"
                defaultValue={mealDate}
                // rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <DDInput
                    title="Data"
                    value={mealDate}
                    onChange={onChange}
                    width={48}
                    // onTouchStart={() => handlerDatetimePicker('date')}
                    onChangeText={setMealDate}
                  />
                )}
              />

              <Controller
                control={controlForm}
                name="time"
                defaultValue={mealTime}
                // rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <DDInput
                    title="Hora"
                    value={mealTime}
                    width={48}
                    onChange={onChange}
                    onChangeText={setMealTime}
                    // onTouchStart={() => handlerDatetimePicker('time')}
                  />
                )}
              />
            </ViewRow>

            <DDText size="sm" color={colors.gray[200]} weight="bold">
              Está dentro da dieta?
            </DDText>
            <ViewRow>
              <Controller
                control={controlForm}
                name="isOnDiet"
                defaultValue={mealIsOnDiet}
                // rules={{ required: true }}
                render={({ field: { value } }) => (
                  <OnDietCheckButton
                    title="Sim"
                    type="on"
                    isActive={mealIsOnDiet}
                    onPress={() => handleOnDietSelect('on')}
                  />
                )}
              />

              <Controller
                control={controlForm}
                name="isOnDiet"
                defaultValue={mealIsOnDiet}
                // rules={{ required: true }}
                render={({ field: { value } }) => (
                  <OnDietCheckButton
                    title="Não"
                    type="out"
                    isActive={!mealIsOnDiet}
                    onPress={() => handleOnDietSelect('out')}
                  />
                )}
              />
            </ViewRow>
          </Fields>

          <DDButtton
            onPress={handleSubmit(submitEditMeal)}
            // onPress={handleSubmit(async (data) => {
            //   console.log(data);
            // })}
            title="Salvar alterações"
            disabled={formState.isSubmitting}
          />
          {/* {showDatePicker && (
            <Controller
              control={control}
              name="date"
              defaultValue={mealDate.split(' ')[0]}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date(mealDate)}
              mode={datePickerMode}
              is24Hour
              display="calendar"
              // onChange={onChange}
              negativeButton={{ label: 'Cancel' }}
            />
              )}
            />
          )} */}
        </Form>
      </Content>
    </Container>
  );
};
