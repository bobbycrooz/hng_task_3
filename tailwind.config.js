/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'toma-sb': ['toma-semibold', 'sans-serif'],
      'std-book': ['Std-book', 'sans-serif'],
      'toma-reg': ['toma-reg', 'sans-serif'],
      'std-black': ['Std-black', 'sans-serif']
    },
    extend: {
      colors: {
        'hng-purple':'#A02279',
       'pri': "#F6F6F6",
       'light-blue': "#00C2FF",
       'hng-black': "#434343",
       'dark-blue': '#001A77'
}
    },
  },
  plugins: [],
}
