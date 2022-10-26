import {Platform, Stylesheet} from "react-native";

const basePalette = {
    black: "#161616",
    white: "#fafafa",
    darkGrey: "#999ca3",
    lightGrey: "#efefef",
    grey: "#e9e9e9",
    accent: "#e74c73"
  },
  Colors = {
    ...basePalette,
    // brand: basePalette.accent,
    accent: basePalette.accent,

    danger: "#d1563e",
    warn: "#e69c3d",
    success: "#94B75F",
    info: "#4CC3FF",

    primary: "#cc5e5e",
    secondary: "rgba(0, 0, 0, 0.08)",
    background: basePalette.white,
    text: "#555",
    altBackground: "#333",
    altText: basePalette.white,
    selectedBackground: "rgba(0, 0, 0, 0.06)",
    selectedText: "#5b697c",
    activeBackground: "rgba(0, 0, 0, 0.06)",
    activeText: "#5b697c"
  },
  Size = {
    none: 0,
    tiny: 4,
    smaller: 8,
    small: 12,
    default: 18,
    medium: 20,
    large: 32,
    larger: 48,
    big: 64,
    huge: 96,
    massive: 128
  },
  Fonts = {
    primary: Platform.select({ios: "Helvetica", android: "normal"}),
    secondary: Platform.select({ios: "Arial", android: "sans-serif"}),
    mono: Platform.select({ios: "Courier", android: "monospace"})
  };

// eslint-disable-next-line prettier/prettier
export {
  Colors,
  Size,
  Fonts
};
