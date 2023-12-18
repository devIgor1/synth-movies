import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-image": "url('/assets/images/background.jpg')",
        "login-background": "url('/assets/images/login.jpg')",
        "register-background": "url('/assets/images/register.jpg')",
      },
      colors: {
        header: "#3E005B",
        pinkNeon: "#FE347E",
        blueNeon: "#04d9ff",
        loginForm: "#3A2B3F",
      },
      fontFamily: {
        vhs: "VHS",
        roadRage: "Road-Rage",
      },
    },
  },
  plugins: [],
}
export default config
