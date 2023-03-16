import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { useCallback, useEffect, useState } from 'react';

import {
  FlatList,
  Pressable,
  SectionList,
  SectionListData,
} from 'react-native';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { mealsGetAll } from '@storage/meal/mealsGetAll';
import { storageClearAll } from '@storage/storageClearAll';

import { DDButtton } from '@components/DDButtton';
import { DDText } from '@components/DDText';
// import { DailyDiet } from '@components/DailyDiet';
import { HeaderHome } from '@components/HeaderHome';
import { ListEmpty } from '@components/ListEmpty';
import { Meal } from '@components/Meal';
import { PercentResume } from '@components/PercentResume';
import { ScreenContainer } from '@components/ScreenContainer';

import { DietListWrapper } from './styles';

export type MealProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  isOnDiet: boolean;
};

export type MealSectionsProps = { title: string; data: MealStorageDTO[] };

// const meals: MealProps[] = [
//   {
//     id: '1',
//     name: 'Café da manhã',
//     description: 'Café com leite, pão com manteiga e queijo, suco de laranja',
//     date: '12-08-2022T08:00:00',
//     isOnDiet: false,
//   },
//   {
//     id: '2',
//     name: 'Almoço',
//     description: 'Arroz, feijão, carne, salada, suco de laranja',
//     date: '12-08-2022T12:00:00',
//     isOnDiet: true,
//   },
//   {
//     id: '3',
//     name: 'Jantar',
//     description: 'Tapioca com queijo branco, suco de laranja',
//     date: '12-08-2022T18:00:00',
//     isOnDiet: true,
//   },
//   {
//     id: '4',
//     name: 'Lanche da tarde',
//     description: 'Barra de fibras',
//     date: '14-08-2022T16:00:00',
//     isOnDiet: true,
//   },
//   {
//     id: '5',
//     name: 'Café da manhã',
//     description: 'Café, bolacha de água e sal',
//     date: '14-08-2022T08:00:00',
//     isOnDiet: true,
//   },
//   {
//     id: '6',
//     name: 'Almoço',
//     description: 'Salada, com frango grelhado e suco de melancia',
//     date: '14-08-2022T12:00:00',
//     isOnDiet: true,
//   },
//   {
//     id: '7',
//     name: 'Jantar',
//     description: 'Arroz com batata doce e chá de hibisco',
//     date: '15-08-2022T18:00:00',
//     isOnDiet: true,
//   },
//   {
//     id: '8',
//     name: 'Lanche da tarde',
//     description: 'Iogurte natural com granola',
//     date: '15-08-2022T16:00:00',
//     isOnDiet: true,
//   },
//   {
//     id: '9',
//     name: 'Almoço',
//     description: 'Hamburguer e cerveja',
//     date: '15-08-2022T13:00:00',
//     isOnDiet: false,
//   },
// ];

// const mealsSections = [
//   {
//     title: '12-08-2022',
//     data: [
//       {
//         id: '1',
//         name: 'Café da manhã',
//         description:
//           'Café com leite, pão com manteiga e queijo, suco de laranja',
//         date: '12-08-2022T08:00:00',
//         isOnDiet: false,
//       },
//       {
//         id: '2',
//         name: 'Almoço',
//         description: 'Arroz, feijão, carne, salada, suco de laranja',
//         date: '12-08-2022T12:00:00',
//         isOnDiet: true,
//       },
//       {
//         id: '3',
//         name: 'Jantar',
//         description: 'Tapioca com queijo branco, suco de laranja',
//         date: '12-08-2022T18:00:00',
//         isOnDiet: true,
//       },
//     ],
//   },
//   {
//     title: '14-08-2022',
//     data: [
//       {
//         id: '4',
//         name: 'Lanche da tarde',
//         description: 'Barra de fibras',
//         date: '14-08-2022T16:00:00',
//         isOnDiet: true,
//       },
//       {
//         id: '5',
//         name: 'Café da manhã',
//         description: 'Café, bolacha de água e sal',
//         date: '14-08-2022T08:00:00',
//         isOnDiet: true,
//       },
//       {
//         id: '6',
//         name: 'Almoço',
//         description: 'Salada, com frango grelhado e suco de melancia',
//         date: '14-08-2022T12:00:00',
//         isOnDiet: true,
//       },
//     ],
//   },
//   {
//     title: '15-08-2022',
//     data: [
//       {
//         id: '7',
//         name: 'Jantar',
//         description: 'Arroz com batata doce e chá de hibisco',
//         date: '15-08-2022T18:00:00',
//         isOnDiet: true,
//       },
//       {
//         id: '8',
//         name: 'Lanche da tarde',
//         description: 'Iogurte natural com granola',
//         date: '15-08-2022T16:00:00',
//         isOnDiet: true,
//       },
//       {
//         id: '9',
//         name: 'Almoço',
//         description: 'Hamburguer e cerveja',
//         date: '15-08-2022T13:00:00',
//         isOnDiet: false,
//       },
//     ],
//   },
// ] as MealSectionsProps[];

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState(80.86);
  const [mealsList, setMealsList] = useState<MealStorageDTO[]>([]);
  const [refactoredMealsList, setRefactoredMealsList] = useState<
    MealSectionsProps[]
  >([]);

  const theme = useTheme();
  const { navigate } = useNavigation();

  function countPercent() {
    const total = mealsList.length;
    const onDiet = mealsList.filter((meal) => meal.isOnDiet).length;

    const result = (onDiet / total) * 100;

    setPercent(result);
  }

  function refactorMealsList() {
    const data = [] as MealSectionsProps[];

    mealsList.forEach((meal) => {
      const date = meal.date;

      const isTitleSectionExists = data.find((item) => item.title === date);

      if (!isTitleSectionExists) {
        const newItem = {
          title: date,
          data: [meal],
        };

        data.push(newItem);
      } else {
        const index = data.findIndex((item) => item.title === date);

        data[index].data.push(meal);
      }
    });

    // return JSON.stringify(data);
    // return data;
    setRefactoredMealsList(data);
  }

  function handleOnPressNewMeal() {
    navigate('new_meal');
  }

  async function fetchMeals() {
    setIsLoading(true);
    const meals = await mealsGetAll();
    setMealsList(meals);

    setIsLoading(false);
  }

  function handleOnPressMeal(meal: MealStorageDTO) {
    navigate('meal_details', { meal });
  }

  useEffect(() => {
    // console.log(JSON.stringify(refactoredMealsList));
    refactorMealsList();
    countPercent();
    // storageClearAll();
  }, [mealsList]);

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
      refactorMealsList();
    }, []),
  );

  return (
    <ScreenContainer style={{ paddingHorizontal: 24 }}>
      <HeaderHome />
      <PercentResume percent={percent} />

      {/* <Content> */}
      <DDText
        weight="regular"
        size="md"
        align="left"
        color={theme.colors.gray[100]}
        style={{ marginBottom: 8, marginTop: 24 }}
      >
        Refeições
      </DDText>
      <DDButtton
        title="Nova refeição"
        iconType="add"
        onPress={handleOnPressNewMeal}
      />

      <DietListWrapper>
        <SectionList
          sections={refactoredMealsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleOnPressMeal(item)}>
              <Meal
                data={item}
                // isOnDiet={item.isOnDiet}
                // name={item.name}
                // time={item.date.split('T')[1]}
              />
            </Pressable>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <DDText
              align="left"
              size="lg"
              weight="bold"
              color={theme.colors.gray[100]}
              style={{ marginTop: 18, marginBottom: 8 }}
            >
              {title}
            </DDText>
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Parece que você não tem nenhuma refeicão cadastrada, faça o cadastro e comece a monitorar a sua dieta!!" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          style={{ flex: 1 }}
        />
      </DietListWrapper>
      {/* </Content> */}
    </ScreenContainer>
  );
};
