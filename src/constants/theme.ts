export const THEME = [
  {
    name: "sunset-theme",
    label: "Sunset",
    activeColor: {
      light: "40 100% 70%", // Adjusted HSL for a similar bright yellow-orange
      dark: "40 80% 50%", // Adjusted HSL for a similar vibrant yellow-orange
    },
    schemas: {
      light: {
        background: "0 0% 100%",
        foreground: "20 14.3% 4.1%",
        default: "24.6 95% 53.1%",
        primary: "24.6 95% 53.1%",
        "default-foreground": "60 9.1% 97.8%",
        "primary-foreground": "60 9.1% 97.8%",
        secondary: "60 4.8% 95.9%",
        "secondary-foreground": "24 9.8% 10%",
        danger: "0 84.2% 60.2%",
        "danger-foreground": "60 9.1% 97.8%",
        focus: "40 100% 50%",
        content1: "0 0% 100%",
        "content1-foreground": "20 14.3% 4.1%",
        content2: "60 4.8% 95.9%",
        "content2-foreground": "25 5.3% 44.7%",
        content3: "60 4.8% 95.9%",
        "content3-foreground": "24 9.8% 10%",
        overlay: "0 0% 100%",
      },
      dark: {
        background: "20 14.3% 4.1%",
        foreground: "60 9.1% 97.8%",
        content1: "20 14.3% 4.1%",
        "content1-foreground": "60 9.1% 97.8%",
        overlay: "20 14.3% 4.1%",
        default: "20.5 90.2% 48.2%",
        primary: "20.5 90.2% 48.2%",
        "primary-foreground": "60 9.1% 97.8%",
        "default-foreground": "60 9.1% 97.8%",
        secondary: "12 6.5% 15.1%",
        "secondary-foreground": "60 9.1% 97.8%",
        content2: "12 6.5% 15.1%",
        "content2-foreground": "24 5.4% 63.9%",
        content3: "12 6.5% 15.1%",
        "content3-foreground": "60 9.1% 97.8%",
        danger: "0 72.2% 50.6%",
        "danger-foreground": "60 9.1% 97.8%",
      },
    },
  },
  // {
  //   name: "blue-theme",
  //   label: "Blue",
  //   activeColor: {
  //     light: "210 80% 40%",
  //     dark: "210 70% 60%",
  //   },
  //   schemas: {
  //     light: {
  //       default: "210 80% 50%", // Updated blue for default color
  //       background: "210 63% 90%", // Light blue
  //       foreground: "0 0% 0%", // Black
  //       primary: "210 33% 60%", // Mid blue
  //       secondary: "210 50% 83%", // Lighter blue
  //       success: "123 39% 49%", // Keeping green for success
  //       danger: "0 72% 52%", // Keeping red for danger
  //       warning: "45 100% 50%", // Keeping yellow for warning
  //       focus: "210 44% 70%", // Lighter blue for focus
  //     },
  //     dark: {
  //       default: "210 70% 40%", // Adjusted blue for default color
  //       danger: "0 100% 75%", // Lighter red for dark theme danger
  //       warning: "45 100% 73%", // Lighter yellow for dark theme warning
  //       success: "123 39% 49%", // Keeping green for success
  //       background: "210 38% 35%", // Dark blue background
  //       foreground: "0 0% 100%", // White
  //       primary: "210 33% 82%", // Light blue for primary
  //       focus: "210 33% 79%", // Lighter blue for focus
  //     },
  //   },
  // },
  // {
  //   name: "green-theme",
  //   label: "Green",
  //   activeColor: {
  //     light: "120 80% 40%",
  //     dark: "120 70% 60%",
  //   },
  //   schemas: {
  //     light: {
  //       default: "120 80% 40%",
  //       background: "120 63% 90%",
  //       foreground: "0 0% 0%",
  //       primary: "120 33% 60%",
  //       secondary: "120 50% 83%",
  //       success: "123 39% 49%",
  //       danger: "0 72% 52%",
  //       warning: "45 100% 50%",
  //       focus: "120 44% 70%",
  //     },
  //     dark: {
  //       default: "120 70% 60%",
  //       danger: "0 100% 75%",
  //       warning: "45 100% 73%",
  //       success: "123 39% 49%",
  //       background: "120 38% 35%",
  //       foreground: "0 0% 100%",
  //       primary: "120 33% 82%",
  //       focus: "120 33% 79%",
  //     },
  //   },
  // },
  // {
  //   name: "pink-theme",
  //   label: "Pink",
  //   activeColor: {
  //     light: "330 80% 70%",
  //     dark: "330 70% 50%",
  //   },
  //   schemas: {
  //     light: {
  //       default: "330 80% 70%",
  //       background: "330 63% 95%",
  //       foreground: "0 0% 0%",
  //       primary: "330 50% 70%",
  //       secondary: "330 50% 90%",
  //       success: "123 39% 49%",
  //       danger: "0 72% 52%",
  //       warning: "45 100% 50%",
  //       focus: "330 50% 80%",
  //     },
  //     dark: {
  //       default: "330 70% 50%",
  //       danger: "0 100% 75%",
  //       warning: "45 100% 73%",
  //       success: "123 39% 49%",
  //       background: "330 38% 35%",
  //       foreground: "0 0% 100%",
  //       primary: "330 33% 82%",
  //       focus: "330 33% 79%",
  //     },
  //   },
  // },
  // {
  //   name: "red-theme",
  //   label: "Red",
  //   activeColor: {
  //     light: "0 80% 50%",
  //     dark: "0 70% 40%",
  //   },
  //   schemas: {
  //     light: {
  //       default: "0 80% 50%",
  //       background: "0 63% 90%",
  //       foreground: "0 0% 0%",
  //       primary: "0 70% 60%",
  //       secondary: "0 50% 83%",
  //       success: "123 39% 49%",
  //       danger: "0 72% 52%",
  //       warning: "45 100% 50%",
  //       focus: "0 70% 70%",
  //     },
  //     dark: {
  //       default: "0 70% 40%",
  //       danger: "0 100% 75%",
  //       warning: "45 100% 73%",
  //       success: "123 39% 49%",
  //       background: "0 38% 35%",
  //       foreground: "0 0% 100%",
  //       primary: "0 33% 82%",
  //       focus: "0 33% 79%",
  //     },
  //   },
  // },
  // {
  //   name: "orange-theme",
  //   label: "Orange",
  //   activeColor: {
  //     light: "30 80% 50%",
  //     dark: "30 70% 40%",
  //   },
  //   schemas: {
  //     light: {
  //       default: "30 80% 50%",
  //       background: "30 63% 90%",
  //       foreground: "0 0% 0%",
  //       primary: "30 70% 60%",
  //       secondary: "30 50% 83%",
  //       success: "123 39% 49%",
  //       danger: "0 72% 52%",
  //       warning: "30 100% 50%",
  //       focus: "30 70% 70%",
  //     },
  //     dark: {
  //       default: "30 70% 40%",
  //       danger: "0 100% 75%",
  //       warning: "30 100% 73%",
  //       success: "123 39% 49%",
  //       background: "30 38% 35%",
  //       foreground: "0 0% 100%",
  //       primary: "30 33% 82%",
  //       focus: "30 33% 79%",
  //     },
  //   },
  // },
];

export type IThemeType = (typeof THEME)[number];
