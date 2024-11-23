import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '124': '31rem', 
        '128': '32rem',
      },
      boxShadow: {
        'inner-xl': 'inset 0 2px 15px rgba(0, 0, 0, 0.25)', // Custom large inner shadow
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        offwhite: '#f5f5f5',  
      },
    },
  },
  plugins: [],
};
export default config;
