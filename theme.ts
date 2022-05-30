import { extendTheme, ThemeConfig, ThemeComponents} from "@chakra-ui/react";

const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const components : ThemeComponents = {
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: "none",
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
};

export const theme = extendTheme({ config, components });
