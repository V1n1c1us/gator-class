const defaultTheme = {
  breakpoints: {
    xs: '321px',
    sm: '576px',
    md: '767px',
    lg: '991px',
    xl: '1104px',
  },
  colors: {
    white: '#FFFFFF',
    secondary: '#ADA0B3',
    heart: '#F5185A',
    gray: '#c7c7c7',
    blue: '#f0f8ff',
    techs: {
      html5: '#DD4B26',
      js: '#EFD81E',
      react: '#5FD6F7',
    },
    gradient: {
      primary: '#1b1a1c',
      secondary: '#371a45',
    },
  },
  font: {
    sizes: {
      xxxs: '11px',
      xxs: '12px',
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '22px',
      xxl: '28px',
    },
    weights: {
      regular: 400,
      bold: 700,
    },
  },
} as const;

export default defaultTheme;
