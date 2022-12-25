const srcDir = '@'
module.exports = {
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px'
      },
      colors: {
        primary: '#E6553B'
      },
      transitionProperty: {
        width: 'width',
        height: 'height'
      }
    }
    // fontFamily: {
    //   sans: ['"PT Sans"', 'sans-serif'],
    // }
  }
}
