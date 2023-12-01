import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '10rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#64FFDA',
        },
        secondary: {
          DEFAULT: '#020C1B'
        },
        smoky: {
          DEFAULT: '#AAAAAA'
        }
      },
    }
  }
}
