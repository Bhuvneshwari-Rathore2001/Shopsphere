/** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       boxShadow: {
//         custom: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       },
//       backgroundImage: {
//         myImage:
//           'url("https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg")',
//       },
//     },
//   },
//   plugins: [],
// };


const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        myImage:
          'url("https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg")',
      },
    },
  },
  plugins: [],
});
