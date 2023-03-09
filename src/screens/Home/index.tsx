import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { useEffect, useState } from 'react';

import { FlatList, SectionList, SectionListData } from 'react-native';

import { DDText } from '@components/DDText';
import { DailyDiet } from '@components/DailyDiet';
import { DarkButtton } from '@components/DarkButtton';
import { HeaderHome } from '@components/HeaderHome';
import { ListEmpty } from '@components/ListEmpty';
import { Meal } from '@components/Meal';
import { PercentResume } from '@components/PercentResume';
import { ScreenContainer } from '@components/ScreenContainer';

import { Content, DietListWrapper } from './styles';

export type MealProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  isOnDiet: boolean;
};

export type MealSectionsProps = { title: string; data: MealProps[] };
// export type MealSectionsProps = SectionListData<
//   { title: string },
//   { data: MealProps }
// >;

const meals: MealProps[] = [
  {
    id: '1',
    name: 'Café da manhã',
    description: 'Café com leite, pão com manteiga e queijo, suco de laranja',
    date: '12-08-2022T08:00:00',
    isOnDiet: false,
  },
  {
    id: '2',
    name: 'Almoço',
    description: 'Arroz, feijão, carne, salada, suco de laranja',
    date: '12-08-2022T12:00:00',
    isOnDiet: true,
  },
  {
    id: '3',
    name: 'Jantar',
    description: 'Tapioca com queijo branco, suco de laranja',
    date: '12-08-2022T18:00:00',
    isOnDiet: true,
  },
  {
    id: '4',
    name: 'Lanche da tarde',
    description: 'Barra de fibras',
    date: '14-08-2022T16:00:00',
    isOnDiet: true,
  },
  {
    id: '5',
    name: 'Café da manhã',
    description: 'Café, bolacha de água e sal',
    date: '14-08-2022T08:00:00',
    isOnDiet: true,
  },
  {
    id: '6',
    name: 'Almoço',
    description: 'Salada, com frango grelhado e suco de melancia',
    date: '14-08-2022T12:00:00',
    isOnDiet: true,
  },
  {
    id: '7',
    name: 'Jantar',
    description: 'Arroz com batata doce e chá de hibisco',
    date: '15-08-2022T18:00:00',
    isOnDiet: true,
  },
  {
    id: '8',
    name: 'Lanche da tarde',
    description: 'Iogurte natural com granola',
    date: '15-08-2022T16:00:00',
    isOnDiet: true,
  },
  {
    id: '9',
    name: 'Almoço',
    description: 'Hamburguer e cerveja',
    date: '15-08-2022T13:00:00',
    isOnDiet: false,
  },
];

const mealsSections = [
  {
    title: '12-08-2022',
    data: [
      {
        id: '1',
        name: 'Café da manhã',
        description:
          'Café com leite, pão com manteiga e queijo, suco de laranja',
        date: '12-08-2022T08:00:00',
        isOnDiet: false,
      },
      {
        id: '2',
        name: 'Almoço',
        description: 'Arroz, feijão, carne, salada, suco de laranja',
        date: '12-08-2022T12:00:00',
        isOnDiet: true,
      },
      {
        id: '3',
        name: 'Jantar',
        description: 'Tapioca com queijo branco, suco de laranja',
        date: '12-08-2022T18:00:00',
        isOnDiet: true,
      },
    ],
  },
  {
    title: '14-08-2022',
    data: [
      {
        id: '4',
        name: 'Lanche da tarde',
        description: 'Barra de fibras',
        date: '14-08-2022T16:00:00',
        isOnDiet: true,
      },
      {
        id: '5',
        name: 'Café da manhã',
        description: 'Café, bolacha de água e sal',
        date: '14-08-2022T08:00:00',
        isOnDiet: true,
      },
      {
        id: '6',
        name: 'Almoço',
        description: 'Salada, com frango grelhado e suco de melancia',
        date: '14-08-2022T12:00:00',
        isOnDiet: true,
      },
    ],
  },
  {
    title: '15-08-2022',
    data: [
      {
        id: '7',
        name: 'Jantar',
        description: 'Arroz com batata doce e chá de hibisco',
        date: '15-08-2022T18:00:00',
        isOnDiet: true,
      },
      {
        id: '8',
        name: 'Lanche da tarde',
        description: 'Iogurte natural com granola',
        date: '15-08-2022T16:00:00',
        isOnDiet: true,
      },
      {
        id: '9',
        name: 'Almoço',
        description: 'Hamburguer e cerveja',
        date: '15-08-2022T13:00:00',
        isOnDiet: false,
      },
    ],
  },
] as MealSectionsProps[];

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState(80.86);
  const [mealsList, setMealsList] = useState<MealProps[]>([]);

  const theme = useTheme();
  const { navigate } = useNavigation();

  // function refactorMealsList() {
  //   const result = meals.reduce<MealSectionsProps[]>((acc, meal) => {
  //     let dateGroup =
  //       acc.find((item) => item.date === meal.date.split('T')[0]) || [];
  //     // console.log('🚀 ~ file: index.tsx:186 ~ result ~ meal.date:', meal.date);
  //     console.log('🚀 ~ file: index.tsx:186 ~ result ~ dateGroup:', dateGroup);

  //     if (!dateGroup) {
  //       dateGroup = { date: meal.date, data: [] };
  //       acc.push(dateGroup);
  //     }

  //     dateGroup.data.push(meal);

  //     return acc;
  //   }, []);
  // }

  // function refactorMealsList() {
  //   const data = [] as MealSectionsProps[];

  //   meals.forEach((meal) => {
  //     const date = meal.date.split('T')[0];

  //     const isTitleSectionExists = data.find((item) => item.data.date === date);

  //     if (!isTitleSectionExists) {
  //       const newItem = {
  //         title: date,
  //         data: [meal],
  //       };

  //       data.push(newItem);
  //     } else {
  //       const index = data.findIndex((item) => item.title === date);

  //       data[index].data.push(meal);
  //     }
  //   });

  //   return JSON.stringify(data);
  // }

  function handleOnPressNewMeal() {
    navigate('new_meal');
  }

  useEffect(() => {
    setIsLoading(true);
    setMealsList(meals);
    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setMealsList(meals);
  //   setIsLoading(false);
  // }, [mealsList]);

  // useFocusEffect(
  //   useCallback(() => {
  //     setIsLoading(true);
  //     setMealsList(meals);
  //     setIsLoading(false);
  //   }, []),
  // );

  return (
    <ScreenContainer style={{ paddingHorizontal: 24 }}>
      <HeaderHome />
      <PercentResume percent={percent} />

      <Content>
        <DDText
          weight="regular"
          size="md"
          align="left"
          color={theme.colors.gray[100]}
          style={{ marginBottom: 8 }}
        >
          Refeições
        </DDText>
        <DarkButtton
          title="Nova refeição"
          showPlusIcon
          onPress={handleOnPressNewMeal}
        />

        <DietListWrapper>
          {/* <DDText align="center">-------------------------------------</DDText> */}
          {/* <Meal
            isOnDiet={true}
            name="{item.name}"
            time="{item.date.split('T')[1]}"
          /> */}
          {isLoading ? (
            <DDText align="center">{JSON.stringify(meals)}</DDText>
          ) : (
            // <FlatList
            //   data={meals}
            //   keyExtractor={(item) => item.id}
            //   renderItem={({ item }) => (
            //     <Meal
            //       isOnDiet={item.isOnDiet}
            //       name={item.name}
            //       time={item.date.split('T')[1]}
            //     />
            //   )}
            //   // ListEmptyComponent={() => (
            //   //   <ListEmpty message="Parece que você não tem nenhuma refeicão cadastrada, faça o cadastro e comece a monitorar a sua dieta!!" />
            //   // )}
            //   showsVerticalScrollIndicator={false}
            //   // contentContainerStyle={{
            //   //   paddingBottom: 100,
            //   // }}
            //   style={{
            //     width: '100%',
            //     flex: 1,
            //     backgroundColor: 'red',
            //   }}
            // />
            mealsList.map((meal) => (
              <Meal
                key={meal.id}
                isOnDiet={meal.isOnDiet}
                name={meal.name}
                time={meal.date.split('T')[1]}
              />
            ))
          )}
          {/* <SectionList
            sections={mealsList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Meal
                isOnDiet={item.isOnDiet}
                name={item.name}
                time={item.date.split('T')[1]}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <DDText
                align="left"
                size="xs"
                weight="bold"
                color={theme.colors.gray[100]}
                style={{ marginBottom: 16 }}
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
          /> */}
          {/* <DDText align="center">-------------------------------------</DDText> */}
        </DietListWrapper>
      </Content>
    </ScreenContainer>
  );
};
