import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Euclid: {
      400: {
        normal: 'EuclidCircularA_Regular'
      },
      500: {
        normal: 'EuclidCircularA_Medium'
      },
      600: {
        normal: 'EuclidCircularA_Semibold'
      },
      700: {
        normal: 'EuclidCircularA_Bold'
      }
    }
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20
  }
});

export default theme;
