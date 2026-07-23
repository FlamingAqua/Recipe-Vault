export const APP_CONFIG = {
  name: "Recipe Vault",

  tagline: "Your Personal Cookbook",

  description:
    "Create, organize and perfect your favourite recipes.",

  version: "1.0.0",

  author: "Manesh",

  logo: "👨‍🍳",

  defaultCategory: "Veg",

  defaultDifficulty: "Easy",

  defaultPrepTime: 15,

  defaultCookTime: 30,

  defaultServings: 2,

  maxImageSize: 5 * 1024 * 1024,

  acceptedImageTypes: [
    "image/png",
    "image/jpeg",
    "image/webp",
  ],

  animationDuration: 0.25,
} as const;