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
        "vhs-gif":
          "url('https://68.media.tumblr.com/595a5fa01fe53ca0e4ca8f37bacc849d/tumblr_nve67mJtue1tanofjo1_500.gif')",
        "dashboard-theme": "url('/assets/images/dashboard-theme.png')",
      },
      colors: {
        header: "#3E005B",
        pinkNeon: "#EB139A",
        logoNeon: "#FC6BA4",
        blueNeon: "#04d9ff",
        loginForm: "#3A2B3F",
        darkPurple: "#19051F",
        darkBlue: "#14004E",
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
