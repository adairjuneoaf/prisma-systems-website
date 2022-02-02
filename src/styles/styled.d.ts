import "styled-components";

import theme from "./theme";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      yellow_prisma: string;
      orange_prisma: string;
    };
  }
}
