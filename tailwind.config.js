/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          orange: '#FF9900',
          'orange-dark': '#E47911',
          navy: '#131921',
          'nav-blue': '#232F3E',
          blue: '#146EB4',
          'light-blue': '#37475A',
        },
        ai: {
          blue: '#00BFFF',
          'blue-glow': '#007BFF',
          purple: '#7B2FBE',
        }
      },
      animation: {
        'wave': 'wave 1.2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        'wave': {
          '0%, 100%': { transform: 'scaleY(0.5)' },
          '50%': { transform: 'scaleY(1.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px #00BFFF, 0 0 10px #00BFFF' },
          '100%': { boxShadow: '0 0 20px #00BFFF, 0 0 40px #00BFFF, 0 0 60px #007BFF' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

