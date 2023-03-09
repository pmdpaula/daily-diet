import DateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { Control, Controller, FieldValues, useForm } from 'react-hook-form';
// import DatePicker from 'react-native-date-picker';
import uuid from 'react-native-uuid';
import { useTheme } from 'styled-components/native';

import { useEffect, useState } from 'react';

import {
  Alert,
  Keyboard,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { DDText } from '@components/DDText';
import { DarkButtton } from '@components/DarkButtton';
import { DDInput } from '@components/Form/DDInput';
import {
  IsOnDietTypeProps,
  OnDietCheckButton,
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
  const [isOnDietType, setIsOnDietType] = useState<IsOnDietTypeProps | null>();
  const [formDate, setFormDate] = useState(
    format(new Date(), 'yyyy-MM-dd HH:mm'),
  );
  // const [formTime, setFormTime] = useState(new Date());
  const [datePickerMode, setDatePickerMode] = useState<'date' | 'time'>('date');
  const [showDatePicker, setShowDatePicker] = useState(false);

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

  // const control = control as unknown as Control<FieldValues, unknown>;

  async function handleSubmitNewMeal(formData: FormDataProps) {
    if (!isOnDietType) Alert.alert('Selecione se está dentro da dieta');

    // Alert.alert('Refeição cadastrada com sucesso!');

    const newMeal = {
      id: uuid.v4(),
      name: formData.name,
      description: formData.description,
      date: formDate.split(' ')[0],
      time: formDate.split(' ')[1],
      isOnDiet: isOnDietType === 'on',
      // date: format(parse(formData.date + formData.time, 'dd/MM/yyyy HH:mm', new Date()), 'yyyy-MM-dd HH:mm'),
    };

    await console.log(newMeal);
    navigate('meal_feedback', { isOnDiet: newMeal.isOnDiet });
  }

  function handleIsOnDietSelect(type: IsOnDietTypeProps) {
    setIsOnDietType(type);
  }

  function handleBackButtom() {
    navigate('home');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChangeDate(event: DateTimePickerEvent, selectedDate: any) {
    const currentDate = selectedDate || formDate;

    setFormDate(currentDate);
  }

  const handlerDatetimePicker = (currentMode: typeof datePickerMode) => {
    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value: new Date(formDate),
        onChange: onChangeDate,
        mode: currentMode,
        is24Hour: true,
      });
      setShowDatePicker(false);
      // for iOS, add a button that closes the picker
    }
    setDatePickerMode(currentMode);
  };

  useEffect(() => {
    console.log('formDate', formDate);
  }, [formDate]);

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
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DDInput
                  title="Nome"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  numberOfLines={3}
                />
              )}
              name="name"
              defaultValue=""
            />

            <Controller
              control={control}
              name="description"
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DDInput
                  title="Descrição"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <ViewRow>
              <Controller
                control={control}
                name="date"
                defaultValue={formDate.split(' ')[0]}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur } }) => (
                  // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  //   <DDInput
                  //     title="Data"
                  //     value={format(formDate, 'dd.MM.yyyy')}
                  //     // value={value}
                  //     onChange={onChange}
                  //     onBlur={onBlur}
                  //     width={48}
                  //     onFocus={() => showDatepicker('date')}
                  //     showSoftInputOnFocus={false}
                  //     onChangeText={onChange}
                  //   />
                  // </TouchableWithoutFeedback>
                  <DDInput
                    title="Data"
                    value={formDate.split(' ')[0]}
                    // value={value}
                    // onBlur={onBlur}
                    // onChange={onChangeDate}
                    // onChangeText={onChangeDate}
                    width={48}
                    onFocus={() => handlerDatetimePicker('date')}
                    showSoftInputOnFocus={false}
                  />
                )}
              />
              {/* <DDInput
                title="Data"
                value={formDate.split(' ')[0]}
                width={48}
                onTouchStart={() => handlerDatetimePicker('date')}
                showSoftInputOnFocus={false}
              /> */}

              {/* <Controller
                control={control}
                name="time"
                defaultValue={format(formDate, 'HH:mm')}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur } }) => (
                  <DDInput
                    title="Hora"
                    value={format(formDate, 'HH:mm')}
                    width={48}
                    onFocus={() => handlerDatetimePicker('time')}
                    // onChangeText={onChange}
                    showSoftInputOnFocus={false}
                  />
                )}
              /> */}

              <DDInput
                title="Hora"
                value={formDate.split(' ')[1]}
                width={48}
                onTouchStart={() => handlerDatetimePicker('time')}
                showSoftInputOnFocus={false}
              />
            </ViewRow>

            <DDText size="sm" color={colors.gray[200]} weight="bold">
              Está dentro da dieta?
            </DDText>
            <ViewRow>
              <Controller
                control={control}
                name="isOnDiet"
                rules={{ required: true }}
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
                control={control}
                name="isOnDiet"
                rules={{ required: true }}
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

          <DarkButtton
            onPress={handleSubmit(handleSubmitNewMeal)}
            title="Salvar"
            disabled={formState.isSubmitting}
          />
          {/* {showDatePicker && (
            // <Controller
            //   control={control}
            //   name="date"
            //   defaultValue={formDate.split(' ')[0]}
            //   rules={{ required: true }}
            //   render={({ field: { onChange, onBlur, value } }) => (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date(formDate, 'dd.MM.yyyy HH:mm')}
              mode={datePickerMode}
              is24Hour
              display="calendar"
              // onChange={onChange}
              negativeButton={{ label: 'Cancel' }}
            />
            //   )}
            // />
          )} */}
        </Form>
      </Content>
    </Container>
  );
};
