module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Poppins']
    },
    fontSize: {
      'xs': '.75rem',
      'tiny': '.875rem',
      'base': ['1rem',{
        letterSpacing: '-0.05em'
      }],
      'lg': ['1.125rem',{
        letterSpacing: '-0.05em'
      }],
      'xl': ['1.25rem',{
        letterSpacing: '-0.05em'
      }],
      '2xl': ['1.5rem',{
        letterSpacing: '-0.05em'
      }],
      '3xl': ['1.875rem',{
        letterSpacing: '-0.05em'
      }],
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': ['4rem',{
        letterSpacing: '-0.05em'
      }],
      '7xl': ['6rem',{
        letterSpacing: '-0.05em'
      }],
      '10xl': ['9rem',{
        letterSpacing: '-0.05em'
      }]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
