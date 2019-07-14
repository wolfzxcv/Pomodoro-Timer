const brand = '#022b70';
const activeBrand = '#0b2c64';
const lightBrand = '#f0f3f7';
const lighterBrand = '#f5f7fa';

const secondary = '#75dbf2';
const secondaryLight = '#cff5f9';
const activeSecondary = '#2fb7c6';

const tertiary = '#ffc832';

const danger = '#d10442';
const dangerLight = '#fdebf0';
const activeDanger = '#d10644';

const activeSubtle = '#f3f5f8';
const activeSubtleSecondary = '#062b6a';

const success = '#0c8573';
const activeSuccess = '#0f7d6d';

const text = '#333333';

const darkgray = '#676767';
const gray = '#b4b4b4';
const lightgray = '#e8e8e8';
const white = '#ffffff';

const iconBackground = '#e1e6ee';

export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 18, 24, 30, 40],
  colors: {
    brand,
    iconBackground,
    activeBrand,
    lightBrand,
    lighterBrand,
    secondary,
    secondaryLight,
    activeSecondary,
    activeSubtle,
    activeSubtleSecondary,
    tertiary,
    danger,
    dangerLight,
    activeDanger,
    success,
    activeSuccess,
    text,
    darkgray,
    gray,
    lightgray,
    white,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  lineHeights: [1.5, 1.44],
  fonts: {
    main: 'Catamaran, sans-serif',
  },
  buttons: {
    primary: {
      colorName: 'white',
      color: white,
      backgroundColor: brand,
      boxShadow: '1px 1px 3px 0 rgba(2, 43, 112, 0.3)',
      borderRadius: '2em',
      border: `solid 2px ${brand}`,
    },
    secondary: {
      colorName: 'brand',
      color: brand,
      backgroundColor: secondary,
      boxShadow: '1px 1px 3px 0 rgba(2, 43, 112, 0.3)',
      borderRadius: '2em',
      border: `solid 2px ${secondary}`,
    },
    subtle: {
      colorName: 'brand',
      color: brand,
      backgroundColor: 'transparent',
      boxShadow: '1px 1px 3px 0 rgba(0, 0, 0, 0.15);',
      borderRadius: '2em',
      border: `solid 2px ${brand}`,
    },
    'subtle-secondary': {
      colorName: 'secondary',
      color: secondary,
      backgroundColor: 'transparent',
      borderRadius: '2em',
      border: `solid 2px ${secondary}`,
    },
    success: {
      colorName: 'white',
      color: white,
      backgroundColor: success,
      boxShadow: '1px 1px 3px 0 rgba(2, 43, 112, 0.3)',
      borderRadius: '2em',
      border: `solid 2px ${success}`,
    },
    danger: {
      colorName: 'white',
      color: white,
      backgroundColor: danger,
      boxShadow: '1px 1px 3px 0 rgba(2, 43, 112, 0.3)',
      borderRadius: '2em',
      border: `solid 2px ${danger}`,
    },
  },
};
