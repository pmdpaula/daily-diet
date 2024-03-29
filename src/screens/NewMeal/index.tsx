// import DateTimePicker, {
//   DateTimePickerAndroid,
//   DateTimePickerEvent,
// } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { AppError } from '@utils/appError';
import { format } from 'date-fns';
import { Control, Controller, FieldValues, useForm } from 'react-hook-form';
import uuid from 'react-native-uuid';
import { useTheme } from 'styled-components/native';

import { useState } from 'react';

import { Alert, Keyboard, TouchableOpacity, View } from 'react-native';

import { mealCreate } from '@storage/meal/mealCreate';

import { DDButtton } from '@components/DDButtton';
import { DDText } from '@components/DDText';
// import { DarkButton } from '@components/DarkButton';
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

export const NewMeal = () => {
  const [isOnDietType, setIsOnDietType] = useState<OnDietTypeProps | null>();
  const [formDate, setFormDate] = useState(format(new Date(), 'dd/MM/yyyy'));
  const [formTime, setFormTime] = useState(format(new Date(), 'HH:mm'));
  // const [datePickerMode, setDatePickerMode] = useState<'date' | 'time'>('date');
  // const [showDatePicker, setShowDatePicker] = useState(false);

  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    defaultValues: {
      name: '',
      description: '',
      date: '',
      time: '',
      isOnDiet: false,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const controlForm = control as unknown as Control<FieldValues, any>;

  // function onChange(event: any, arg: any) {
  //   return arg.nativeEvent.text;
  // }

  async function submitNewMeal(formData: FormDataProps) {
    if (!isOnDietType) Alert.alert('Selecione se está dentro da dieta');

    const newMeal = {
      id: uuid.v4().toString(),
      name: formData.name,
      description: formData.description,
      date: formDate,
      time: formTime,
      isOnDiet: isOnDietType === 'on',
      // date: format(parse(formData.date + formData.time, 'dd/MM/yyyy HH:mm', new Date()), 'yyyy-MM-dd HH:mm'),
    };

    // console.log(newMeal);

    try {
      await mealCreate(newMeal);

      Keyboard.dismiss();
      // const storedMeals = mealsGetAll();
      // console.log(
      //   '🚀 ~ file: index.tsx:101 ~ submitNewMeal ~ storedMeals:',
      //   storedMeals,
      // );
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Refeição', error.message);
      } else {
        Alert.alert('Nova Refeição', 'Não foi possível adicionar a refeição.');
      }
    }

    navigate('meal_feedback', { isOnDiet: newMeal.isOnDiet });
  }

  function handleIsOnDietSelect(type: OnDietTypeProps) {
    setIsOnDietType(type);
  }

  function handleBackButtom() {
    navigate('home');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // function onChangeDate(event: DateTimePickerEvent, selectedDate: any) {
  //   const currentDate = selectedDate || formDate;

  //   setFormDate(currentDate);
  // }

  // const handlerDatetimePicker = (currentMode: typeof datePickerMode) => {
  //   if (Platform.OS === 'android') {
  //     DateTimePickerAndroid.open({
  //       value: new Date(formDate),
  //       onChange: onChangeDate,
  //       mode: currentMode,
  //       is24Hour: true,
  //     });
  //     setShowDatePicker(false);
  //     // for iOS, add a button that closes the picker
  //   }
  //   setDatePickerMode(currentMode);
  // };

  return (
    <Container bgColor={colors.gray[500]}>
      <Header>
        <TouchableOpacity style={{ width: 32 }} onPress={handleBackButtom}>
          <Icon color={colors.gray[200]} />
        </TouchableOpacity>
        <DDText color={colors.gray[100]} size="lg" weight="bold" align="center">
          Nova refeição
        </DDText>
        <View style={{ width: 32 }} />
      </Header>
      <Content>
        <Form>
          <Fields>
            <Controller
              control={controlForm}
              name="name"
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DDInput
                  title="Nome"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={controlForm}
              name="description"
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DDInput
                  title="Descrição"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  numberOfLines={3}
                />
              )}
            />

            <ViewRow>
              <Controller
                control={controlForm}
                name="date"
                defaultValue={formDate}
                // rules={{ required: true }}
                render={() => (
                  <DDInput
                    title="Data"
                    value={formDate}
                    // onChange={onChange}
                    width={48}
                    // onTouchStart={() => handlerDatetimePicker('date')}
                    onChangeText={setFormDate}
                  />
                )}
              />

              <Controller
                control={controlForm}
                name="time"
                defaultValue={formTime}
                // rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <DDInput
                    title="Hora"
                    value={formTime}
                    width={48}
                    onChange={(e) => onChange(e)}
                    onChangeText={setFormTime}
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
                // rules={{ required: true }}
                render={() => (
                  <OnDietCheckButton
                    title="Sim"
                    type="on"
                    isActive={isOnDietType === 'on'}
                    onPress={() => handleIsOnDietSelect('on')}
                  />
                )}
              />

              <Controller
                control={controlForm}
                name="isOnDiet"
                // rules={{ required: true }}
                render={() => (
                  <OnDietCheckButton
                    title="Não"
                    type="out"
                    isActive={isOnDietType === 'out'}
                    onPress={() => handleIsOnDietSelect('out')}
                  />
                )}
              />
            </ViewRow>
          </Fields>

          <DDButtton
            onPress={handleSubmit(submitNewMeal)}
            title="Cadastrar refeição"
            disabled={formState.isSubmitting}
          />
          {/* {showDatePicker && (
            <Controller
              control={control}
              name="date"
              defaultValue={formDate.split(' ')[0]}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date(formDate)}
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
