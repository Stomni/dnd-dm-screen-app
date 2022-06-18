import {
  extendTheme,
  theme as base,
  ThemeConfig,
  ThemeComponents,
} from "@chakra-ui/react";

export const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: true },
  colors: {
    dark: {
      bgGradient: "#3A3C4E",
      accent: "#007983",
      tertiary: "#10495F",
      darkGold: "#D9A21B",
    },
  },
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            background: "#3A3C4E",
            borderColor: "#007983",
          },
        },
      },
    },

    Textarea: {
      variants: {
        outline: {
          background: "#3A3C4E",
          borderColor: "#007983",
        },
      },
    },

    Select: {
      variants: {
        outline: {
          field: {
            background: "#3A3C4E",
            borderColor: "#007983",
          },
        },
      },
    },

    Button: {
      baseStyle: {
        bg: "#007983",
        _focus: {
          boxShadow: "none",
        },
      },
      variants: {
        solid: {
          bg: "#007983",
        },
      },
    },
    IconButton: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
});
