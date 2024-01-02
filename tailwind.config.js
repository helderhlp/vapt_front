/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    // './pages/**/*.{ts,tsx}',
    // './components/**/*.{ts,tsx}',
    // './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        primary: {
          'blue-dark': '#0522fd',
          'blue-super-light': '#d9ecec',
          pink: '#d476ab',
          gray: '#58595b',
          'green-dark': '#004d55',
        },
      },
      backgroundImage: {
        'background-destiny': "url('/assets/background-destiny.png')",
        'background-excursionista-header':
          "url('/assets/excursionista_header.png')",
        'background-contact': "url('/assets/contato_header.png')",
        'background-card-mobile':
          "url('/assets/aparecida_do_norte_destino_card_mobile.png')",
      },
      backgroundSize: {
        '80%': '80%',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
