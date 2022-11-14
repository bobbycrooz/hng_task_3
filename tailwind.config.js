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
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
