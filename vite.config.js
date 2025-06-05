import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensures JSX and React features are handled

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Externalize dependencies that are loaded via CDN/importmap
      external: [
        'prop-types',         // For 'import PropTypes from "prop-types"'
        /^react(\/.*)?$/,     // For 'import React from "react"', 'import ... from "react/jsx-runtime"'
        /^react-dom(\/.*)?$/, // For 'import ReactDOM from "react-dom/client"', etc.
      ],
    },
  },
});
