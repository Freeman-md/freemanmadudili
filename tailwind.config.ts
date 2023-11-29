import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        primary: {
            DEFAULT: '#64FFDA'
        },
        secondary: {
            DEFAULT: '#020C1B'
        }
      }
    }
  }
}
