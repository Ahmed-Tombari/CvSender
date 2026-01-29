module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // Gradient Able Palette - Refined
        primary: {
          light: '#73b4ff',
          DEFAULT: '#4099ff',
          dark: '#2d7cd6',
          start: '#4099ff',
          end: '#73b4ff',
        },
        secondary: {
          light: '#59e0c5',
          DEFAULT: '#2ed8b6',
          dark: '#20a88c',
          start: '#2ed8b6',
          end: '#59e0c5',
        },
        success: {
          light: '#59e0c5',
          DEFAULT: '#2ed8b6',
          dark: '#20a88c',
        },
        warning: {
          light: '#ffcb80',
          DEFAULT: '#FFB64D',
          dark: '#d99026',
          start: '#FFB64D',
          end: '#ffcb80',
        },
        danger: {
          light: '#ff869a',
          DEFAULT: '#FF5370',
          dark: '#d9344f',
          start: '#FF5370',
          end: '#ff869a',
        },
        info: {
          light: '#73b4ff',
          DEFAULT: '#4099ff',
          dark: '#2d7cd6',
        },
        slate: {
          50: '#f8fafc', // Lighter background
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.04)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow-primary': '0 0 20px rgba(64, 153, 255, 0.5)',
        'glow-secondary': '0 0 20px rgba(46, 216, 182, 0.5)',
        'glow-danger': '0 0 20px rgba(255, 83, 112, 0.5)',
        'glow-warning': '0 0 20px rgba(255, 182, 77, 0.5)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4099ff 0%, #73b4ff 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #2ed8b6 0%, #59e0c5 100%)',
        'gradient-warning': 'linear-gradient(135deg, #FFB64D 0%, #ffcb80 100%)',
        'gradient-danger': 'linear-gradient(135deg, #FF5370 0%, #ff869a 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
