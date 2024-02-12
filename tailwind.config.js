/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#cf00ff",
        
"secondary": "#0000ff",
        
"accent": "#0079ff",
        
"neutral": "#0c110d",
        
"base-100": "#f4fdff",
        
"info": "#009ce8",
        
"success": "#78a400",
        
"warning": "#ff8b00",
        
"error": "#ff0355",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

