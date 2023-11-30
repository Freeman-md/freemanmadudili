import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '14rem',
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
