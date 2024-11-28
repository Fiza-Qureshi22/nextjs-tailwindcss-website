import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/page.ts/**/*.{css,tsx}",            // Pointing to the specific page.ts file
    "./src/components/**/*.{tsx,tsx,tsx,tsx,tsx,tsx}",  // Look inside the components folder for TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
