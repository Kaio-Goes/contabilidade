module.exports = {
  purge: {
    content: [
      './src/pages/**/*.tsx',
      './src/components/**/*.tsx'
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
