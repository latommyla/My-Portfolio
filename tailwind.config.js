module.exports = {
  content: ["./docs/index.html"],
  theme: {
    fontFamily: {
      'monster': ["'Montserrat'", 'sans-serif'],
      'heebo': ["'Heebo", 'sans-serif'],
    },
      extend: {
        backgroundImage: (theme) => ({
          'homepage-main': "url('/Users/latommyla/My-Portfolio/imgs/homepage.jpeg')", 
        }),
      },
    },
  plugins: [],
}
