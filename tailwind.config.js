const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        ui: {
          background: 'var(--color-ui-background)',
          sidebar: 'var(--color-ui-sidebar)',
          typo: 'var(--color-ui-typo)',
          primary: 'var(--color-ui-primary)',
          border: 'var(--color-ui-border)',
        },
      },
      spacing: {
        sm: '24rem',
      },
      screens: {
        xxl: '1400px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         ui: {
//           background: 'var(--color-ui-background)',
//           sidebar: 'var(--color-ui-sidebar)',
//           typo: 'var(--color-ui-typo)',
//           primary: 'var(--color-ui-primary)',
//           border: 'var(--color-ui-border)'
//         }
//       },
//       spacing: {
//         sm: '24rem'
//       },
//       screens: {
//         xxl: '1400px'
//       }
//     },
//     container: {
//       center: true,
//       padding: '1rem'
//     }
//   },
//   variants: {},
//   plugins: [],
// }
