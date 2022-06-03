import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      skyBlue: string;
      blue: string;
      navy: string;
      gold: string;
      darkGold: string;
      red: string;
      gray: string;
    };
    boxShadow: {
      normal: string;
      navy: string;
    };
    headerHeight: string;
  }
}
