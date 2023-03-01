export default {
  colors: {
    primary: {
      light: '#F4E6E7',
      medium: '#F3BABD',
      dark: '#BF3B44',
    },
    secondary: {
      light: '#E5F0DB',
      medium: '#CBE4B4',
      dark: '#639339',
    },
    white: '#ffffff',
    black: '#000000',
    gray: {
      700: '#FAFAFA',
      600: '#EFF0F0',
      500: '#DDDEDF',
      400: '#B9BBBC',
      300: '#5C6265',
      200: '#333638',
      100: '#1B1D1E',
    },
  },
  font_family: {
    regular: 'NunitoSans_400Regular',
    bold: 'NunitoSans_700Bold',
  },
  font_size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
};

export type TextWeight = 'regular' | 'bold';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
