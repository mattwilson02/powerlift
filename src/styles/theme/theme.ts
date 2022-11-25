import { colors } from './colors';
import { fontConfig, fontSizes } from './fonts';
import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig,
  fontSizes,
  colors
});

export default theme;
