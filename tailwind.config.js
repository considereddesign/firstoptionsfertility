module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'Sans-serif']
    },
    extend: {
      opacity: {
        '90': '0.90'
      },
      colors: {
        'gray': {
          100: '#F9F5F0',
          200: '#E8E7E4',
          300: '#CFCFCF',
          400: '#ACACAC',
          500: '#888888',
          600: '#7A7A7A',
          700: '#525252',
          800: '#3D3D3D',
          900: '#292929',
        },
        'secondary': {
          50: '#F7F8FC',
          100: '#EEF0FA',
          200: '#D5DAF1',
          300: '#BBC4E9',
          400: '#8997D9',
          500: '#566BC8',
          600: '#4D60B4',
          700: '#344078',
          800: '#27305A',
          900: '#1A203C',
        },
        'primary': {
          50: '#F4FCFA',
          100: '#E8F8F5',
          200: '#C6EEE6',
          300: '#A3E4D7',
          400: '#5FD0BA',
          500: '#1ABC9C',
          600: '#17A98C',
          700: '#10715E',
          800: '#0C5546',
          900: '#08382F',
        },
      }
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ]
  }
}
