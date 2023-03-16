import {
  // useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { AppError } from '@utils/appError';
// import { format, parse } from 'date-fns';
import { useTheme } from 'styled-components/native';

import { useState } from 'react';

// import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { mealDelete } from '@storage/meal/mealDelete';

// import { mealGetById } from '@storage/meal/mealGetById';
// import { mealsGetAll } from '@storage/meal/mealsGetAll';
import { ChipDiet } from '@components/ChipDiet';
import { DDButtton } from '@components/DDButtton';
import { DDText } from '@components/DDText';

// import { DarkButton } from '@components/DarkButton';
import {
  ButtonsWrapper,
  Container,
  Content,
  Header,
  Icon,
  ModalButtonsWrapper,
  ModalCenter,
  ModalWrapper,
} from './styles';

type RouteParams = {
  meal: MealStorageDTO;
};

export const MealDetails = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [meal, setMeal] = useState<MealStorageDTO | undefined>(
  //   {} as MealStorageDTO,
  // );
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const { meal } = route.params as RouteParams;
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  function handleBackButtom() {
    navigate('home');
  }

  function handleEditMeal() {
    navigate('meal_edit', { mealId: meal.id });
  }

  async function handleRemoveMeal() {
    // Alert.alert();

    try {
      if (meal) {
        await mealDelete(meal.id);
      }

      Keyboard.dismiss();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Remover Refeição', error.message);
      } else {
        Alert.alert('Remover Refeição', 'Não foi possível remover a refeição.');
      }
    }

    navigate('home');
  }

  // async function getMealDetails() {
  //   setIsLoading(true);
  //   const mealDetails = await mealGetById(mealId);

  //   if (mealDetails) {
  //     setMeal(mealDetails);
  //   }

  //   setIsLoading(false);
  // }

  // useFocusEffect(
  //   useCallback(() => {
  //     getMealDetails();
  //   }, []),
  // );

  // if (isLoading) {
  //   return <ActivityIndicator size="large" color={colors.secondary.dark} />;
  // }

  return (
    <>
      <Container
        bgColor={meal?.isOnDiet ? colors.secondary.light : colors.primary.light}
      >
        <Header>
          <TouchableOpacity style={{ width: 32 }} onPress={handleBackButtom}>
            <Icon color={colors.gray[200]} />
          </TouchableOpacity>
          <DDText
            color={colors.gray[100]}
            size="lg"
            weight="bold"
            align="center"
          >
            Refeição
          </DDText>
          <View style={{ width: 32 }} />
        </Header>

        <Content>
          <View style={{ marginBottom: 24 }}>
            <DDText
              size="xl"
              color={colors.gray[100]}
              weight="bold"
              style={{ marginBottom: 8 }}
            >
              {meal.name}
            </DDText>
            <DDText size="md" color={colors.gray[100]}>
              {meal.description}
            </DDText>
          </View>

          <View style={{ marginBottom: 24 }}>
            <DDText
              size="sm"
              weight="bold"
              color={colors.gray[100]}
              style={{ marginBottom: 8 }}
            >
              Data e hora
            </DDText>
            <DDText
              size="md"
              color={colors.gray[100]}
              style={{ marginBottom: 18 }}
            >
              {meal.date} às {meal.time}
            </DDText>
          </View>

          <View style={{ width: '50%' }}>
            <ChipDiet isOnDiet={meal.isOnDiet} />
          </View>
        </Content>

        <ButtonsWrapper>
          <DDButtton
            title="Editar Refeição"
            onPress={handleEditMeal}
            // onPress={() => console.log('Editar')}
            iconType="edit"
            style={{ marginBottom: 8 }}
          />

          <DDButtton
            title="Excluir Refeição"
            onPress={() => setModalVisible(true)}
            iconType="delete"
            isDark={false}
          />
        </ButtonsWrapper>
      </Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalCenter>
          <ModalWrapper>
            <DDText
              align="center"
              weight="bold"
              size="lg"
              style={{ height: 56 }}
            >
              Deseja realmente excluir o{'\n'}registro da refeição?
            </DDText>

            <ModalButtonsWrapper>
              <DDButtton
                title="Cancelar"
                isDark={false}
                onPress={() => setModalVisible(false)}
                style={{ marginRight: 16 }}
              />
              <DDButtton title="Sim, excluir" onPress={handleRemoveMeal} />
            </ModalButtonsWrapper>
          </ModalWrapper>
        </ModalCenter>
      </Modal>
    </>
  );
};
